class CaixaDaLanchonete {
    constructor() {
      this.cardapio = {
        cafe: { descricao: "Café", valor: 3.0 },
        chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
        suco: { descricao: "Suco Natural", valor: 6.2 },
        sanduiche: { descricao: "Sanduíche", valor: 6.5 },
        queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
        salgado: { descricao: "Salgado", valor: 7.25 },
        combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
        combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
      };

      this.formasDePagamento = {
        dinheiro: 0.95,
        debito: 1,
        credito: 1.03,
      };
    }

    calcularValorDaCompra(formaDePagamento, itens) {
      if (!this.formasDePagamento.hasOwnProperty(formaDePagamento)) {
        return "Forma de pagamento inválida!";
      }

      if (itens.length === 0) {
        return "Não há itens no carrinho de compra!";
      }

      let valorTotal = 0;

      for (const item of itens) {
        const [codigo, quantidade] = item.split(",");

        if (!this.cardapio.hasOwnProperty(codigo)) {
          return "Item inválido!";
        }

        const itemInfo = this.cardapio[codigo];

        if (quantidade <= 0) {
          return "Quantidade inválida!";
        }

        valorTotal += itemInfo.valor * quantidade;
      }

      valorTotal *= this.formasDePagamento[formaDePagamento];

      return  `R$ ${valorTotal.toFixed(2)}`;
    }
  }

  // Exemplos de uso:
  const caixa = new CaixaDaLanchonete();

  console.log(caixa.calcularValorDaCompra('debito', ['chantily,1']));
  console.log(caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']));
  console.log(caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2']));