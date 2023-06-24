import { UserContext } from "@/contexts/User";
import { Avatar, Container, Header, WelcomeText } from "./styles";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Header>
        <Avatar
          source={{ uri: user.picture }}
          style={{ borderWidth: 2, borderColor: "#50c05c" }}
        />
        <WelcomeText>
          Olá,{user.first_name} {user.last_name}
        </WelcomeText>
      </Header>
    </Container>
  );
}
