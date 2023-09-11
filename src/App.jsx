import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import MultiselectFilter from "@/components/MultiselectFilter";
import PaginationTable from "@/components/PaginationTable/PaginationTable";
import Error from "@/components/Error";

import darkTheme from "./theme";
import { getAllTypes } from "./lib/event";

export default function App() {
  const [theme] = useState(darkTheme);
  const [selectedEventTypes, setSelectedEventTypes] = React.useState([]);
  const [page, setPage] = React.useState("");

  const { data: types } = useQuery({
    queryKey: ["types"],
    queryFn: () => getAllTypes(),
    initialData: [],
  });

  // changing event type filter updates page state to head of table
  const onSelectEventTypes = (value) => {
    setPage("");
    setSelectedEventTypes(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ErrorBoundary fallback={<Error />}>
          <Card>
            <Header>
              <Title>Events Table</Title>
              <MultiselectFilter
                options={types}
                selectedEventTypes={selectedEventTypes}
                setSelectedEventTypes={onSelectEventTypes}
              />
            </Header>
            <PaginationTable
              page={page}
              selectedEventTypes={selectedEventTypes}
              setPage={setPage}
            />
          </Card>
        </ErrorBoundary>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: #121212;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #222b36;
  width: 1340px;
  height: 634px;
  border-radius: 8px;

  @media only screen and (max-width: 1340px) {
    width: 100%;
  }
`;

const Header = styled.div`
  padding: 17px;
`;

const Title = styled.div`
  font-size: 17px;
  padding-bottom: 26px;
`;
