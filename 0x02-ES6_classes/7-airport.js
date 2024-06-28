export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    toString() {
        return `[object ${this._code}]`;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Custom inspect method to mimic expected output
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
}
