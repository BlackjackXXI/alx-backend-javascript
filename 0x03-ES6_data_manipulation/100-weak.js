/**
 * weakmap taskk
 */
export const weakMap = new WeakMap();

/**
 * num max endpoint calls
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * endopoint api calls
  * fetsh id students from locations
 * @abstract
 * @return
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
    
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
