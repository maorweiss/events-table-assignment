import React from "react";
import styled from "styled-components";

const severityToColor = {
  low: "#3A90E5",
  medium: "#FFB547",
  high: "#F06161",
};

export default function SeverityCell({ severity }) {
  return <Severity $color={severityToColor[severity]}>{severity}</Severity>;
}

const Severity = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  height: 23px;
  text-transform: uppercase;
  font-size: 11px;
  background-color: ${({ $color }) => $color};
  border-radius: 8px;
  padding: 0px 8px;
`;
