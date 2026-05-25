

const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["crime", "drama"],
    nota: 10,
    assistido: true
  },
  {
    id: 3,
    titulo: "O Senhor dos Anéis",
    tipo: "filme",
    ano: 2001,
    generos: ["fantasia"],
    nota: 9,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção científica", "terror"],
    nota: 8,
    assistido: true
  },
  {
    id: 5,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação", "ficção científica"],
    nota: 9,
    assistido: true
  },
  {
    id: 6,
    titulo: "The Crown",
    tipo: "serie",
    ano: 2016,
    generos: ["drama", "histórico"],
    nota: 7,
    assistido: false
  }
];


console.log(catalogo);


console.log("Título do primeiro item:", catalogo[0].titulo);


console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item só possui um gênero.");
}

console.log("=== Lista de títulos ===");
catalogo.forEach(item => {
  console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});


const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("=== Títulos em caixa alta ===");
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("=== Não assistidos ===");
console.log(`Quantidade: ${naoAssistidos.length}`);
console.log(naoAssistidos);


const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
  console.log("=== Primeiro item com nota >= 9 ===");
  console.log(`${notaAlta.titulo} - Nota: ${notaAlta.nota}`);
} else {
  console.log("Nenhum item com nota >= 9 encontrado.");
}

const mediaNotas = (catalogo.reduce((soma, item) => soma + item.nota, 0) / catalogo.length).toFixed(2);
const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = (assistidos.reduce((soma, item) => soma + item.nota, 0) / assistidos.length).toFixed(2);

console.log("=== Médias ===");
console.log(`Média geral: ${mediaNotas}`);
console.log(`Média dos assistidos: ${mediaAssistidos}`);

const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosComGenero = catalogo.every(item => item.generos.length > 0);

console.log("=== Checagens ===");
console.log("Existe algum item com ano < 2000?", existeAntigo);
console.log("Todos os itens têm pelo menos 1 gênero?", todosComGenero);
