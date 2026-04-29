import React from "react";

const OrderList = () => {
  return (
    <div>
      <table className="admin-order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product List</th>
            <th>Order Date</th>
            <th>Update Date</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{standardization(item.customerName)}</td>
                <td>
                  {item.items.map((element) => (
                    <div key={element.shoesId} className="admin-order-list">
                      <p>{element.name}</p>
                      <p>Quantity: {element.quantity}</p>
                    </div>
                  ))}
                </td>
                <td>{convertTime(item.createdAt)}</td>
                <td>{convertTime(item.updatedAt)}</td>
                <td>{item.total}</td>
                <td>
                  <div>
                    <button
                      className="admin-update"
                      onClick={() =>
                        navigate(`/admin/update-order/${item._id}`)
                      }
                    >
                      Update
                    </button>
                    <button
                      className="admin-delete"
                      onClick={() => handleShow(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
