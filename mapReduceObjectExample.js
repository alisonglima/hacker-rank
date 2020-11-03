const names = ["Alison", "Bruno", "Rodrigo"];

const teste = names
  .map((name) => {
    return {
      nome: name,
      adjetivo: "",
    };
  })
  .reduce((a, b) => {
    if (b.nome.substr(0, 1) === "A") {
      a[b.nome] = "Lindo";
    } else {
      a[b.nome] = "Feio";
    }

    return a;
  }, {});

const newTeste = Object.keys(teste).filter((a) => {
  console.log(teste[a]);
  return a.length > 5;
});

console.log(newTeste);
