import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import standardization from "../helper_function/Standardization";
import "./AdminUpdateOrder.css";
import NoficationPopup from "../popup/NoficationPopup";

const AdminUpdateOrder = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    items: yup
      .array()
      .min(1, "You must have at least one item")
      .of(
        yup.object({
          name: yup.string().required("Please enter product name!"),
          quantity: yup
            .number()
            .typeError("Quantity must be a number!")
            .required("Please enter quantity!")
            .min(1, "Quantity must be at least 1!"),
        }),
      ),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        const data = response.data.data;
        reset({
          id: (data && data._id) || "",
          customerName: standardization(data && data.customerName) || "",
          items: (data && data.items) || [],
        });
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:8888/v1/api/orders/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      setStatus("success");
      setTitle(response.data.message);
      setDescription("");
      setShowPopup(true);
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error.response.data.message);
      setStatus("failed");
      setTitle("Update shoes failed!");
      setDescription(error.response.data.message);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const handleShow = () => {
    setShowPopup(false);
    navigate("/admin/order");
  };

  return (
    <div className="admin-update-order">
      <h2 className="admin-update-title">Update Order</h2>
      {loading && <div className="loading"></div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Order ID:</label>
          <input type="text" name="id" id="id" {...register("id")} readOnly />
          {errors.id && <div className="error">{errors.id.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="customer-name">Customer Name:</label>
          <input
            type="text"
            name="customerName"
            id="customer-name"
            {...register("customerName")}
            readOnly
          />
          {errors.customerName && (
            <div className="error">{errors.customerName.message}</div>
          )}
        </div>
        <div className="admin-update-table">
          <label>Order Item Lists:</label>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input {...register(`items.${index}.name`)} readOnly />
                  </td>
                  <td>
                    <input
                      type="number"
                      {...register(`items.${index}.quantity`)}
                    />
                    {errors?.items?.[index]?.quantity && (
                      <div
                        className="error"
                        style={{ paddingTop: "5px", textAlign: "left" }}
                      >
                        {errors.items[index].quantity.message}
                      </div>
                    )}
                  </td>
                  <td>
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {errors.items && <div className="error">{errors.items.message}</div>}
          <button
            onClick={(event) => {
              event.preventDefault();
              append({ name: "", quantity: 1 });
            }}
          >
            Add new Product
          </button>
        </div>
        <div className="admin-update-wrapper">
          <button style={{ pointerEvents: isValid ? "" : "none" }}>
            Update
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/order");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
      {showPopup && (
        <NoficationPopup
          status={status}
          title={title}
          description={description}
          handleShow={handleShow}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default AdminUpdateOrder;
