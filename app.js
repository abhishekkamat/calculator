function button(node) {
    a = node.innerHTML;
    if (a == "x") {
        document.getElementById("intext").value = document.getElementById("intext").value + "*";
    }
    else if(a=="^n"){
        document.getElementById("intext").value = document.getElementById("intext").value + "**";
    }
    else if(a=="C"){
        document.getElementById("intext").value = "";
    }
    else {
        document.getElementById("intext").value = document.getElementById("intext").value + a;
    }
}

function calculate(node){
    a=document.getElementById("intext").value;
    b=eval(a);
    document.getElementById("intext").value=b;
}
