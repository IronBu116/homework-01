import React, { useState, useEffect } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import { useHistory, useParams } from "react-router-dom";
import { useProduct } from "../../hook/useProducts";
import { useBrands } from "../../hook/useBrands";
import { useCategories } from "../../hook/useCategories";
import TextAreaField from "../../common/form/textAreaField";
import BackHistoryButton from "../../common/backButton";
import { validator } from "../../../utils/validator";

const EditProductPage = () => {
  const { brands } = useBrands();
  const { categories } = useCategories();
  const { getProductById } = useProduct();
  const { productId } = useParams();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    brand: "",
    category: "",
    amount: "",
    price: "",
    sale: false,
    sex: "Муж.",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setData((prevState) => ({ ...prevState, ...getProductById(productId) }));
  }, []);

  useEffect(() => {
    if (data._id) setIsLoading(false);
  }, [data]);

  useEffect(() => validate(), [data]);

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Не указано название товара",
      },
    },
    brand: {
      isRequired: {
        message: "Не указан бренд",
      },
    },
    category: {
      isRequired: {
        message: "Не выбрана категория товара",
      },
    },
    amount: {
      isRequired: {
        message: "Не указано доступное количество",
      },
    },
    price: {
      isRequired: {
        message: "Не указана стоимость товара",
      },
    },
    description: {
      isRequired: {
        message: "Отсутствует описание товара",
      },
    },
  };

  const getBrandById = (id) => {
    for (const brand in brands) {
      const brandData = brands[brand];
      if (brandData._id === id) return brandData;
    }
  };

  const getCategoryById = (id) => {
    for (const category in categories) {
      const categoryData = categories[category];
      if (categoryData._id === id) return categoryData;
    }
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;
  return (
    <>
      <section className="product__nav container-xl d-flex justify-content-center align-items-around">
        <div className="product__nav-item">
          {!isLoading ? "Карточка внесения изменений" : "Загрузка..."}
        </div>
      </section>
      <section className="content__section container-xl p-0">
        {!isLoading &&
        Object.keys(brands).length > 0 &&
        Object.keys(categories).length > 0 ? (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 p-4">
                <TextField
                  label="Название товара"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <SelectField
                  label="Бренд"
                  name="brand"
                  defaultOption="Выберите бренд"
                  options={brands}
                  onChange={handleChange}
                  value={data.brand}
                  error={errors.brand}
                />
                <SelectField
                  label="Категория"
                  name="category"
                  defaultOption="Выберите категорию"
                  options={categories}
                  onChange={handleChange}
                  value={data.category}
                  error={errors.category}
                />
                <TextField
                  label="Укажите доступное количество"
                  name="amount"
                  type="number"
                  value={data.amount}
                  onChange={handleChange}
                  error={errors.amount}
                />
                <TextField
                  label="Укажите цену за единицу"
                  name="price"
                  type="number"
                  value={data.price}
                  onChange={handleChange}
                  error={errors.price}
                />
                <RadioField
                  options={[
                    { name: "Мужской", value: "Муж." },
                    { name: "Женский", value: "Жен." },
                    { name: "Прочее", value: "-" },
                  ]}
                  value={data.sex}
                  name="sex"
                  onChange={handleChange}
                  label="Выберите пол"
                />
              </div>
              <div className="col-md-6 p-4">
                <TextAreaField
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  label="Укажите описание товара"
                  error={errors.description}
                />
                <button
                  className="navigate__button"
                  onClick={handleSubmit}
                  disabled={!isValid}
                >
                  Сохранить
                </button>
                <BackHistoryButton />
              </div>
            </div>
          </form>
        ) : null}
      </section>
    </>
  );
};

export default EditProductPage;
