import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const DetailsScreenHeader = styled.View`
  background: ${({ theme }) => theme.colors.dark};
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 50}px;
  padding-left: 12px;
  padding-right: 12px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;