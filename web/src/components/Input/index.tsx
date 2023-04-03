import { Content, Input, Label } from "./styles";

type InputProps = {
  type: string;
  label: string;
  register: any;
};

export function InputComponent({ type, label, register }: InputProps) {
  return (
    <Content>
      <Label>{label}</Label>
      <Input type={type} {...register} />
    </Content>
  );
}
