import { IDataObject } from "../interfaces";

/** Dummy user data. */
export const dataArray: IDataObject[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

/**
 * Find a user by ID from the list above.
 */
export async function findData(id: number | string) {
  const selected = dataArray.find((data) => data.id === Number(id))

  if (!selected) {
    throw new Error('Cannot find user')
  }

  return selected
}

/**
 * Returns the above array to simulate "get all".
*/
export async function findAll() {
  if (!Array.isArray(dataArray)) {
    throw new Error('Cannot find users')
  }

  return dataArray
}
