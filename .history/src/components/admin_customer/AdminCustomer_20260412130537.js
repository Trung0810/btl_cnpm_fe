import React, { useEffect, useState } from "react";
import "./AdminCustomer.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminCustomer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8888/v1/api/customers",
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleShow = (id) => {
    setSelectedId(id);
    setShowPopup(true);
    setTitle("Confirm deletion of this product?");
    setDescription("This action cannot be undone.");
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.delete(
        `http://localhost:8888/v1/api/shoes/${selectedId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("🚀 ~ handleDelete ~ response:", response);

      const newData = [...data];
      setData(newData.filter((item) => item._id !== selectedId));
    } catch (error) {
      console.log("🚀 ~ handleDelete ~ error:", error.response.data.message);
    } finally {
      setShowPopup(false);
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="admin-customer">
      <div className="admin-customer-wrapper">
        <h2 className="admin-customer-title">Customer Management</h2>
        <h3 className="admin-customer-desc">Customer Lists</h3>
        {loading && <div className="loading"></div>}
        <table className="admin-customer-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Total Spending</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <tr>
                  <td>KH01</td>
                  <td>Nguyen Duc Trung</td>
                  <td>Ha Noi</td>
                  <td>0343645587</td>
                  <td>nguyenductrung0810@gmail.com</td>
                  <td>6000000d</td>
                  <td>
                    <div>
                      <button className="admin-order-update">Update</button>
                      <button className="admin-order-delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomer;
