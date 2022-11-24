var nomes=[];
var valores=[];
var qntds=[];
var m=[];
var n=[];

function inserir(){
    let nome=document.getElementById('nome').value;
    let valor=document.getElementById('valor').value;
    let qntd=document.getElementById('qntd').value;

    nomes.push(nome);
    valores.push(valor);
    qntds.push(qntd);
    
    document.getElementById('nome').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('qntd').value = "";
    document.getElementById('nome').focus();
}

function calcular(){
    let res1=document.getElementById('res1');
    let res2=document.getElementById('res2');
    res1.innerHTML="";
    res2.innerHTML="";

    for(let i=0; i<valores.length; i++){
        m.push(valores[i]*qntds[i]);
        n.push(nomes[i]);
    }

    let soma = 0
    for(let i in m) {
        soma += m[i]
    }
    
    res1.innerHTML="Produtos: " + n + ", ";
    res2.innerHTML="O total é de R$" + soma;
}