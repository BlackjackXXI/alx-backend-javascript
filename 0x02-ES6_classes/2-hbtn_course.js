export default class HolbertonCourse {
  /**
   * Constructor to create a new HolbertonCourse instance
   * @param {string} name - The name of the course
   * @param {number} length - The length of the course
   * @param {string[]} students - The students in the course
   * @throws {TypeError} If any of the parameters are of the wrong type
   */
  constructor(name, length, students) {
    // Validate and assign name
    this.name = name;

    // Validate and assign length
    this.length = length;

    // Validate and assign students
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type validation
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
