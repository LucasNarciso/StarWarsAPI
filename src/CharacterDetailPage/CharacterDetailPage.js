import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components';

const NomeInfo = styled.p`
    font-weight: bold;
`
const Info = styled.span`
    font-weight: normal;
    text-decoration: underline;
` 

const CharacterDetailPage = (props) => {

    const [Character, setPersonagem] = useState({})

    useEffect(() => {
        getCharacterList();
    }, [])
  
    const getCharacterList = () => {
      axios.get(props.url, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resposta) =>{
        setPersonagem(resposta.data)
        
      }).catch((err) => {
        console.log(err.menssage)
      })
    }

    return(
        <>
            <NomeInfo>Nome: <Info> {Character.name} </Info> </NomeInfo>
            <NomeInfo>Peso: <Info> {Character.height} </Info> </NomeInfo>
            <NomeInfo>Cor do cabelo: <Info> {Character.hair_color} </Info> </NomeInfo>
            <NomeInfo>Cor de Pele: <Info> {Character.skin_color} </Info> </NomeInfo>
            <NomeInfo>Cor dos olhos: <Info> {Character.eye_color} </Info> </NomeInfo>
            <NomeInfo>Ano de nascimento: <Info> {Character.birth_year} </Info> </NomeInfo>
            <NomeInfo>Gênero: <Info> {Character.gender}</Info> </NomeInfo>
        </>
    );


}

export default CharacterDetailPage;