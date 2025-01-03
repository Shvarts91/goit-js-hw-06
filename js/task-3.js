class StringBuilder {
    #strValue = '';

    constructor(param) {
        this.strValue = param;
    }

    getValue () {
        return this.strValue;
    }

    padStart (str) {
        this.strValue = `${str}${this.strValue}`
    }

    
    padEnd (str) {
        this.strValue = `${this.strValue}${str}`
    }

    padBoth (str) {
        this.strValue = `${str}${this.strValue}${str}`
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="