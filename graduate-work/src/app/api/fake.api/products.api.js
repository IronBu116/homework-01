import brands from "./brands.api";
import categories from "./categories.api";

const products = [
  {
    _id: "7fjw219rb",
    name: "БУТСЫ ФУТБОЛЬНЫЕ ДЛЯ ВЗРОСЛЫХ",
    brand: brands.imviso,
    type: categories.shoes,
    amount: 100,
    price: 4799,
    sale: false,
    size: [40, 41, 42, 43, 44],
    sex: "Муж.",
    description:
      "Бутсы изготовлены из нубука для лучшего ощущения мяча во время игры. Резиновая подошва для лучшей амортизации и сцепления с покрытием площадки.Созданная в сотрудничестве с нашими техническими партнерами модель ESKUDO 900 – настоящее сокровище для практики футзала.Нубук и амортизационная система Kalensole обеспечивают удобство и чувство мяча.",
  },
  {
    _id: "nycw4yxn6",
    name: "КРОССОВКИ ДЛЯ БЕГА ЖЕНСКИЕ GEL-PULSE",
    brand: brands.asics,
    type: categories.shoes,
    amount: 26,
    price: 9999,
    sale: false,
    size: [36, 37, 38, 39, 40],
    sex: "Жен.",
    description:
      "Для комфортных занятий бегом на короткие и длинные дистанции до 2-3 раз в неделю. Благодаря новейшим техническим решениям и современному дизайну кроссовки GEL-PULSE™ 13 G-TX помогут Вам справляться с очередными каждодневными задачами.",
  },
  {
    _id: "syzrbgs2k",
    name: "КРОССОВКИ ДЛЯ ФИТНЕСА",
    brand: brands.domyos,
    type: categories.shoes,
    amount: 10,
    price: 1499,
    sale: false,
    size: [36, 37, 38, 39, 40],
    sex: "Жен.",
    description:
      "Наши разработчики товаров для фитнеса создали эти кроссовки для тех, кто начинает заниматься фитнесом в зале. Вам нужна удобная обувь, чтобы начать занятия фитнесом? Наши кроссовки будут с вами на каждой тренировке. Гибкая, легкая и амортизирующая обувь – ваш мастхэв.",
  },
  {
    _id: "qkrx15548",
    name: "КРОССОВКИ SE900 NBA LOS ANGELES LAKERS",
    brand: brands.tarmak,
    type: categories.shoes,
    amount: 71,
    price: 6999,
    sale: false,
    size: [40, 41, 42, 43, 44],
    sex: "Муж.",
    description:
      "Наши разработчики, увлеченные БАСКЕТБОЛОМ, разработали эти кроссовки для интенсивной, стремительной и динамичной игры. Благодаря уникальной подошве кроссовки SE900 обеспечат Вам максимум ДИНАМИЗМА. Эта модель средней высоты прекрасно подойдет универсальным и легким игрокам, которым нужна хорошая маневренность!",
  },
  {
    _id: "gdu9fyri7",
    name: "КРОССОВКИ МУЖСКИЕ GEL-PULSE 13 GTX",
    brand: brands.asics,
    type: categories.shoes,
    amount: 71,
    price: 9999,
    sale: true,
    size: [40, 41, 42, 43, 44],
    sex: "Муж.",
    description:
      "Наши разработчики, увлеченные БАСКЕТБОЛОМ, разработали эти кроссовки для интенсивной, стремительной и динамичной игры. Благодаря уникальной подошве кроссовки SE900 обеспечат Вам максимум ДИНАМИЗМА. Эта модель средней высоты прекрасно подойдет универсальным и легким игрокам, которым нужна хорошая маневренность!",
  },
  {
    _id: "s0jf9b983",
    name: "БРЮКИ ДЛЯ ФИТНЕСА ЗАУЖЕННЫЕ",
    brand: brands.imviso,
    type: categories.clothes,
    amount: 0,
    price: 999,
    sale: false,
    size: ["XS", "M", "L"],
    sex: "Муж.",
    description:
      "Непревзойденные брюки для фитнеса, простые и удобные, которые найдут свое место в вашем гардеробе спортивной одежды… или в повседневной жизни Эластичный пояс, для брюк с идеальным соотношением цены и качества… Вы не захотите с ними расставаться!",
  },
  {
    _id: "hy1ve3g7b",
    name: "БРЮКИ ДЛЯ ФИТНЕСА И КАРДИОТРЕНИРОВОК",
    brand: brands.domyos,
    type: categories.clothes,
    amount: 35,
    price: 1199,
    sale: false,
    size: ["XS", "M", "L"],
    sex: "Муж.",
    description:
      "Для спортсменов, которые начинают заниматься фитнесом или возобновляют тренировки. Эластичный материал для оптимальной свободы движений. Хорошая вентиляция благодаря эластичной вставке в паховой области. Два практичных кармана с застежкой–молнией для хранения телефона и ключей",
  },
  {
    _id: "kbe45nubf",
    brand: brands.tarmak,
    type: categories.clothes,
    amount: 3,
    price: 3999,
    sale: true,
    size: ["XS", "M", "L"],
    sex: "Жен.",
    description:
      "Этот пуховик, сертифицированный RDS*, поддерживает тепло Вашего тела во время похода в прохладную погоду! (до – 5°C при активности) Самая сжимаемая модель из всех наших пуховиков позволяет сэкономить место в Вашем рюкзаке и путешествовать налегке. Плотность утеплителя 800 CUIN гарантирует хорошее соотношение теплоты и легкости!",
  },
  {
    _id: "wgp4ju3kf",
    name: "БЕГОВАЯ ДОРОЖКА RUN 100",
    brand: brands.domyos,
    type: categories.equipment,
    amount: 14,
    price: 29999,
    sale: false,
    size: null,
    sex: "-",
    description:
      "Беговая дорожка RUN100 объединяет в себе компактность и технические качества. Хотите сэкономить пространство без ущерба для эффективности? В новой модели RUN100 сочетается большая беговая поверхность и компактность. В Декатлон вы можете заказать доставку на дом и сборку.",
  },
  {
    _id: "cspo0n00f",
    name: "ВЕЛОТРЕНАЖЕР ЭЛЛИПТИЧЕСКИЙ EL 520",
    brand: brands.asics,
    type: categories.equipment,
    amount: 7,
    price: 35999,
    sale: false,
    size: null,
    sex: "-",
    description:
      "Наши разработчики создали эллиптический тренажер для уровней от начинающего до продвинутого. Тренажер протестирован и одобрен для использования 5 ч в неделю. Хотите крутить педали перед окном (или телевизором), но рядом нет розетки? Розетка больше не нужна: эллиптический тренажер EL520 питается автономно от ваших движений Преимущества: амплитуда движений!",
  },
  {
    _id: "clsdxhoji",
    name: "НАБОР ИЗ ГАНТЕЛЕЙ И ШТАНГИ",
    brand: brands.imviso,
    type: categories.equipment,
    amount: 7,
    price: 16999,
    sale: true,
    size: null,
    sex: "-",
    description:
      "Набор разработан нашими тренерами и командой инженеров для тренировки мышц с помощью гантелей и штанги в домашних условиях. С этим набором можно выполнять большой диапазон силовых упражнений, тренируя верхнюю и нижнюю часть тела.",
  },
  {
    _id: "w0vzotxpk",
    name: "КОВРИК ПОД ТРЕНАЖЕР",
    brand: brands.tarmak,
    type: categories.equipment,
    amount: 3,
    price: 1999,
    sale: false,
    size: null,
    sex: "-",
    description:
      "Наши разработчики предлагают вам напольный коврик, который снижает шум кардиотренажера и защищает пол. Защитный коврик повышает уровень Вашего комфорта и защищает напольное покрытие во время использования тренажера.",
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("products")));
    }, 2000);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const userIndex = products.findIndex((u) => u._id === id);
    products[userIndex] = { ...products[userIndex], ...data };
    localStorage.setItem("products", JSON.stringify(products));
    resolve(products[userIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("products")).find(
          (product) => product._id === id
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  update,
};
