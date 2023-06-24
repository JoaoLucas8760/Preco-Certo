import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.Image`
  height: 54px;
  width: 54px;
  border-radius: 50px;
`;

export const WelcomeText = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;
