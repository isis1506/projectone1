const botaoPedir = document.querySelector('.pedir');
const carrinho = document.querySelector('.bi-cart2');
let quantidadeNoCarrinho = 0; // Variável para rastrear a quantidade de itens no carrinho

botaoPedir.addEventListener('click', function () {
  // Incrementa a quantidade de itens no carrinho
  quantidadeNoCarrinho++;
  
  // Crie um elemento de notificação
  const notificacao = document.createElement('span');
  notificacao.classList.add('notificacao');
  notificacao.textContent = quantidadeNoCarrinho; // Define o texto da notificação como a quantidade atual
  
  // Adicione a notificação ao carrinho
  carrinho.appendChild(notificacao);
});


