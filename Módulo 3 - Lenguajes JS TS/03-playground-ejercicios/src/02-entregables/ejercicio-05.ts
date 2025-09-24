console.log("************** EJERCICIO 05 - SLOT MACHINE *********************");
//Utilizamos un random para crear el booleano

const randomBoolean = (): boolean => {
  return Math.random() >= 0.5;
};

class SlotMachine {
  coins: number;
  ruleta1: boolean;
  ruleta2: boolean;
  ruleta3: boolean;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    this.ruleta1 = randomBoolean();
    this.ruleta2 = randomBoolean();
    this.ruleta3 = randomBoolean();

    if (this.ruleta1 && this.ruleta2 && this.ruleta3) {
      if (this.coins === 1) {
        console.log(`Congratulations!!!. You won ${this.coins} coin!!`);
      } else {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      }
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();

for (let i = 0; i < 10; i++) {
  let jugada = i + 1;
  console.log(`Jugada ${jugada}`);
  machine1.play();
}
