import Item from "./Item"


function List(){
    return(
      <>
      <h1> Minha lista</h1>
      <ul>
        <Item marca = "Ferrari" lancamento={1985}></Item>
        <Item marca = "Fiat" lancamento={1965}></Item>
        <Item marca = {22} lancamento={2000}></Item>
      </ul>
      </>
    )
}

export default List