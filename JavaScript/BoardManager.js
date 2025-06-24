class BoardManager {
  cardManager;
  node;
  numImgs;
  curNumCards;

  constructor(id, numImgs, cardManager) {
    this.node = document.getElementById(id);
    this.numImgs = numImgs;
    this.cardManager = cardManager; 
    this.curNumCards = 0;
  }

  clear() {
    this.node.innerHTML = "";
  }

  check(){
    let flipped = document.getElementsByClassName('matched')
    console.log(flipped)
    console.log(flipped.length, this.curNumCards)
    return flipped.length >= this.curNumCards;
  }

  fill(numberCards) {
    if (numberCards > 2 * this.numImgs) {
      console.log("Numero de imagens insuficientes");
      numberCards = 2 * this.numImgs;
    }
    numberCards = parseInt(numberCards);
    this.curNumCards = numberCards;
    this.clear();
    this.genRandomList(numberCards).forEach((number) =>
      this.addCard(this.cardManager.gen(number))
    );
    this.adjustCss();
  }

  addCard(card) {
    this.node.appendChild(card);
  }

  genRandomList(size) {
    let list = Array(size / 2)
      .fill()
      .map((_, i) => i + 1);

    list = [...list, ...list].sort(() => Math.random() - 0.5);
    return list;
  }

  adjustCss() {
    let cols = Math.sqrt(this.curNumCards);

    let size = 100 / cols - 1;

    size += "vmin";

    document.documentElement.style.setProperty("--numCols", cols);
    document.documentElement.style.setProperty("--size", size);
  }
}
