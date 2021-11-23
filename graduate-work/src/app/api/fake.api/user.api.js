const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Джон Дориан",
    sex: "male",
    email: "Jony7351@tw.com",
    password: "b2C!9bmE",
    discount: 0,
    adress: {
      index: 420001,
      street: "Гагарина",
      number: 3,
      appartmen: 10,
      city: "Москва",
    },
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Кокс",
    sex: "male",
    email: "white4571@twipet.com",
    password: "NSF-kQ7p",
    discount: 5,
    adress: {
      index: 420002,
      street: "Ленина",
      number: 8,
      appartmen: 2,
      city: "Москва",
    },
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Боб Келсо",
    sex: "male",
    email: "bob007@tw.com",
    password: "*cr6Lydn",
    discount: 10,
    adress: {
      index: 420003,
      street: "Ленина",
      number: 13,
      appartmen: 45,
      city: "Москва",
    },
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Рэйчел Грин",
    sex: "female",
    email: "green7311@fam.biz",
    password: "*cr6Lydn",
    discount: 0,
    adress: {
      index: 4200034,
      street: "Чуйкова",
      number: 67,
      appartmen: 18,
      city: "Казань",
    },
  },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 2000);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((u) => u._id === id);
    users[userIndex] = { ...users[userIndex], ...data };
    localStorage.setItem("users", JSON.stringify(users));
    resolve(users[userIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).find(
          (user) => user._id === id
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  update,
};
