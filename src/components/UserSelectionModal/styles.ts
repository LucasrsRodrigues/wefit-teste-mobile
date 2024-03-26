import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 16,
  },
})`
  background: ${({ theme }) => theme.colors.card};
`;


export const WrapperInput = styled.View`
  width: 100%;
  background: #00000006;
  height: 56px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  padding: 9px 12px;

  border-bottom-width: 1px;
  border-color: #00000042;
  

  margin-top: 10px;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
`;

export const WrapperButtons = styled.View`
  width: 100%;
  border-radius: 4px;

  flex-direction: row;

  gap: 10px;

  margin-top: 10px;
  margin-bottom: 16px;
`;

export const ModalButton = styled.TouchableOpacity`

`;