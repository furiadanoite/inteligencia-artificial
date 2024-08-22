const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
      enunciado:
        "Como se chama o esporte que o cavalo pula sobre o obstáculo ?",
      alternativas: [
        {
          texto: "Cavaleira!",
          afirmacao: "afirmação",
        },
        {
          texto: "tamborzeira!",
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
        "qual é o cavalo mais rápido das alternativas abaixo?",
      alternativas: [
        {
          texto:
            "manga larga.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "quarto de milha"
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "quantas sala existem no colégio?",
      alternativas: [
        {
          texto:
            "17.",
          afirmacao: "afirmação",
        },
        {
          texto: "20.",
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

