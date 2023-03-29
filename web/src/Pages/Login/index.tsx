import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { Container, Form, Header, Title } from "./styles";

export function Login() {
  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
      </Header>
      <Form>
        <InputComponent type="text" label={"E-mail"} />
        <InputComponent type="password" label={"Senha"} />
      </Form>
      <ButtonComponent name="Entrar" />
    </Container>
  );
}
