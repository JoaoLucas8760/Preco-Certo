import { UserContext } from "@/contexts/User";
import {
  Avatar,
  Container,
  Header,
  TextsWrapperHead,
  WelcomeDesc,
  WelcomeText,
} from "./styles";
import { useContext } from "react";
import { View } from "react-native";
import Input from "@/components/Input";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Header>
        <Avatar
          source={{ uri: user.picture }}
          style={{ borderWidth: 2, borderColor: "#50c05c" }}
        />
        <TextsWrapperHead>
          <WelcomeText>
            Olá, {user.first_name} {user.last_name}
          </WelcomeText>
          <WelcomeDesc>Em busca de preços baixos! </WelcomeDesc>
        </TextsWrapperHead>
      </Header>

      <Input placeholder="Pesquise por: Coca Cola" style={{ marginTop: 20 }} />
    </Container>
  );
}
