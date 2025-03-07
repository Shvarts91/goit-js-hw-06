class StringBuilder {
  #value = '';

  constructor(param) {
    this.#value = param;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`;
    console.log(this.#value);
  }

  padEnd(str) {
    this.#value = `${this.#value}${str}`;
    console.log(this.#value);
  }

  padBoth(str) {
    this.#value = `${str}${this.#value}${str}`;
    console.log(this.#value);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
