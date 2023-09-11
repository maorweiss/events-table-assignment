import React from "react";
import styled from "styled-components";

export default function UserCell({ user }) {
  return (
    <User>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
    </User>
  );
}

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 14px;
`;

const Email = styled.div`
  font-size: 13px;
  color: #919eab;
`;
