let btn = document.querySelector("#calculate")
btn.addEventListener('click', calculateLove);

function calculateLove(){
    let yourName = document.querySelector("#your-name").value;
    let crushName = document.querySelector("#crush-name").value;
    console.log(yourName);

    if(yourName != '' && crushName != ''){
        let percent = Math.floor(Math.random()*101);

        document.getElementById("result-message").innerText = `${yourName} and ${crushName} 's chance of love: `;
        document.getElementById("result-percentage").innerText = `${percent} %`
    }
}