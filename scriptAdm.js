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
     if (user === "a" && password === "123") {
         let EspaceMensage = document.getElementById("h1");
         const dados = await getReservas();
         EspaceMensage.textContent = JSON.stringify(dados);
     } else {
         alert("Opsss! Senha ou usuário incorreto, tente novamente!");
     }
 }

