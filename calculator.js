var inp = document.getElementById('inp');
inp.disabled=true;

function disp1(){
   inp.disabled = true;
   inp.value += 0;
}

function disp2(){
    inp.disabled = true;
    inp.value += 1;
}

function disp3(){
    inp.disabled = true;
    inp.value += 2;
}

function disp4(){
    inp.disabled = true;
    inp.value += 3;
}
 
function disp11(){
    inp.disabled = true;
    inp.value += "+";
}

function disp5(){
    inp.disabled = true;
    inp.value += 4;
}

function disp6(){
    inp.disabled = true;
    inp.value += 5;
}

function disp7(){
    inp.disabled = true;
    inp.value += 6;
}

function disp12(){
    inp.disabled = true;
    inp.value += "-";
}

function disp8(){
    inp.disabled = true;
    inp.value += 7;
}

function disp9(){
    inp.disabled = true;
    inp.value += 8;
}
function disp10(){
    inp.disabled = true;
    inp.value += 9;
}

function disp13(){
    inp.disabled = true;
    inp.value += "*";
}

function disp16(){
    inp.disabled = true;
    inp.value += ".";
}

function disp14(){
    inp.disabled = true;
    inp.value += "/";
}

function disp15(){
    inp.disabled = true;
    inp.value += "%";
}

function disp17(){
    inp.disabled = true;
    var expr = inp.value;
    try{
        inp.value = eval(expr);
    }
    catch(e){
        inp.value="Invalid Expression"
    }
}

function disp18(){
    inp.disabled = true;
    inp.value = " ";
}

var btn1 = document.getElementById('btn1');
btn1.addEventListener("click",disp1);

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click",disp2);

var btn3 = document.getElementById('btn3');
btn3.addEventListener("click",disp3);

var btn4 = document.getElementById('btn4');
btn4.addEventListener("click",disp4);

var btn5 = document.getElementById('btn5');
btn5.addEventListener("click",disp5)

var btn11 = document.getElementById('btn11');
btn11.addEventListener("click",disp11)

var btn6 = document.getElementById('btn6');
btn6.addEventListener("click",disp6)

var btn7 = document.getElementById('btn7');
btn7.addEventListener("click",disp7)

var btn12 = document.getElementById('btn12');
btn12.addEventListener("click",disp12)

var btn8 = document.getElementById('btn8');
btn8.addEventListener("click",disp8)

var btn9 = document.getElementById('btn9');
btn9.addEventListener("click",disp9)

var btn10 = document.getElementById('btn10');
btn10.addEventListener("click",disp10)

var btn13 = document.getElementById('btn13');
btn13.addEventListener("click",disp13)

var btn16 = document.getElementById('btn16');
btn16.addEventListener("click",disp16)

var btn1 = document.getElementById('btn1');
btn1.addEventListener("click",disp1)

var btn17 = document.getElementById('btn17');
btn17.addEventListener("click",disp17)

var btn14 = document.getElementById('btn14');
btn14.addEventListener("click",disp14)

var btn15 = document.getElementById('btn15');
btn15.addEventListener("click",disp15)

var btn18 = document.getElementById('btn18');
btn18.addEventListener("click",disp18)