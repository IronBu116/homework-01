const brands = {
  brand6di5c5e3n: { _id: "brand6di5c5e3n", name: "Adidas" },
  brandip6vq6x9d: { _id: "brandip6vq6x9d", name: "Imviso" },
  brandcw1uxld44: { _id: "brandcw1uxld44", name: "Asics" },
  brandmej4epf2h: { _id: "brandmej4epf2h", name: "Domyos" },
  brand1ymxkyh0i: { _id: "brand1ymxkyh0i", name: "Tarmak" },
};

if (!localStorage.getItem("brands")) {
  localStorage.setItem("brands", JSON.stringify(brands));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("brands")));
    }, 2000);
  });

const put = (key, data) =>
  new Promise((resolve) => {
    const brands = JSON.parse(localStorage.getItem("categories"));
    localStorage.setItem("brands", JSON.stringify({ ...brands, [key]: data }));
    resolve(brands);
  });

export default {
  fetchAll,
  put,
};
