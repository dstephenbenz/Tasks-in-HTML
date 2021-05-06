//console.log(document.getElementById("num").value);


var a = document.getElementById("disp1").value;
var b = document.getElementById("disp2").value;
var c = document.getElementById("disp3").value;



function handleClick(data) {
    let n = data;
    //a.innerText = a.innerText + data;
    a = parseInt(n);
    console.log(a);

}
console.log(handleClick());

function clear(data) {
    a.value = this.value;
}

function add(x, y) {
    var res = x + y;
    return res;
}
c.value = add();

function sub(x, y) {
    var res = x - y;
    return res;
}
c.value = sub();

function mul(x, y) {
    var res = x * y;
    return res;

}
c.value = mul();