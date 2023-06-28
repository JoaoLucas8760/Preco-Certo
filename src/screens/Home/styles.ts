import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
  gap: 12px;
`;

export const TextsWrapperHead = styled.View`
  flex-direction: column;
`;

export const Avatar = styled.Image`
  height: 58px;
  width: 58px;
  border-radius: 50px;
`;

export const WelcomeText = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;

export const WelcomeDesc = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #6d7078;
`;
