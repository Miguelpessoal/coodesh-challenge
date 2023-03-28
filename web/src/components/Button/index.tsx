import { Button } from "./styles";

type ButtonProps = {
  color?: string;
  name?: string;
};

export function ButtonComponent({ color, name }: ButtonProps) {
  return <Button background="">{name}</Button>;
}
