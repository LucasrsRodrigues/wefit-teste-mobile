import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const Divider = styled.View`
  height: 16px;
`;

export const ListRepositoriesContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 16
  }
})``;