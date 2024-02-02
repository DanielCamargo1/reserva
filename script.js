const baseUrl = "https://localhost:7039";


const nomeUsusario = document.getElementById("name");
const selectChale= document.getElementById("selecioneChale");
const quantidadeDePessoa = document.getElementById("quantidadeDePessoa");

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

 function enviarReserva(){
    if(selectChale === "0"){
        console.error('Chalé não selecionado');
    }
    else{
        const novaReserva = {
            nomeUsuario: nomeUsusario,
            quantidadeDePessoa: quantidadeDePessoa,
            chale: selectChale,
        };
        criarReserva(novaReserva);
    }
}

async function criarReserva(reserva) {
    try {
        const response = await fetch(`${baseUrl}/api/Reserva`, { // Passando o caminho
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

getReservas();
