import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  flex:1;
`;

export const DetailsScreenHeader = styled.View`
  background: ${({ theme }) => theme.colors.dark};
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 50}px;
  
  padding-left: 12px;
  padding-right: 12px;

  /* margin-bottom: 16px; */

  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

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

export const DetailsFooter = styled.View`
  position: absolute;
  width: 100%;
  /* background: ${({ theme }) => theme.colors.white}; */
  bottom: 0;
  padding: 16px 16px 30px;

  gap: 10px;
`;

interface IButtonProps {
  type: "outline" | "solid";
}

export const Button = styled.TouchableOpacity<IButtonProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px;

  gap: 8px;

  background: ${({ theme, type }) => type === "solid" ? theme.colors.primary : "transparent"};
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
`;

