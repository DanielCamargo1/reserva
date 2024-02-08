const baseUrl = "https://localhost:7039";
 
async function enviarReserva() {
    try {
        const nomeUsuario = document.getElementById('Username').value;
        const quantidadeDePessoa = parseInt(document.getElementById('quantidadeDePessoa').value);
        const chale = parseInt(document.getElementById('selecioneChale').value);

        const reserva = {
            nomeUsuario,
            quantidadeDePessoa,
            chale
        };
        const res = await fetch(`${baseUrl}/api/Reserva`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserva)
        });

        if (res.status === 200 || res.status === 201) {
            const resposta = await res.json();
            function Reservar(button) {
                button.disabled = true;
                button.parentNode.parentNode.classList.add('chale-indisponivel'); // Adiciona classe para indicar que o chalé está indisponível
            }
            console.log('Reserva enviada com sucesso:', resposta);
           
        } else {
            console.log('Erro ao enviar reserva:', res.status);
        }
    } catch (erro) {
        console.log("Deu Erro:", erro)
    }
}