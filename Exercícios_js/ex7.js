var lista = []

function inserir(){
    let valor=parseInt(document.getElementById('valor').value);
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
    let res1=document.getElementById('res1');
    res1.innerHTML="";
    var maior = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] > maior){
            maior=lista[i];
        }
    }
    res1.innerHTML="O maior número é "+maior;
}

function menor(){
    let res2=document.getElementById('res2');
    res2.innerHTML="";
    var menor = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] < menor){
            menor=lista[i];
        }
    }
    res2.innerHTML="O menor número é "+menor;
}