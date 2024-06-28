// 1-make_classrooms.js

// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

/**
 * Function to initialize and return an array of ClassRoom objects
 * @returns {ClassRoom[]} Array of ClassRoom objects
 */
function initializeRooms() {
  // Create and return an array of ClassRoom objects with the specified sizes
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}

// Export the initializeRooms function as the default export
export default initializeRooms;
