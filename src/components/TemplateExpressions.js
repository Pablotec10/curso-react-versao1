const TemplateExpressions = () => {
    const nome = "Pablo"
    const data = {
        idade: 31,
        job: "Programador"
    }
    return (
        <>
        <h1>Olá {nome}</h1>
        <p>voce atua como: {data.job}</p>
      <p>  {console.log("testando o console.log")}</p>
        </>
    )
}
export default TemplateExpressions