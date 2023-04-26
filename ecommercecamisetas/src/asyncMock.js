const products = [
  {
    id: "1",
    name: "Camiseta Argentina",
    price: 2000,
    category: "Deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467272/camiseta_argentina_gklcbb.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "2",
    name: "Camiseta Argentina suplente",
    price: 1000,
    category: "Deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467111/camiseta_argentina_suplente_py0xq8.jpg",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "3",
    name: "Camiseta Boca",
    price: 500,
    category: "Deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682459535/HE6323_1_jr41uk.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "4",
    name: "Camiseta River",
    price: 500,
    category: "Deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467112/river_joipd4.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "5",
    name: "Camiseta Independiente",
    price: 500,
    category: "Deportivo",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467111/independiente_zbos22.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "6",
    name: "Camiseta Blanca",
    price: 200,
    category: "Casual",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467112/blanca_aofs9m.webp",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "7",
    name: "Camiseta Negra",
    price: 200,
    category: "Casual",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467111/remera_negra_wr0v73.jpg",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "8",
    name: "Camiseta Amarilla",
    price: 300,
    category: "Casual",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467112/remera_amarilla_rs7ibd.jpg",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "9",
    name: "Camiseta naranja",
    price: 300,
    category: "Casual",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467112/camiseta_naranja_tovui6.jpg",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "10",
    name: "Camiseta verde",
    price: 300,
    category: "Casual",
    img: "https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682467111/remera_verde_i4z47r.jpg",
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

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
