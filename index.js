// ===== EXPLICAÇÃO PARA CRIANÇAS DE 10 ANOS =====
// Imagine que você tem um videogame onde heróis ganham pontos (XP)
// e sobem de nível conforme ganham mais pontos!

// 🎮 PASSO 1: CRIANDO LISTAS DE HERÓIS
// "let" é como criar uma caixinha para guardar coisas
// Os colchetes [] criam uma LISTA (como uma fila de heróis)
let nomes = [
  "Arthas",
  "Legolas",
  "Gandalf",
  "Aragorn",
  "Gimli",
  "Frodo",
  "Sauron",
  "Galadriel",
];
// ↑ Esta lista guarda os NOMES dos heróis (posição 0, 1, 2, 3...)

let experiencias = [7500, 500, 1500, 3000, 6000, 7500, 8500, 9500];
// ↑ Esta lista guarda os PONTOS XP de cada herói (na mesma ordem dos nomes)

// 🔢 PASSO 2: CRIANDO VARIÁVEIS DE CONTROLE
let i = 0; // ← Esta é nossa "contadora"! Começa no 0 (primeiro herói)
let nivel = ""; // ← Aqui vamos guardar o nível do herói (vazia no começo)

// 🔄 PASSO 3: LAÇO DE REPETIÇÃO (como um loop de montanha-russa!)
// "while" significa "enquanto"... vai repetir enquanto a condição for verdadeira
while (i < nomes.length) {
  // ← Enquanto i for menor que o tamanho da lista

  // 📝 Pegando os dados do herói atual
  let nomeAtual = nomes[i]; // ← Pega o nome na posição i da lista
  let xpAtual = experiencias[i]; // ← Pega o XP na posição i da lista

  // 🎯 PASSO 4: ESTRUTURA DE DECISÃO (como um teste de nível!)
  // "if" significa "se"... vamos testar quanto XP o herói tem

  if (xpAtual < 1000) {
    // Se o XP for menor que 1000, é nível Ferro
    nivel = "Ferro";
  } else if (xpAtual >= 1001 && xpAtual <= 2000) {
    // Se o XP estiver entre 1001 E 2000, é Bronze
    // ">=" significa "maior ou igual"
    // "<=" significa "menor ou igual"
    // "&&" significa "E" (as duas condições têm que ser verdadeiras)
    nivel = "Bronze";
  } else if (xpAtual >= 2001 && xpAtual <= 5000) {
    // Se XP entre 2001 E 5000 = Prata
    nivel = "Prata";
  } else if (xpAtual >= 5001 && xpAtual <= 7000) {
    // Se XP entre 5001 E 7000 = Ouro
    nivel = "Ouro";
  } else if (xpAtual >= 7001 && xpAtual <= 8000) {
    // Se XP entre 7001 E 8000 = Platina
    nivel = "Platina";
  } else if (xpAtual >= 8001 && xpAtual <= 9000) {
    // Se XP entre 8001 E 9000 = Ascendente
    nivel = "Ascendente";
  } else if (xpAtual >= 9001 && xpAtual <= 10000) {
    // Se XP entre 9001 E 10000 = Imortal
    nivel = "Imortal";
  } else if (xpAtual >= 10001) {
    // Se XP for 10001 ou mais = Radiante (nível máximo!)
    nivel = "Radiante";
  }

  // 📢 MOSTRANDO O RESULTADO NA TELA
  // console.log é como "falar para o computador mostrar na tela"
  // As crases `` permitem misturar texto com variáveis usando ${}
  console.log(`O Herói de nome **${nomeAtual}** está no nível de **${nivel}**`);

  // 📈 INDO PARA O PRÓXIMO HERÓI
  i++; // ← Isso significa i = i + 1 (soma 1 na contadora)
  // Assim passamos para o próximo herói da lista!
}

// 📝 PULANDO UMA LINHA PARA FICAR MAIS ORGANIZADO
console.log("\n--- Exemplo com um único herói ---");
// "\n" é como apertar Enter - pula uma linha

// 🏆 PASSO 5: EXEMPLO COM UM HERÓI SÓ (mais simples!)
let nomeHeroi = "Thorin"; // ← Nome do nosso herói especial
let xpHeroi = 12000; // ← XP do nosso herói (12.000 pontos!)

// 🎯 FAZENDO O MESMO TESTE DE NÍVEL (copiamos as regras de cima)
if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else if (xpHeroi >= 10001) {
  nivel = "Radiante"; // ← Thorin vai ser Radiante porque tem 12.000 XP!
}

// 🎉 MOSTRANDO O RESULTADO FINAL
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);
