import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorAlert } from "../../components/Alerts/ErrorAlert";
import { InputComponent } from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";
import { Button, Container, Form, Header, Title } from "./styles";

export function Login() {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleSignIn(data: any) {
    try {
      await signIn(data);
    } catch (e: any) {
      ErrorAlert(
        e.response?.status == 400
          ? "Usuário ou senha inválido(s)."
          : "Erro! Tente novamente mais tarde."
      );
    }
  }

  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
      </Header>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <InputComponent
          register={register("email")}
          type="text"
          label={"E-mail"}
        />
        <InputComponent
          register={register("password")}
          type="password"
          label={"Senha"}
        />
        <Button type={"submit"}>Entrar</Button>
      </form>
    </Container>
  );
}
