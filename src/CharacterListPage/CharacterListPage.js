import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterItemList from "../componentes/CharacterItemList";

const CharacterListPage = (props) => {

    const [CharacterList, setPersonagem] = useState([])
    const BaseURL  = 'https://swapi.dev/api/people';

    useEffect(() => {
        getCharacterList();
    }, [])
  
    const getCharacterList = () => {
      axios.get(BaseURL, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resposta) =>{
        setPersonagem(resposta.data.results)
      }).catch((err) => {
        console.log(err.menssage)
      })
    }

    const renderizarPersonagens = CharacterList.map((personagem) =>{
        return <CharacterItemList key={personagem.url} function={props.func.bind(this)} personagem={personagem} url={personagem.url}></CharacterItemList>
    })

    return(
        <div align={"center"} style={{height: "20em", width: "22em"}}>
            {renderizarPersonagens}
        </div>
    );


}

export default CharacterListPage;