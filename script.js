const baseUrl = "https://localhost:7039";

//  function Reservar(button) {
//      button.disabled = true;
//      button.parentNode.classList.add('chale-indisponivel'); 
     
//  }

// Função para verificar se o chalé já está cadastrado na API
async function verificarChalesCadastrados() {
    try {
        const response = await fetch(`${baseUrl}/api/Reserva`);
        if (!response.ok) {
            throw new Error('Erro ao verificar os chalés na API');
        }
        const data = await response.json();
        return data.map(chale => chale.nome);
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
}

async function inicializarChales() {
    const chalesCadastrados = await verificarChalesCadastrados();
    const chaleBoxes = document.querySelectorAll('.chale-box');
    chaleBoxes.forEach(chaleBox => {
        const chaleNome = chaleBox.querySelector('h3').textContent;
        if (chalesCadastrados.includes(chaleNome)) {
            chaleBox.classList.add('reservado');
            const reservadoText = document.createElement('span');
            reservadoText.classList.add('reservado-text');
            reservadoText.innerText = 'RESERVADO';
            chaleBox.appendChild(reservadoText);
            const reservarButton = chaleBox.querySelector('button');
            reservarButton.disabled = true;
        }
    });
}

inicializarChales();

async function enviarReserva() {
    try {
        const nomeUsuario = document.getElementById('Username').value;
        const quantidadeDePessoa = parseInt(document.getElementById('quantidadeDePessoa').value);
        const chale = parseInt(document.getElementById('selecioneChale').value);
        const msgErro = document.getElementById("erro");

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
        if (res.status >= 200 || res.status < 300) {
            const resposta = await res.json();
            Reservar();
            console.log('Reserva enviada com sucesso:', resposta);
        }else if(res.status === 400)
        {
            prompt = `O chalé ${chale} ja está cadastrado! Tente novamente!`;
        } else {
            console.log('Erro ao enviar reserva:', res.status);
            msgErro.innerHTML = res.status;
        }
    } catch (erro) {
        console.log("Deu Erro:", erro)
    }
}
