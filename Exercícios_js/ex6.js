var valor = ""
var p = 0

function selected(){
    let select = document.querySelector('#select')
    valor = select.options[select.selectedIndex].value;
}

function calcular(){
    let h = parseFloat(document.getElementById('h').value);
    let res = document.getElementById('res');
    
    if (valor == 'F'){
        p = (62.1*h)-44.7;
    } 

    else{
        p = (72.7*h)-58;
    }

    res.innerHTML="O seu peso ideal é " + p + "kg";
}