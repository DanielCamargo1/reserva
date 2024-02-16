 const baseUrl = "https://localhost:7039";

 async function getReservas() {
     try {
         const res = await fetch(`${baseUrl}/api/Reserva`, {
             method: 'GET',
         });
         if (res.status === 200 || res.status === 201) {
             const obj = await res.json();
             return obj;
         }
     } catch (erro) {
         console.log("Deu Erro:", erro)
     }
 }

 async function login() {
     let user = document.getElementById("username").value;
     let password = document.getElementById("PassWord").value;
     const container = document.getElementById('container');
     if (user === "hebreus" && password === "138") {
        //Bloquear os acesssos o form de login
        const spaceForm = document.getElementById("form");
         spaceForm.style.display = 'none';
         const spaceMensage = document.getElementById("h1");
         const dados = await getReservas();
         if(dados != null){
             spaceMensage.textContent = JSON.stringify(dados);
         }else{
            spaceMensage.textContent = 'Não há reservas'
         }
         console.table(dados);
     } else {
         alert("Opsss! Senha ou usuário incorreto, tente novamente!");
     }
    
 }

 
