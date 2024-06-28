export default class Building {
  /**
   * Constructor to create a new Building instance
   * @param {number} sqft - The square footage of the building
   * @throws {TypeError} If the sqft is not a number
   */
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Building is an abstract class and cannot be instantiated directly");
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method that must be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
