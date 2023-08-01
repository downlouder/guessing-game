class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.guessValue;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  lower() {
    this.max = this.guessValue;
  }

  greater() {
    this.min = this.guessValue;
  }

  guess() {
    this.guessValue = Math.ceil((this.min + this.max) / 2);
    return this.guessValue;
  }
}

module.exports = GuessingGame;
