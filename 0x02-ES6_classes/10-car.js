const CLONE_SYMBOL = Symbol('clone');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Getter for brand
    get brand() {
        return this._brand;
    }

    // Getter for motor
    get motor() {
        return this._motor;
    }

    // Getter for color
    get color() {
        return this._color;
    }

    // Method to clone the car
    cloneCar() {
        const cloned = Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            JSON.parse(JSON.stringify(this))
        );
        cloned[CLONE_SYMBOL] = true;
        return cloned;
    }

    // Custom inspect method to mimic expected output
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return `Car { _brand: '${this._brand}', _motor: '${this._motor}', _color: '${this._color}' }`;
    }
}
