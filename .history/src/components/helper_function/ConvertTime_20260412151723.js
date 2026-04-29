const convertTime = (time) => {
  const date = new Date(time);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  // Chuyển đổi thành đối tượng Date sau đó lấy phần ngày ISO
  // Cách này xử lý được cả trường hợp date là string từ API trả về
  return new Date(dateString).toISOString().split("T")[0];
};
export { convertTime, formatDate };
