import styled from "styled-components/native";

export const DetailsBody = styled.View`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;

  gap: 16px;
`;

export const DetailsName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PrimalLanguage = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 6px;
`;

export const DotLanguage = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;

  background: red;
`;