const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
      enunciado:
        "Como é chamada a defesa de linha do campo?",
      alternativas: [
        {
          texto: "Zagueiro!",
          afirmacao: "afirmação",
        },
        {
          texto: "Goleiro!",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "como se chama azul em inglês?",
      alternativas: [
        {
          texto:
            "blue.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "red.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "qual a vaca mais leiteira entre as alternativas abaixo?",
      alternativas: [
        {
          texto:
            "holandeza.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "nelore.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "quantas havan existem no Brasil?",
      alternativas: [
        {
          texto:
            "175.",
          afirmacao: "afirmação",
        },
        {
          texto: "207.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "? ",
      alternativas: [
        {
          texto:
            "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
          afirmacao: "afirmação",
        },
      ],
    },
  ];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", function () {
        atual++;
        mostraPergunta();
      });
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();

