import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';



export const Container = styled.ImageBackground`
  flex:1;
`;


export const Divider = styled.View`
  height: 16px;
`;

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

export const ListRepositoriesContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 16
  }
})``;