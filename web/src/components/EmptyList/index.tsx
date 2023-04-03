import { Content, Message } from "./styles";
import * as React from "react";

export function EmptyList() {
  return (
    <Content>
      <Message>Não há transações cadastradas!</Message>
    </Content>
  );
}
