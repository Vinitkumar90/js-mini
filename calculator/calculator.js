const buttonValues = [
    "AC","+/-","%","/",
    "7","8","9","x",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
];



const rightSymbols = ["/","x","+","-","="];
const topSymbols = ["AC","+/-","%"];

const display = document.getElementById("display");

let A = 0;
let operator = null;
let B = null;

function clearall(){
    let A = 0;
    let operator = null;
    let B = null;   
}


for(let i=0; i<buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;


    if(value === "0"){
        button.style.width =  "180px";
        button.style.gridColumn = "span 2"
    }
    if(rightSymbols.includes(value)){
        button.style.backgroundColor = "#FF9500"
    }
    else if(topSymbols.includes(value)){
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1c1c1c";
    }

    button.addEventListener("click",function(){
        if(rightSymbols.includes(value)){
                if(value == "="){
                    if(A!= null ){
                        B = display.value;
                        let numbA = Number(A);
                        let numbB = Number(B);

                        if(operator == "+"){
                            display.value = numbA + numbB;
                        }

                         if(operator == "-"){
                            display.value = numbA - numbB;
                        }

                         if(operator == "/"){
                            display.value = numbA/numbB;
                        }

                         if(operator == "x"){
                            display.value = numbA*numbB;
                        }
                        clearall();
                    }
                }
                else{
                    operator = value;
                    A = display.value;
                    display.value = "";
                }
        }

        else if(topSymbols.includes(value)){
            if(value == "AC"){
                clearall();
                display.value ="";
            }
            else if(value == "%"){
                display.value = Number(display.value)/100;
            }
            else if(value == "+/-"){
                if(display.value[0] == "-"){
                    display.value = display.value.slice(1);
                }else{
                    display.value = "-"+display.value;
                }
            }
        }

        else{ //numbers or .
            if(value == "."){
                if(display.value != "" && !display.value.includes(value)){
                    display.value += value;
                }
            }
            else if(display.value == "0"){
                display.value = value;
            }
            else{
                display.value += value;
            }
        }
    })

    document.getElementById("buttons").appendChild(button)
}