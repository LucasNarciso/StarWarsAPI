import styled from 'styled-components';

export const BotoesPagina = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2em 0.6em;
    background-color: black;
    border: 0.2em solid #892036;
    font-weight: bold;
    margin: 0.2em;
    width: 5em;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const Paginas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1.5em;
`

export const NumeroPagina = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5em;
    margin: 0em 2em;
`