import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterItemList from "../componentes/CharacterItemList";
import { BotoesPagina, Paginas, NumeroPagina } from "./CharacterListPageStyle";

const CharacterListPage = (props) => {

    const [CharacterList, setCharacterList] = useState([]);
    const [CharacterData, setCharacterData] = useState([]);
    const BaseURL  = 'https://swapi.dev/api/people';
    const [pageURL, setPageURL] = useState("");
    const [numPagina, setNumPagina] = useState(1);

    useEffect(() => {
      getCharacterList();
    }, [pageURL])
  
    const getCharacterList = () => {
      axios.get(BaseURL + pageURL, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resposta) =>{

        setCharacterList(resposta.data.results)
        setCharacterData(resposta.data)

      }).catch((err) => {
        console.log(err.menssage)
      })
    }

    const voltarPagina = () => {
      if (CharacterData.previous !== null) {
        setPageURL(CharacterData.previous.replace(BaseURL+"/", ""))
        setNumPagina(CharacterData.previous.replace(BaseURL+"/?page=", ""))
      }
    }

    const proximaPagina = () => {
      if (CharacterData.next !== null) {
        setPageURL(CharacterData.next.replace(BaseURL+"/", ""))
        setNumPagina(CharacterData.next.replace(BaseURL+"/?page=", ""))
      }
    }

    const renderizarPersonagens = CharacterList.map((personagem) =>{
        return <CharacterItemList key={personagem.url} function={props.func.bind(this)} personagem={personagem} url={personagem.url}></CharacterItemList>
    })

    return(
      <div align={"center"} style={{height: "20.5em", width: "22em"}}>
          <div style={{height: "19.5em"}}>
            {renderizarPersonagens}
          </div>
          <Paginas>
            <BotoesPagina onClick={() => {voltarPagina()}}> <svg width="8" viewBox="0 0 12 23" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.5L11.5 0V23L0 11.5Z" fill="#B52022"/></svg> </BotoesPagina>
            <NumeroPagina>{numPagina}</NumeroPagina>
            <BotoesPagina onClick={() => {proximaPagina()}}> <svg width="8" viewBox="0 0 12 23" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5L0.5 23L0.500002 -1.00536e-06L12 11.5Z" fill="#B52022"/></svg> </BotoesPagina>
          </Paginas>
      </div>
    );


}

export default CharacterListPage;