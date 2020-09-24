namespace empresa{
    let p = new Pessoa();
    p.idade = 20;
    p.nome = "Maria";

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("idade").textContent = p.idade.toString();
    document.getElementById("anoNasc").textContent = p.anoNasc(2020).toString();
}