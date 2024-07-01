/**
 * fetsh id students from locations
 * @abstract
 * @return
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
