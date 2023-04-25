const products = [
  {
    id: "1",
    name: "Camiseta Argentina",
    price: 1000,
    category: "deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682459535/HE6323_1_jr41uk.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "2",
    name: "Camiseta Argentina suplente",
    price: 1000,
    category: "deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682459535/HE6323_1_jr41uk.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "3",
    name: "Camiseta Boca",
    price: 1000,
    category: "deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682459535/HE6323_1_jr41uk.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "4",
    name: "Camiseta River",
    price: 1000,
    category: "deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682459535/HE6323_1_jr41uk.webp",
    stock: 10,
    description: "Descripcion",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
