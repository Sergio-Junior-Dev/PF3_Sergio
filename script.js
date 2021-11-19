document.getElementById("button").addEventListener("click", function() {
    var nome = document.getElementById('nome').value;
    var valor_aplicado = document.getElementById('valorAplicado').value;
    var i = document.getElementById('juros').value;
    var n = document.getElementById('parcelas').value;
    var resultado = document.getElementById('resultado');
console.log("rodando");
if (nome != "" && valor_aplicado != "" &&  i != "" &&  n != "" ) {
    resultado.textContent = "";
    //var parcela = ((valor_financiamento - valor_entrada)/prestacoes)*juros ;
var i = i/100;
var vf = ((((1+i)**n)-1)*valor_aplicado)/i.toFixed(2);
console.log(vf.toFixed(2));
   // resultado.textContent = vf.toFixed(2) ;
    resultado.textContent = nome + ", se você aplicar R$" + valor_aplicado + ", à taxa de juros de" + i + "% ao mês, durante " + n + "meses, acumulará uma poupança de R$" + vf.toFixed(2);
}
else{
    resultado.textContent = 'Para calcular, e obrigatorio o preenchimento de todos os campos!';
}
});

