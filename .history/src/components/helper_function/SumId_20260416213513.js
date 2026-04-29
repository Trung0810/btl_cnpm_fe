const sumId = (id) => {
  const sum = 0;
  for (let i = 0; i < id.length; i++) {
    if (id[i] >= "0" && id[i] <= "9") {
      sum += Number(id[i]);
    }
  }
  return sum % 10;
};

export default sumId;
