import * as AuthSession from "expo-auth-session";

import { Container, Text } from "./styles";

import AppleIcon from "./assets/apple-icon.svg";
import FacebookIcon from "./assets/facebook-icon.svg";
import GoogleIcon from "./assets/google-icon.svg";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext, userProps } from "@/contexts/User";

interface AuthButtonProps {
  authType: "apple" | "google" | "facebook";
}

type AuthGoogleResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export default function AuthButton({ authType }: AuthButtonProps) {
  const navigation = useNavigation();

  const { user, setUser } = useContext(UserContext);

  async function GoogleSigIn() {
    try {
      const cliend_ID =
        "161274096184-git14k06c24lc50na7sdvme9ug2gm862.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@perfluka/preco-certo";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${cliend_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthGoogleResponse;
      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userData = await response.json();
        const userObject = {
          id: userData.id,
          email: userData.email,
          first_name: userData.given_name,
          last_name: userData.family_name,
          picture: userData.picture,
        };
        console.log(userData);

        setUser(userObject);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container authType={authType} onPress={GoogleSigIn}>
      {authType === "apple" && <AppleIcon width={20} height={20} />}
      {authType === "google" && <GoogleIcon width={20} height={20} />}
      {authType === "facebook" && <FacebookIcon width={20} height={20} />}

      <Text>
        Continuar com
        {authType === "apple" && "Apple"}
        {authType === "google" && "Google"}
        {authType === "facebook" && "Facebook"}
      </Text>
    </Container>
  );
}
