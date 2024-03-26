import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export const PageHeader = styled.View`
  background: ${({ theme }) => theme.colors.card};

  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 50}px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;

  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

export const PageHeaderButton = styled.TouchableOpacity``;