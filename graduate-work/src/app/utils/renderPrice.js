export function renderPrice(num) {
  let len = num.toString().length;
  let arrNum = num.toString().split("");
  let price = [];
  while (len > 3) {
    len -= 3;
    price = [" ", ...arrNum.splice(-3), ...price];
  }
  price = [...arrNum.splice(0, len), ...price];
  return price.join("");
}
