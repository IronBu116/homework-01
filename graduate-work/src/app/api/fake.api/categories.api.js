const categories = {
  Обувь: { _id: "сategories28mtc8fwm", name: "Обувь" },
  Одежда: { _id: "сategories3gr3m3bgr", name: "Одежда" },
  Снаряжение: { _id: "сategorieslmcwos978", name: "Снаряжение" },
};

/* export const categories = [
  { _id: "сategories28mtc8fwm", name: "Обувь" },
  { _id: "сategories3gr3m3bgr", name: "Одежда" },
  { _id: "сategorieslmcwos978", name: "Снаряжение" },
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
