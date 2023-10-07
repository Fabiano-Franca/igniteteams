import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 40px;
    
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 32px;
`;