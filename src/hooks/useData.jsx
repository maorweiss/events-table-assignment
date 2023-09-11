import { getAllEvents } from "@/lib/event";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useData(page, rowsPerPage, eventTypes) {
  // We need this state in order to remember the total count while fetching new page
  const [pagination, setPagination] = useState({ total: 0, startIndex: 0 });
  
  const eventTypeStr = eventTypes.map(({ key }) => key).join(",");

  const { data, isLoading} = useQuery(
    ["data", page, rowsPerPage, eventTypeStr],
    async () => {
      const result = await getAllEvents(page, rowsPerPage, eventTypeStr);
      setPagination({ total: result.total, startIndex: result.startIndex });
      return result;
    },
    {useErrorBoundary: true}
  );

  return { ...(data ?? { ...pagination, data: [] }), isLoading };
}
