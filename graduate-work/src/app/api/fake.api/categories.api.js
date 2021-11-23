const categories = {
  Кроссовки: { _id: "сategories28mtc8fwm", name: "Кроссовки" },
  Одежда: { _id: "сategories3gr3m3bgr", name: "Одежда" },
  Снаряжение: { _id: "сategorieslmcwos978", name: "Снаряжение" },
};

/* export const professions = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
  { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
  { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
  { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
]; */

if (!localStorage.getItem("categories")) {
  localStorage.setItem("categories", JSON.stringify(categories));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("categories")));
    }, 2000);
  });

const put = (key, data) =>
  new Promise((resolve) => {
    const categories = JSON.parse(localStorage.getItem("categories"));
    localStorage.setItem(
      "categories",
      JSON.stringify({ ...categories, [key]: data })
    );
    resolve(categories);
  });

/* var ID = function () {
  return Math.random().toString(36).substr(2, 9);
};

console.log(ID()); */

export default {
  fetchAll,
  put,
};
