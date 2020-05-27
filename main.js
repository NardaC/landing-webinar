const reset = document.getElementById("reset");
let name = document.getElementById("name")
let email = document.getElementById("email")
let empresa = document.getElementById("empresa")

reset.addEventListener("click", ()=>{

    name.value="";
    email.value="";
    empresa.value="";
})