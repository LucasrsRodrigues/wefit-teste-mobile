import styled, { css, DefaultTheme } from "styled-components/native";

export default interface IRNTextProps {
  type?: "primary" | "secondary";
  variant?: "regular" | "medium" | "bold";
  textTransform?: "capitalize" | "lowercase" | "none" | "uppercase";
  fontSize?: number;
  color?: string;
}

export const RNText = styled.Text<IRNTextProps>`
  font-family: ${({ theme, type, variant }) => theme.fonts[type][variant]};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  text-transform: ${({ textTransform }) => textTransform};
`;