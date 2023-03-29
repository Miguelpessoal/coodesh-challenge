import { Button } from "./styles";

type ButtonProps = {
  name: string;
  type?: "primary" | "secondary";
};

export function ButtonComponent({ type, name }: ButtonProps) {
  return <Button type={type}>{name}</Button>;
}
