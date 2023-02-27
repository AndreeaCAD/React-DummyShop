export const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

export const getPaginatedProducts = async (pageNo, pageQty = 10) => {
  const skip = pageNo * pageQty;
  const res = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${pageQty}`
  );
  const data = await res.json();
  return data;
};

export const getAllUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
};

export const getPaginatedComments = async (pageNo, pageQty = 10) => {
  const skip = pageNo * pageQty;
  const res = await fetch(
    `https://dummyjson.com/comments?skip=${skip}&limit=${pageQty}`
  );
  const data = await res.json();
  return data;
};
