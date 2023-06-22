import styled from "styled-components/native";

interface AuthButtonProps {
  authType: "apple" | "google" | "facebook";
}

export const Container = styled.TouchableOpacity<AuthButtonProps>`
  align-items: center;
  justify-content: center;
  ${(props: any) => props.authType === "apple" && "background-color: #211f1f"};
  ${(props: any) => props.authType === "google" && "background-color: #3C79E6"};
  ${(props: any) =>
    props.authType === "facebook" && "background-color: #3B5998"};
  padding: 16px;

  border-radius: 8px;
  flex-direction: row;
  gap: 8px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
