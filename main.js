const imgGatinho = document.getElementById("imgGatinho");
const btnLigar = document.getElementById("btnLigar");
const btnDesligar = document.getElementById("btnDesligar");

//Respondendo eventos
btnLigar.addEventListener("click", () => {
  imgGatinho.src = "./img/dançando.gif";
});

//Respondendo eventos
btnDesligar.addEventListener("click", () => {
  imgGatinho.src = "./img/lutador.gif";
});
