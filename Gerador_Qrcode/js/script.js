// Javascript

//Estabelecendo constantes
const container = document.querySelector(".container");
const qrcode_btn = document.querySelector("#qr-form button");
const qrcode_input = document.querySelector("#qr-form input");
const qrcode_img = document.querySelector("#qr-code img");


//Funcao para gerar Qr code
function generate_qrcode(){
    const qrcode_input_value = qrcode_input.value;

    if(!qrcode_input_value) return;

    qrcode_btn.innerText = "Gerando codigo...";
    qrcode_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcode_input_value}`;
    qrcode_img.addEventListener("load", () => {
        container.classList.add("active");
        qrcode_btn.innerText = "Codigo criado!";
    })
}

qrcode_btn.addEventListener("click",() => {
    generate_qrcode();
})


qrcode_input.addEventListener("click",(e) => {
    if(e.code === "Enter") {
        generate_qrcode();
    }
})

//Limpando Qr code
qrcode_input.addEventListener("keyup",() => {
    if(!qrcode_input.value){
        container.classList.remove("active");
        qrcode_btn.innerText = "Gerar Qr code";

        const elemento = document.getElementById("qr-code");
        elemento.style.transition = "none";
    }
})