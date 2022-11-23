function convert1(){
    let v1 = parseFloat(document.getElementById('v1').value);
    let res = document.getElementById('res');
    let F = v1*1.8+32;
    res.innerHTML=F+" °F";
}

function convert2(){
    let v1 = parseFloat(document.getElementById('v1').value);
    let res = document.getElementById('res');
    let C = (v1-32)/1.8;
    res.innerHTML=C+" °C";
}