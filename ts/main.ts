namespace empresa{
    let c = new Cliente("Jonas",12);
    c.idade = 18;
    c.credito = 100;
    

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();
    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();
    document.getElementById("compra").textContent = c.comprar(101,100);

    let cv = new ClienteVip("Maria", 1);
    cv.idade = 30;
    cv.credito = 3424;
    cv.bonus = 1000;
    document.getElementById("nomeVip").textContent = cv.nome;
    document.getElementById("idadeVip").textContent = cv.idade.toString();
    document.getElementById("anoNascVip").textContent = cv.anoNasc(2020).toString();
    document.getElementById("codClienteVip").textContent = cv.codCliente.toString();
    document.getElementById("creditoVip").textContent = cv.credito.toString();
    document.getElementById("compraVip").textContent = cv.comprar(8000,100);
    document.getElementById("EnderecoVip").textContent = cv.mostraEndereco();
    

}

