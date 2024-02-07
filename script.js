const baseUrl = "https://localhost:7039";

 const nomeUsuario = document.getElementById("name").value;
 const quantidadeDePessoa = parseInt(document.getElementById("quantidadeDePessoa").value);
 const chales = document.getElementById('selecioneChale');
 const chale = chales.value;


async function enviarReserva(){
    console.log(chale)
    try{
         const res = await fetch(`${baseUrl}/api/Reserva`,{
             method: 'POST',
             headers: {
                 'Content-Type' :'application/json'
         },
         body : JSON.stringify(reserva) //converte a reserva para json
     });

         if(res.status === 200 || res.status === 201){
             const resposta = await res.json();
             console.log("postou", resposta)
             // fazer a validção if( não foi ocupado)...
             //Else passar os nomes
         }
         else{
             console.log('DEU ERRO', res.status)
         }
     } catch(erro){
         console.log("Deu Erro:", erro)
     }
}
 