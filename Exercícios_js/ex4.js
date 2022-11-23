function calcular(){
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);
    let res = document.getElementById('res');
    
    let t1 = v1/8;
    let t2 = v2-t1;
    res.innerHTML = "Você gastou " + t1 + "L de combustível. Ainda restam " + t2 + "L";

}