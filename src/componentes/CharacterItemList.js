import styled from 'styled-components';

const DivNome = styled.div`
    background-color: black;
    border: 0.2em solid #892036;
    color: #B52022;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0.1em;
    margin: 0.2em;
    width: 20em;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

const CharacterItemList = (props) => {


    return(
        <DivNome onClick={() => {props.function("Detalhes do Personagem", props.personagem.url)}}>
            <br/>
            <div>{props.personagem.name}</div>
        </DivNome>
        
    )
}


export default CharacterItemList;