const baseUrl = "https://localhost:7039";


const userName = document.getElementById("name").value;
const quantidadeDePessoa = document.getElementById("quantidadeDePessoa").value;


 async function getReservas() {
     try {
         const response = await fetch(`${baseUrl}/api/Reserva`, {
             mode: 'no-cors',
         });
         console.log("Requisição bem-sucedida, mas sem acesso à resposta:", response);
     } catch (error) {
         console.error("Erro ao obter reservas:", error);
     }
}

 async function criarReserva(reserva) {
     try {
         const response = await fetch(`${baseUrl}/api/Reserva`, { // Passando o caminho
             mode: 'no-cors',
             method: "POST", // Explicificando o método em que eu desejo chamar
             headers: {
                 "Content-Type": "application/json", //Esta indicando que o corpo da requisição pe um arquivo Json
             },
             body: JSON.stringify(reserva), //Converte o objeto reserva para uma string JSON, que é enviada como o corpo da requisição POST.
         });
         const data = await response.json();
         console.log("Reserva criada:", data);
     } catch (error) {
         console.error("Erro ao criar reserva:", error);
     }
 }

function enviarReserva(){
    const chaleSelect = document.getElementById("selecioneChale");
    const chaleValue = chaleSelect.options[chaleSelect.selectedIndex].value;
     if(chaleValue == 0){
         console.log("deu ruim meu chapa");
     }
     else{
         const newReserva = {
             userName: userName,
             chaleValue: chaleValue,
             quantidadeDePessoa: quantidadeDePessoa,
         };
         criarReserva(newReserva);
         console.log(newReserva);
     }
 }

