function calcular(){
    let v1=parseFloat(document.getElementById('v1').value);
    let v2=parseFloat(document.getElementById('v2').value);
    let res=document.getElementById('res');

    let m2=v1*v2;
    let total=m2*36.00;
    res.innerHTML="O preço total é R$" + total; 
}
