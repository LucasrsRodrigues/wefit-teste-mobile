import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;

  padding: 16px;
`;

export const GitCard = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.card};
  padding: 12px 16px;

  shadow-color: #000;

  shadow-offset: 0 2px;
  
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const GitCardHeaderBKP = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  padding-bottom: 16px;
  border-radius: 4px;


  shadow-color: #000;

  shadow-offset: {
    width: 0;
    height: 2;
  };
  
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const GitCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  padding-bottom: 16px;
  border-radius: 4px;

  


  
`;


export const GitCardHeaderImage = styled.Image`
  width: 29px;
  height: 29px;

  border-radius: 15px;
`;

export const GitCardBody = styled.View`
  padding: 16px 0;
`;

export const GitCardFooter = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const FavouriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_light};
  padding: 10px;

  gap: 10px;
`;

export const StarsCount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PrimalLanguage = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 6px;
`;

export const DotLanguage = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background: red;
`;