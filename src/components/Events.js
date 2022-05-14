const Events = () =>{
    const handlrMyEvent = (e) =>{
        console.log(e)
        console.log("ativou o evento")
    }
    //função de renderização - executar template de uma funcao q nao ta dentro de jsx posso colocar jsx fora do return
    const renderizacaoTeste = (x) =>{
      //recebe x como argumento variavel
      if(x){
          return <h1> renderizando isso</h1>
      }else{
          return <h1>também posso renderizar isso</h1>
      }
    }
    //jsx 
    return(
        <>
      <h1>eventos de click</h1>
      <button onClick = {handlrMyEvent}>Clique aqui</button>
         <div>
            <button onClick = {() => console.log("clicou")}>Clique aqui tbem</button>
         </div>
         
         {renderizacaoTeste(true)}
         {renderizacaoTeste(false)}

      </>
    )
}
export default Events