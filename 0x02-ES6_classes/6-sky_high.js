import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * Constructor to create a new SkyHighBuilding instance
   * @param {number} sqft - The square footage of the building
   * @param {number} floors - The number of floors in the building
   * @throws {TypeError} If any of the parameters are of the wrong type
   */
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
