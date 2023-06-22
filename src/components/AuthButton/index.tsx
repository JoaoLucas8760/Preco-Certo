import { Container, Text } from "./styles";

import AppleIcon from "./assets/apple-icon.svg";
import FacebookIcon from "./assets/facebook-icon.svg";
import GoogleIcon from "./assets/google-icon.svg";

interface AuthButtonProps {
  authType: "apple" | "google" | "facebook";
}

export default function AuthButton({ authType }: AuthButtonProps) {
  return (
    <Container authType={authType}>
      {authType === "apple" && <AppleIcon width={20} height={20} />}
      {authType === "google" && <GoogleIcon width={20} height={20} />}
      {authType === "facebook" && <FacebookIcon width={20} height={20} />}

      <Text>
        Continuar com {authType === "apple" && "Apple"}
        {authType === "google" && "Google"}
        {authType === "facebook" && "Facebook"}
      </Text>
    </Container>
  );
}
