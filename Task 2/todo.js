
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");


function Add(){
    if(inputs.value == ""){
        alert("Pleasw Enter Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="material-icons">&#xe872;</i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    
    }
}
