function exibir(){
    let v1=parseInt(document.getElementById('v1').value);
    let res=document.getElementById('res');
    for(let i=0; i<=v1; i++){
        if(i%2==0){
            res.innerHTML+=i+"-";
        }
    }
}