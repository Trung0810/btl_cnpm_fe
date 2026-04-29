import React from "react";
import "./AdminUpdateOrder.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AdminUpdateOrder = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yupResolver.object({
    name: yup.string().required("Please enter product name!"),
    brand: yup.string().required("Please select product brand!"),
    image: yup.string().required("Please enter product image url!"),
    description: yup.string().required("Please enter product description!"),
    price: yup
      .number()
      .required("Please enter product price!")
      .min(0, "Invalid price!"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes/${id}`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        const data = response.data.data;
        reset({
          id: (data && data._id) || "",
          name: (data && data.name) || "",
          brand: (data && data.brand) || "",
          image: (data && data.image) || "",
          description: (data && data.description) || "",
          price: (data && data.price) || "",
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
        `http://localhost:8888/v1/api/shoes/${id}`,
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
    navigate("/admin/product");
  };

  return (
    <div className="admin-update-order">
      <h2 className="admin-update-title">Update Order</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Order ID:</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="customerName">Customer ID:</label>
          <input type="text" name="customerName" id="customerName" />
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
              <tr>
                <td>
                  <input type="text" name="name" />
                </td>
                <td>
                  <input type="number" name="quantity" />
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
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
