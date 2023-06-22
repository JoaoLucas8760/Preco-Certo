import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px;
`;
export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LogoWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
`;
export const Text = styled.Text`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const AuthWrapper = styled.View`
  margin-top: 32px;

  gap: 16px;
  width: 100%;
`;
export const Footer = styled.View``;

export const TextFooter = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export const TextLink = styled(TextFooter)`
  color: #49c256;
  text-decoration: underline;
`;
