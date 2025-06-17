document.addEventListener('DOMContentLoaded', () => {
  // Alternância de receitas principais
  const botoes = document.querySelectorAll('.receitas');
  const conteudos = document.querySelectorAll('.receita-content');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // Esconde todos os conteúdos
      conteudos.forEach(div => {
        div.classList.remove('.mostrar');
        div.classList.add('.esconder');
      });

      // Pega a classe do botão que identifica a receita (ex: 'frango')
      const nome = Array.from(botao.classList).find(cls => cls !== 'receitas');
      const receita = document.querySelector(`.${nome}-content`);

      if (receita) {
        receita.classList.remove('.esconder');
        receita.classList.add('.mostrar');
      }
    });
  });

  // Alternância das sidebars
  const botaoOpcoes = document.querySelector('.option-button');
  const botaoMais = document.querySelector('.more-items');
  const sidebar1 = document.querySelector('.sidebar-opcao');
  const sidebar2 = document.querySelector('.sidebar-receitas');

  botaoOpcoes.addEventListener('click', () => {
    sidebar1.classList.toggle('visivel');
    sidebar2.classList.remove('visivel');
  });

  botaoMais.addEventListener('click', () => {
    sidebar2.classList.toggle('visivel');
    sidebar1.classList.remove('visivel');
  });
});

