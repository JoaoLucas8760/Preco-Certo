import { Container, InputText } from "./styles";
import { TextInputProps } from "react-native";

export default function Input({ ...props }: TextInputProps) {
  return (
    <Container>
      <InputText {...props} placeholderTextColor={"#000"} />
    </Container>
  );
}
