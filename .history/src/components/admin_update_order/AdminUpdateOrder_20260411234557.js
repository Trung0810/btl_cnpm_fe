import React, { useEffect, useState } from "react";
import "./AdminUpdateOrder.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";

const AdminUpdateOrder = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Please enter product name!"),
    quantity: yup
      .string()
      .required("Please enter quantity!")
      .min(0, "Invalid quantity!"),
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
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/orders/${id}`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        const data = response.data.data;
        reset({
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
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Order ID:</label>
          <input type="text" name="id" id="id" {...register("id")} readOnly />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="customerName">Customer ID:</label>
          <input
            type="text"
            name="customerName"
            id="customerName"
            {...register("customerName")}
            readOnly
          />
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
                    <input {...register(`items.${index}.name`)} />
                  </td>

                  <td>
                    <input
                      type="number"
                      {...register(`items.${index}.quantity`)}
                    />
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
          <button>Add new Product</button>
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateOrder;
