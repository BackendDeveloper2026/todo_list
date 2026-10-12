const input = document.querySelector("#nuovaAttivita");
const button = document.querySelector("#aggiungi");
const lista = document.querySelector("#lista");

button.addEventListener("click", () =>{
    const attivita = input.value;
    if (attivita.trim() === "") {
        return;
    }
    const elemento = document.createElement("li");
    const elimina = document.createElement("button");
    
    elimina.textContent = "Elimina";
    elemento.append(attivita);
    elemento.append(elimina);
    lista.append(elemento);
    input.value = "";

    elemento.addEventListener("click", () => {
        elemento.classList.toggle("completata");
    });

    elimina.addEventListener("click", (event) =>{
        event.stopPropagation();
        elemento.remove();
    });
});