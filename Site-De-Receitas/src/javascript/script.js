const sideBar2 = document.getElementById('sideBar2');
const sideBar1 = document.getElementById('sideBar1');

function alternarSideBar2() {
  if (sideBar2.classList.contains('visivel')) {
    sideBar2.classList.remove('visivel');
    setTimeout(() => {
      sideBar2.style.display = 'none';
    }, 600);
  } else {
    sideBar2.style.display = 'block';
    setTimeout(() => {
      sideBar2.classList.add('visivel');
    }, 20);
  }
}

function alternarSideBar1() {
  if (sideBar1.classList.contains('visivel')) {
    sideBar1.classList.remove('visivel');
    setTimeout(() => {
      sideBar1.style.display = 'none';
    }, 600);
  } else {
    sideBar1.style.display = 'block';
    setTimeout(() => {
      sideBar1.classList.add('visivel');
    }, 20);
  }
}

const botoes = document.querySelectorAll(".botao-receita");
const conteudos = document.querySelectorAll(".main-content");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".botao-receita.selecionado");
    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");

    const nome = Array.from(botao.classList).find(cls => cls !== "botao-receita" && cls !== "selecionado");
    if (!nome) return;

    conteudos.forEach(conteudo => {
      conteudo.classList.remove("mostrar");
      conteudo.classList.add("esconder");
    });

    const receitaAlvo = document.querySelector(`.main-content.${nome}`);
    if (receitaAlvo) {
      receitaAlvo.classList.remove("esconder");
      receitaAlvo.classList.add("mostrar");
    }
  });
});

const body = document.getElementById("body");

function darkMode() {
  body.classList.toggle("dark-mode");

const darkIcon = document.getElementById("darkModeIcon");
const darkText = document.getElementById("darkModeText");

if (body.classList.contains("dark-mode")) {
  darkIcon.classList.remove("fa-circle-half-stroke");
  darkIcon.classList.add("fa-sun");
  darkText.textContent = "Modo Claro";
} else {
  darkIcon.classList.remove("fa-sun");
  darkIcon.classList.add("fa-circle-half-stroke");
  darkText.textContent = "Modo Escuro";
}
}

const menuReceitas = document.querySelector(".menu");
const loginScreen = document.querySelector(".login-screen");

function  mostrarLogin() {
  menuReceitas.classList.remove("mostrar");
  menuReceitas.classList.add("esconder");
  loginScreen.classList.remove("esconder");
  loginScreen.classList.add("mostrar");
}

function mostrarMenu() {
  loginScreen.classList.remove("mostrar");
  loginScreen.classList.add("esconder");
  menuReceitas.classList.remove("esconder");
  menuReceitas.classList.add("mostrar");
}