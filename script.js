function testString(el,text){
    resultDiv = document.getElementById(el);
    //console.log(resultDiv);
    resultDiv.innerHTML = text;
}

function clickedButton(){
    input1 = document.getElementById("in1").value;
    //console.log(input1);
    testString("result1", input1);
}

function dialogWindow(){
    //alert();
    conf = confirm("Gaiget??");
    console.log(conf);
    resultDiv = document.getElementById("result3");
    if(conf==true){
        resultDiv.innerHTML = "Gavige!!!";
    }
    else if(conf==false){
        resultDiv.innerHTML = "Ver Gavige!!!";
    }
    pro = prompt()
    console.log(pro);
    if(pro!=null){
        resultDiv.innerHTML = pro;
    }
    else{
        resultDiv.innerHTML = "Monacemebi Ar Aris";
    }
}