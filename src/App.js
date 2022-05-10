import './App.css';
import Item from './components/Item';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
function App() {
  const name = "Pablo"
  const nome = "Maria"
  const newName = name.toUpperCase()
  function soma (a,b){
     return a + b
  }
  const url = 'http://via.placeholder.com/150'
  return (
    <div className="App">
   
   <Frase></Frase>
   <Frase></Frase>
      <h1>Oi React</h1>
      <p>Meu primeiro App</p>
      <p>Olá {newName}</p>
      <SayMyName nome= "Matheus"></SayMyName>
      <SayMyName nome = {nome}></SayMyName>
      <p>Soma {soma(1,3)}</p>
      <img src= {url} alt = "minha image"></img>
     <Pessoa
       nome = "Rodrigo"
       idade = "28"
       profissao = "Programador"
     >
     
     </Pessoa>
      <Item></Item>
      <List></List>
    </div>
  );
}

export default App;
