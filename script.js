const ac = document.getElementById("delete");
const confirm = document.getElementById("confirm");
let result = document.querySelector(".result");


function insert(valor){
   result.innerHTML += valor;
}

function dell(){
    result.innerHTML = "";
}

function backspace(){
    if(result.textContent){
        let resulta = document.querySelector(".result").innerHTML;
        result.innerHTML = resulta.substring(0, resulta.length - 1);
    }
}

function count(){
    if(result.textContent){
        document.querySelector(".result").innerHTML = eval(result.innerHTML); 
    }else{
        document.querySelector(".result").innerHTML = "";
    }
}
ac.addEventListener("click", dell);
confirm.addEventListener("click", count);


//CLASS-----------

let container = document.querySelector(".container");

let array = [button = document.getElementsByTagName("button")[0],button1 = document.getElementsByTagName("button")[1],button2 = document.getElementsByTagName("button")[2],button3 = document.getElementsByTagName("button")[3],button4 = document.getElementsByTagName("button")[4],button5 = document.getElementsByTagName("button")[5],button6 = document.getElementsByTagName("button")[6],button7 = document.getElementsByTagName("button")[7],button8 = document.getElementsByTagName("button")[8],button9 = document.getElementsByTagName("button")[9],button10 = document.getElementsByTagName("button")[10],button11 = document.getElementsByTagName("button")[11],button12 = document.getElementsByTagName("button")[12],button13 = document.getElementsByTagName("button")[13],button14 = document.getElementsByTagName("button")[14],button15 = document.getElementsByTagName("button")[15],button16 = document.getElementsByTagName("button")[16],button17 = document.getElementsByTagName("button")[17],button18 = document.getElementsByTagName("button")[18],button19 = document.getElementsByTagName("button")[19],button20 = document.getElementsByTagName("button")[20],button21 = document.getElementsByTagName("button")[21]];

let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");

function changer(){
    container.classList.toggle("dark");
    result.classList.toggle("result-dark");
    array[0].classList.toggle("button-dark");
    array[1].classList.toggle("button-dark");
    array[2].classList.toggle("button-dark");
    array[3].classList.toggle("button-dark");
    array[4].classList.toggle("button-dark");
    array[5].classList.toggle("button-dark");
    array[6].classList.toggle("button-dark");
    array[7].classList.toggle("button-dark");
    array[8].classList.toggle("button-dark");
    array[9].classList.toggle("button-dark");
    array[10].classList.toggle("button-dark");
    array[11].classList.toggle("button-dark");
    array[12].classList.toggle("button-dark");
    array[13].classList.toggle("button-dark");
    array[14].classList.toggle("button-dark");
    array[15].classList.toggle("button-dark");
    array[16].classList.toggle("button-dark");
    array[17].classList.toggle("button-dark");
    array[18].classList.toggle("button-dark");
    array[19].classList.toggle("button-dark");
    array[20].classList.toggle("button-dark");

}

moon.addEventListener("click", changer)



