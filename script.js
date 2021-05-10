//console.log(document.getElementById("num").value);


var a = document.getElementById("disp1");

function handleClick(data) {
    if (data == undefined) {
        a.value = "";
    } else {
        a.value += data;
    }


}

function clr() {
    a.value = "";
}

function solve() {
    let s = a.value;
    let w = eval(s);
    a.value = w;
}


function add() {
    a.value += "+";

}


function sub() {
    a.value += "-";

}


function mul() {
    a.value += "*";

}

function div() {
    a.value += "/";
}