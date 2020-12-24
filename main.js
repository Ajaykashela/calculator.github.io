let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let op = document.getElementById("op");
let ans = document.getElementById("ans");
let inva = document.getElementById("inva");
var n1,n2,oup,an;

function calc(){

    n1=num1.value;
    n2=num2.value;
    oup=op.value;
    n1=parseFloat(n1);
    n2=parseFloat(n2);

    if(n2=="0" && oup=="/"){
        console.log("invalidddddd");
        inva.style.display="inline";
        return;    
    }
    else if(oup == "+"){
        an=n1+n2;
        inva.style.display="none";
    }
    else if(oup == "-"){
        an=n1-n2;
        inva.style.display="none";
    }
    else if(oup == "*"){
        an=n1*n2;
        inva.style.display="none";
    }
    else if(oup == "/"){
        an=n1/n2;
        inva.style.display="none";
    }
    else if(oup == "%"){
        an=n1%n2;
        inva.style.display="none";
    }
    
    else{
        inva.style.display="inline";
    }



    console.log(n1);
    
    console.log(oup);

    console.log(n2);
    
    console.log(an);

    ans.value=an;

}

