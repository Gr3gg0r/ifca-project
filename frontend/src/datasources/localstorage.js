import { LocalStorage } from "quasar";

export function getStatus(key) {
  try {
    return LocalStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
}

export function setStatus(key, token) {
  try {
    LocalStorage.set(key, token);
  } catch (e) {
    console.log(e);
  }
}

export function removeStatus(key) {
  try {
    LocalStorage.remove(key);
  } catch (e) {
    console.log(e);
  }
}
