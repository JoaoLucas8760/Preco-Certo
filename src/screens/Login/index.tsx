import AuthButton from "../../components/AuthButton";
import {
  AuthWrapper,
  Body,
  Container,
  Footer,
  LogoWrap,
  TextFooter,
  TextLink,
} from "./styles";
import { Text } from "./styles";
import Logo from "@assets/Logo.svg";
import { View } from "react-native";

export default function Login() {
  return (
    <Container>
      <Body>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <Text>
          Bem-vindo ao Preço Certo, onde você encontrará os melhores preços para
          o produto que você deseja.
        </Text>

        <AuthWrapper>
          <AuthButton authType="apple" />
          <AuthButton authType="google" />
          <AuthButton authType="facebook" />
        </AuthWrapper>
      </Body>
      <Footer>
        <TextFooter>
          Ao continuar você aceita nossos <TextLink>termos de uso</TextLink> e{" "}
          <TextLink>políticas de privacidade</TextLink>
        </TextFooter>
      </Footer>
    </Container>
  );
}
