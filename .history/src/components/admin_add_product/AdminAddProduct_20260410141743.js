import React from "react";
import "./AdminAddProduct.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AdminAddProduct = () => {
  const schema = yup.object({
    name: yup.string().required("Please enter product name!"),
    brand: yup.string().required("Please select product brand!"),
    image: yup.string().required("Please enter product image url!"),
    desc: yup.string().required("Please enter product description!"),
    price: yup.number().required("Please enter product price!"),
  });
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  return (
    <div className="admin-add-product">
      <h2 className="admin-add-title">Add New Product</h2>
      <form>
        <div className="admin-add-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" {...register("name")} />
          {errors.name && (
            <div className="admin-add-error">{errors.name.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand" {...register("brand")}>
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
          {errors.brand && (
            <div className="admin-add-error">{errors.brand.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input type="text" name="image" id="image" {...register("image")} />
          {errors.image && (
            <div className="admin-add-error">{errors.image.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="desc">Description:</label>
          <textarea name="desc" id="desc" {...register("desc")}></textarea>
          {errors.desc && (
            <div className="admin-add-error">{errors.desc.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" {...register("price")} />
          {errors.price && (
            <div className="admin-add-error">{errors.price.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
