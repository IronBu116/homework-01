import React, { useState, useEffect } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import api from "../../../api";

const EditProductPage = ({ productId }) => {
  const [data, setData] = useState({
    name: "",
    brand: "",
    type: "Обувь",
    amount: "",
    price: "",
    sale: false,
    sex: "Муж.",
    description: "",
  });
  const [brands, setBrands] = useState();

  useEffect(() => {
    api.products.getById(productId).then((data) => setData(data));
    api.brands.fetchAll().then((data) => setBrands(data));
  }, []);

  console.log(brands);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITED");
  };

  return (
    <>
      <section className="product__nav container-xl d-flex justify-content-center align-items-around">
        <div className="product__nav-item">Карточка внесения изменений</div>
      </section>
      <section className="content__section container-xl p-0">
        {!isLoading && Object.keys(data).length > 0 ? (
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
                  defaultOption="Выберите бренд"
                  options={brands}
                  onChange={handleChange}
                  value={data.brand}
                  error={errors.brand}
                />
                <TextField
                  label="Выберите категорию"
                  name="type"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Укажите доступное количество"
                  name="amount"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Укажите цену за единицу"
                  name="price"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Укажите размер скидки"
                  name="sale"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </div>
              <div className="col-md-6 p-4">
                <TextField
                  label="Укажите пол"
                  name="sex"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Укажите описание товара"
                  name="description"
                  value={data.brand}
                  onChange={handleChange}
                  error={errors.brand}
                />
                <button
                  className="header__usernav--link"
                  onClick={handleSubmit}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </form>
        ) : (
          "Loading..."
        )}
      </section>
    </>
  );
};

export default EditProductPage;
