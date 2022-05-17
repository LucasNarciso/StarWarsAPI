import React, {useState, useEffect} from "react";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import PlanetListPage from "./PlanetListPage/PlanetListPage";
import PlanetDetailPage from "./PlanetDetailPage/PlanetDetailPage";
import {BotaoPrincipal, Selection, Background, DivConteudo, Titulo, SubTitulo, DivPresent, BotaoVoltar} from "./styles/StyledComps"

function App() {
  
  const [pagina, setPagina] = useState("principal")
  const [url, setUrl] = useState("")
  const [selection, setSelection] = useState("")

  const escolherPagina = (pagina, url) => {
    setPagina(pagina);
    setUrl(url);
  }

  useEffect(() => {
    if (pagina === "principal") {
      setSelection("");
    }else{
      setSelection(pagina);
    }
  }, [pagina])

  let page = ""

  switch (pagina) {

    case "principal":
      
      page = 
        <DivConteudo>
          <BotaoPrincipal onMouseEnter={() => {setSelection("Personagens")}} onMouseLeave={() => {setSelection("")}} onClick={() => {setPagina("Personagens")}}>
            <svg width="120" viewBox="0 0 152 113" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.5 113C66.5 113 57 113 57 103.583C57 94.1667 66.5 65.9167 104.5 65.9167C142.5 65.9167 152 94.1667 152 103.583C152 113 142.5 113 142.5 113H66.5ZM104.5 56.5C112.059 56.5 119.308 53.5237 124.653 48.2258C129.997 42.9279 133 35.7424 133 28.25C133 20.7576 129.997 13.5721 124.653 8.27423C119.308 2.97633 112.059 0 104.5 0C96.9413 0 89.6922 2.97633 84.3475 8.27423C79.0027 13.5721 76 20.7576 76 28.25C76 35.7424 79.0027 42.9279 84.3475 48.2258C89.6922 53.5237 96.9413 56.5 104.5 56.5Z" fill="#B52022"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.552 113C48.1437 110.06 47.4413 106.837 47.5 103.583C47.5 90.8238 53.96 77.6875 65.892 68.5533C59.9364 66.7344 53.7315 65.8449 47.5 65.9167C9.5 65.9167 0 94.1667 0 103.583C0 113 9.5 113 9.5 113H49.552Z" fill="#B52022"/>
              <path d="M42.75 56.5C49.0489 56.5 55.0898 54.0197 59.5438 49.6048C63.9978 45.1899 66.5 39.202 66.5 32.9583C66.5 26.7147 63.9978 20.7268 59.5438 16.3119C55.0898 11.8969 49.0489 9.41667 42.75 9.41667C36.4511 9.41667 30.4102 11.8969 25.9562 16.3119C21.5022 20.7268 19 26.7147 19 32.9583C19 39.202 21.5022 45.1899 25.9562 49.6048C30.4102 54.0197 36.4511 56.5 42.75 56.5Z" fill="#B52022"/>
            </svg>
          </BotaoPrincipal>
          <div style={{width: "1em"}}/>
          <BotaoPrincipal onMouseEnter={() => {setSelection("Planetas")}} onMouseLeave={() => {setSelection("")}} onClick={() => {setPagina("Planetas")}}> 
            <svg width="110" viewBox="0 0 140 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8914 5.41009C34.3073 8.99082 26.5314 14.2405 20.0215 20.85H70.0049C71.8613 20.85 73.6417 21.5823 74.9543 22.8856C76.267 24.189 77.0044 25.9568 77.0044 27.8C77.0044 29.6433 76.267 31.411 74.9543 32.7144C73.6417 34.0178 71.8613 34.75 70.0049 34.75H9.3822C2.02808 47.3601 -1.12939 61.9535 0.359838 76.45H77.0044C78.8608 76.45 80.6412 77.1822 81.9538 78.4856C83.2665 79.789 84.0039 81.5567 84.0039 83.4C84.0039 85.2432 83.2665 87.011 81.9538 88.3144C80.6412 89.6178 78.8608 90.35 77.0044 90.35H3.21564C4.74868 95.1938 6.81432 99.8552 9.3752 104.25H63.0054C64.8618 104.25 66.6422 104.982 67.9548 106.286C69.2675 107.589 70.0049 109.357 70.0049 111.2C70.0049 113.043 69.2675 114.811 67.9548 116.114C66.6422 117.418 64.8618 118.15 63.0054 118.15H20.0215C26.5312 124.76 34.307 130.01 42.8911 133.59C51.4752 137.171 60.6941 139.01 70.0049 139C108.663 139 140 107.885 140 69.5C140 67.1579 139.881 64.8435 139.65 62.55H91.0034C89.1471 62.55 87.3667 61.8178 86.0541 60.5144C84.7414 59.211 84.0039 57.4433 84.0039 55.6C84.0039 53.7568 84.7414 51.989 86.0541 50.6856C87.3667 49.3822 89.1471 48.65 91.0034 48.65H136.794C127.87 20.4539 101.356 4.15328e-05 70.0049 4.15328e-05C60.6941 -0.0100786 51.4754 1.82936 42.8914 5.41009ZM51.0566 50.6856C52.3693 49.3822 54.1496 48.65 56.006 48.65H70.005C71.8614 48.65 73.6418 49.3822 74.9544 50.6856C76.2671 51.989 77.0045 53.7567 77.0045 55.6C77.0045 57.4432 76.2671 59.211 74.9544 60.5144C73.6418 61.8177 71.8614 62.55 70.005 62.55H56.006C54.1496 62.55 52.3693 61.8177 51.0566 60.5144C49.744 59.211 49.0065 57.4432 49.0065 55.6C49.0065 53.7567 49.744 51.989 51.0566 50.6856ZM35.0145 62.5554C36.8705 62.5554 38.6505 61.8235 39.9631 60.5206H39.9561C40.6069 59.8751 41.1232 59.1086 41.4755 58.2649C41.8277 57.4212 42.009 56.5168 42.009 55.6034C42.009 54.6901 41.8277 53.7857 41.4755 52.942C41.1232 52.0983 40.6069 51.3318 39.9561 50.6863C38.6428 49.3831 36.8618 48.6514 35.005 48.652C34.0856 48.6524 33.1753 48.8325 32.3261 49.1821C31.4768 49.5318 30.7052 50.0441 30.0553 50.6898C29.4055 51.3355 28.8901 52.102 28.5385 52.9455C28.187 53.789 28.0062 54.693 28.0066 55.6059C28.0072 57.4495 28.7455 59.2174 30.0588 60.5206C31.3714 61.8235 33.1585 62.5554 35.0145 62.5554ZM95.3334 89.8781C94.4794 89.5138 93.7071 88.9843 93.0614 88.3205L93.0544 88.3136C91.7419 87.0095 91.005 85.2411 91.0056 83.3975C91.0063 81.5539 91.7445 79.786 93.0579 78.4828C94.3713 77.1797 96.1523 76.4479 98.009 76.4485C99.8658 76.4492 101.646 77.1822 102.959 78.4863C103.627 79.1274 104.16 79.9013 104.527 80.7492C104.894 81.5971 105.087 82.5091 105.095 83.4319C105.103 84.3547 104.926 85.2699 104.574 86.124C104.222 86.9782 103.703 87.7541 103.045 88.4067C102.388 89.0592 101.607 89.5753 100.747 89.9248C99.8863 90.2742 98.9646 90.4501 98.0352 90.442C97.1059 90.434 96.1874 90.2423 95.3334 89.8781Z" fill="#B52022"/>
            </svg> 
          </BotaoPrincipal>
        </DivConteudo>
      break;
    
    case "Planetas":
      page = 
        <DivConteudo>
          <div align={"center"}>
            <BotaoVoltar onClick={() => {setPagina("principal")}}> Voltar </BotaoVoltar>
            <PlanetListPage func={escolherPagina.bind(this)}/>
          </div>
        </DivConteudo>
      break;

    case "Personagens":

      page = 
        <DivConteudo>
          <div align={"center"}>
            <BotaoVoltar onClick={() => {setPagina("principal")}}> Voltar </BotaoVoltar>
            <CharacterListPage func={escolherPagina.bind(this)}/>
          </div>
        </DivConteudo>

      break;
    
      case "Detalhes do Personagem":

        page = 
          <DivConteudo>
            <div>
              <BotaoVoltar onClick={() => {setPagina("Personagens")}}> Voltar </BotaoVoltar>
              <CharacterDetailPage url={url}/>
            </div>
          </DivConteudo>
  
        break;

      case "Detalhes do Planeta":

        page = 
          <DivConteudo>
            <div>
              <BotaoVoltar onClick={() => {setPagina("Planetas")}}> Voltar </BotaoVoltar>
              <PlanetDetailPage url={url}/>
            </div>
          </DivConteudo>
  
        break;

    default:
      break;
  }

  return (
    <Background>
      <DivPresent>
        <Titulo>
          <svg xmlns="http://www.w3.org/2000/svg" width="189"><g fill-rule="evenodd" clip-rule="evenodd" fill="#A2A339"><path d="M5.669 81.215v12.65h37.003c4.301 0 9.796-3.977 9.796-10.556 0-2.646 1.012-4.372-2.098-7.872l-4.733-5.608c-2.712-2.53.324-2.53 2.602-2.53h15.623v26.566h12.39V67.299h16.699V55.922H38.877c-6.579 0-9.796 6.317-9.615 9.606.182 3.289.787 7.427 6.254 12.398 4.987 4.533-2.469 3.289-3.218 3.289H5.669zM120.348 55.922H100.36L89.155 93.866h12.47l2.023-5.313h13.156l1.953 5.313h12.215l-10.624-37.944zm-13.916 23.522l4.301-13.916 4.049 13.916h-8.35zM170.443 81.215c-4.807 0-4.807-1.771-4.807-1.771 4.119 0 7.771-6.001 7.771-12.145s-6-11.377-10.809-11.377h-26.891v37.944h13.664v-12.65s5.818 6.831 8.854 9.614c3.037 2.783 3.289 3.036 7.41 3.036h21.449v-12.65c.002-.001-11.834-.001-16.641-.001zm-12.398-8.855h-8.672v-6.832h8.672c3.976 0 4.664 6.832 0 6.832zM5.669 98.672h13.979l3.542 12.652 3.289-12.652h14.675l3.795 12.652 3.796-12.652h12.144l-11.133 37.953H38.624l-4.878-17.965-5.496 17.965H16.865L5.669 98.672zM89.578 98.891H69.59l-11.204 37.943h12.469l2.024-5.312h13.157l1.953 5.312h12.216L89.578 98.891zm-13.915 23.521l4.301-13.916 4.048 13.916h-8.349zM170.695 110.059c-2.275 0-4.756.266-2.043 2.795l4.734 5.609c3.109 3.5 3.059 4.959 3.059 7.607 0 6.578-6.508 10.555-10.809 10.555l-29.896.201c-4.119 0-4.371-.252-7.408-3.035-3.035-2.783-8.855-9.615-8.855-9.615v12.65h-13.662V98.883h26.891c4.807 0 10.809 5.234 10.809 11.377 0 6.145-3.652 12.145-7.773 12.145 0 0 1.812 1.822 4.848 1.822 3.037 0 14.727.012 14.727.012.748 0 8.203 1.244 3.217-3.289-5.467-4.971-6.072-9.107-6.254-12.396s2.662-9.881 9.238-9.881h25.57v11.387h-16.393v-.001zm-42.545 5.261h-8.674v-6.832h8.674c3.977 0 4.664 6.832 0 6.832z"/></g></svg>
        </Titulo>
        <SubTitulo>API</SubTitulo>
        <Selection>{selection}</Selection>
      </DivPresent>
      {page}
    </Background>
  );

}

export default App;
