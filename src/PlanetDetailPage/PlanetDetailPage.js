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

const PlanetDetailPage = (props) => {

    const [Planet, setPlaneta] = useState({})

    useEffect(() => {
        getPlanetList();
    }, [])
  
    const getPlanetList = () => {
      axios.get(props.url, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resposta) =>{
        setPlaneta(resposta.data)
        
      }).catch((err) => {
        console.log(err.menssage)
      })
    }

    return(
        <>
            <NomeInfo>Nome: <Info> {Planet.name} </Info> </NomeInfo>
            <NomeInfo>Período de rotação: <Info> {Planet.rotation_period} </Info> </NomeInfo>
            <NomeInfo>Período orbital: <Info> {Planet.orbital_period} </Info> </NomeInfo>
            <NomeInfo>Diâmetro: <Info> {Planet.diameter} </Info> </NomeInfo>
            <NomeInfo>Clima: <Info> {Planet.climate} </Info> </NomeInfo>
            <NomeInfo>Gravidade: <Info> {Planet.gravity} </Info> </NomeInfo>
            <NomeInfo>Terreno: <Info> {Planet.terrain} </Info> </NomeInfo>
            <NomeInfo>Água de Superfície: <Info> {Planet.surface_water} </Info> </NomeInfo>
            <NomeInfo>População: <Info> {Planet.population} </Info> </NomeInfo>
        </>
    );


}

export default PlanetDetailPage;