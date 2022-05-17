import styled from 'styled-components';

export const BotaoPrincipal = styled.button`
    width: 13em;
    height: 13em;
    border-radius: 0.4em;
    background-color: black;
    border: 0.4em solid #892036;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(130deg, rgba(19, 81, 158, 1), rgba(18, 43, 87, 1), rgba(4, 21, 50, 1));
    align-items: center;
    position: absolute;
    margin: -0.5em;
    height: 100%;
    width: 100%;
    overflow: auto;
`

export const DivConteudo = styled.div`
    display: flex;
    justify-content: center;
    background-color: #D8D993;
    align-items: center;
    padding: 1em;
    border-radius: 0.4em;
    margin-bottom: 2em;
`

export const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20em;
`

export const SubTitulo = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
    color: white;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 2em;
    font-family: 'Inter', sans-serif;
`

export const DivPresent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BotaoVoltar = styled.div`
    background-color: black;
    border: 0.2em solid #892036;
    color: #B52022;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0.1em;
    margin: 0.2em;
    width: 5em;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const Selection = styled.div`
    height: 2em;
    width: 20em;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 1.5em;
`