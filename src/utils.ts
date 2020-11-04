export function querySelector<T extends Element>(selector: string): T {
  const result = document.querySelector<T>(selector);
  if (!result) {
    throw new Error("cannot find element with selector: " + selector);
  }
  return result;
}

export function setAttr(elt: Element, prop: string, value: number | string) {
  elt.setAttributeNS(null, prop, value + "");
}
