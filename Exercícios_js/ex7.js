var lista = []

function inserir(){
    let valor=document.getElementById('valor').value;
    lista.push(valor);
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}

function mostrar(){
    let res=document.getElementById('res');
    res.innerHTML="";
    for (let i=0; i<lista.length; i++){
        res.innerHTML += lista[i] + "-";
    }
    document.getElementById('valor').focus();
}

function maior(){
    var maior = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] > maior){
            maior=lista[i];
        }
    }
    alert("O maior número é "+maior);
}

function menor(){
    var menor = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] < menor){
            menor=lista[i];
        }
    }
    alert("O maior número é "+menor);
}