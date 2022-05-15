import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

import { DivPesquisa, InputPesquisa } from "./PlanetListPageStyle"
import PlanetItemList from "../componentes/PlanetItemList";


const PlanetListPage = (props) => {

    const [PlanetList, setPlaneta] = useState([])
    const [PlanetSearchList, setPlanetaPesquisa] = useState([])
    const [Search, setSearch] = useState("")
    const BaseURL  = 'https://swapi.dev/api/planets';
    const input = React.createRef();

    useEffect(() => {
        getPlanetsList();
    }, [])

    const getPlanetsList = () => {
        axios.get(BaseURL, {
            headers: {
            "Content-Type": "application/json"
            }
        }).then((resposta) =>{
            setPlaneta(resposta.data.results)
            setPlanetaPesquisa(resposta.data.results)
        }).catch((err) => {
            console.log(err.menssage)
        })
    }

    const onChange = () => {
        setSearch(input.current.value)
        console.log(PlanetSearchList)
        searchEngine()
    }

    const searchEngine = () => {
        if (Search === "") {
            setPlanetaPesquisa(PlanetList)
        }else{
            const planetasPesquisa = PlanetList.filter((planet) => {
                console.log(planet.name + " = " + Search)
                return planet.name === Search || planet.climate === Search || planet.population === Search || planet.terrain === Search
            })
            setPlanetaPesquisa(planetasPesquisa)
        }

        
    }

    const renderizarPlanetas = PlanetSearchList.map((planet) =>{
        return <PlanetItemList key={planet.url} function={props.func.bind(this)} planeta={planet} url={planet.url}></PlanetItemList>
    })

    return(
        <div align={"center"} style={{height: "22em", width: "22em"}}>
            <DivPesquisa>
                <InputPesquisa onChange={() => {onChange()}} ref={input} value={Search}>
                
                </InputPesquisa>
                <svg width="20"viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8007 1C15.0582 0.999951 17.2684 1.64716 19.1689 2.86484C21.0695 4.08252 22.5807 5.81955 23.5232 7.86985C24.4657 9.92016 24.8 12.1977 24.4865 14.4322C24.1729 16.6667 23.2246 18.7644 21.7541 20.4764L32 30.7172L30.7165 32L20.4688 21.7574C19.0236 22.9927 17.301 23.8606 15.4479 24.2871C13.5947 24.7137 11.6659 24.6862 9.82561 24.2071C7.98536 23.7281 6.28821 22.8115 4.87872 21.5356C3.46922 20.2597 2.38914 18.6621 1.73045 16.8791C1.07177 15.096 0.854001 13.1803 1.09569 11.295C1.33739 9.40971 2.03138 7.61073 3.11857 6.05127C4.20576 4.49182 5.65394 3.2181 7.33976 2.3386C9.02558 1.45909 10.8991 0.999854 12.8007 1ZM12.8007 2.81446C10.1527 2.81446 7.61311 3.86587 5.74066 5.73739C3.8682 7.60891 2.81627 10.1472 2.81627 12.794C2.81627 15.4407 3.8682 17.979 5.74066 19.8506C7.61311 21.7221 10.1527 22.7735 12.8007 22.7735C15.4488 22.7735 17.9884 21.7221 19.8608 19.8506C21.7333 17.979 22.7852 15.4407 22.7852 12.794C22.7852 10.1472 21.7333 7.60891 19.8608 5.73739C17.9884 3.86587 15.4488 2.81446 12.8007 2.81446Z" fill="#B52022" stroke="#B52022"/>
                </svg>
            </DivPesquisa>
            {renderizarPlanetas}
        </div>
    );

}

export default PlanetListPage;