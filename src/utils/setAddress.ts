const setAddress = (data: any) => {
  const address = [
    data.street,
    data.number,
    data.district,
    data.city,
    data.state,
  ];
  return address.join(", ");
};

export default setAddress;
