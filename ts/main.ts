namespace empresa{
    let c = new Cliente();
    c.nome = "Jonas";
    c.idade = 18;
    c.credito = 100;
    c.codCliente = 12;
    

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();
    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();
    document.getElementById("compra").textContent = c.comprar(99);
}