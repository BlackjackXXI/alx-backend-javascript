/**
* Define the ClassRoom class and export it as the default export
*/
export default class ClassRoom {
  /**
   * Constructor to create a new ClassRoom instance
   * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom
   */
  constructor(maxStudentsSize) {
    // Assign the provided maxStudentsSize to the _maxStudentsSize property
    this._maxStudentsSize = maxStudentsSize;
  }
}
