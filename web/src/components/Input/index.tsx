import { Content, Input, Label } from "./styles";

type InputProps = {
  type: string;
  label: string;
};

export function InputComponent({ type, label }: InputProps) {
  return (
    <Content>
      <Label>{label}</Label>
      <Input type={type} />
    </Content>
  );
}
