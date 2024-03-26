import styled from "styled-components/native";

export interface IButtonProps {
  backgroundColor?: string;
}

export const Button = styled.TouchableOpacity<IButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px;

  gap: 8px;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
`;