import styled from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid ${props => props.theme.main};
    color: ${props => props.theme.main};
    padding:  10px 20px 10px 20px;
    border-radius: 20px;

    &:hover{
        background-color:  ${props => props.theme.hover};
    }
    &:focus{
        background-color:  ${props => props.theme.focus};
        color: white;
    }


`;