import express from "express";
import { DateTime } from "luxon";

import { startCase } from "../src/utils.js";
import data from "./data.json" assert { type: "json" };

const app = express();
const port = 4000;

const sortedData = data.sort((a, b) =>
  DateTime.fromISO(b.time).diff(DateTime.fromISO(a.time)).toMillis()
);

app.get("/api/events", (req, res) => {
  const start = req.query.start;
  const startDate = DateTime.fromISO(start);
  const length = parseInt(req.query.length ?? 5);
  const eventTypes = req.query.eventTypes?.split(",").filter((x) => x?.length);
  
  const filteredRows = filterData(eventTypes);
  const { pagedData, startIndex } = pageData(
    filteredRows,
    start,
    startDate,
    length
  );

  res.type("json").send(
    JSON.stringify({
      data: pagedData,
      next: filteredRows[startIndex + length]?.time ?? null,
      prev: filteredRows[Math.max(0, startIndex - length)]?.time ?? null,
      total: filteredRows.length,
      startIndex,
    })
  );
});

app.get("/api/types", (req, res) => {
  const types = Array.from(new Set(data.map((event) => event.eventType))).map(
    (eventType) => ({
      key: eventType,
      title: startCase(eventType),
    })
  );

  res.type("json").send(JSON.stringify(types));
});

function pageData(filteredRows, start, startDate, length) {
  const startIndex = start
    ? filteredRows.findIndex(
        ({ time }) => DateTime.fromISO(time).diff(startDate).toMillis() <= 0
      )
    : 0;

  const pagedData = filteredRows.slice(
    Math.max(0, startIndex),
    startIndex + length
  );
  return { pagedData, startIndex };
}

function filterData(eventTypes) {
  return eventTypes?.length
    ? sortedData.filter(({ eventType }) => eventTypes.includes(eventType))
    : sortedData;
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
