// Armazena os dados
let ambientes = [];
let itens = [];

// Cadastro de ambiente
document.getElementById("ambienteForm").addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nomeAmbiente").value;
  const dimensoes = document.getElementById("dimensoes").value;
  const detalhes = document.getElementById("detalhes").value;

  ambientes.push({ nome, dimensoes, detalhes });
  alert(`Ambiente "${nome}" cadastrado!`);
  e.target.reset();
});

// Cadastro de itens
document.getElementById("itemForm").addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nomeItem").value;
  const medidas = document.getElementById("medidasItem").value;

  itens.push({ nome, medidas });
  const li = document.createElement("li");
  li.textContent = `${nome} - ${medidas}`;
  document.getElementById("listaItens").appendChild(li);

  e.target.reset();
});

// Sugestões da "IA"
document.getElementById("gerarSugestoes").addEventListener("click", () => {
  const sugestoesDiv = document.getElementById("sugestoes");
  sugestoesDiv.innerHTML = "";

  if (ambientes.length === 0) {
    sugestoesDiv.textContent = "Cadastre um ambiente primeiro.";
    return;
  }

  const ambiente = ambientes[ambientes.length - 1];
  const sugestoes = [
    `Coloque o sofá perto da janela no ambiente "${ambiente.nome}".`,
    `Use iluminação indireta para valorizar o espaço.`,
    `Posicione prateleiras na parede maior para otimizar.`,
    `Adicione plantas para trazer frescor e aconchego.`,
    `Uma paleta de cores quentes combina bem com o estilo vintage.`
  ];

  sugestoes.forEach(s => {
    const p = document.createElement("p");
    p.textContent = "💡 " + s;
    sugestoesDiv.appendChild(p);
  });
});

// Chat da comunidade
document.getElementById("chatForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.getElementById("chatInput").value;
  const chatBox = document.getElementById("chatBox");
  const p = document.createElement("p");
  p.textContent = "👤 " + msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
  e.target.reset();
});
