const Challenge = () =>{
 
  const num1 = 10
  const num2 = 30


  return (
    
     <>
      <p>o numero 1 é : {num1}</p>
      <p>o numero 2 é : {num2}</p>
    
      <button onClick = {() => console.log(num1+num2)}>Clique aqui tbem</button>
      
     </>
  )
  
}
export default Challenge