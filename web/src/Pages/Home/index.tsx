import { EmptyList } from "../../components/EmptyList";
import { List } from "../../components/List";
import { Button, Content, Title } from "./styles";

export function Home() {
  return (
    <Content>
      <Title>Dados de transação</Title>
      <Button>Importar dados</Button>
      <List />
      {/* <EmptyList /> */}
    </Content>
  );
}
