const products = [
  {
    id: "1",
    name: "Camiseta Argentina",
    price: 1000,
    category: "deportivo",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bocashop.com.ar%2Fhe6324-camiseta-titular-boca-jrs-22-23%2Fp&psig=AOvVaw1lCv0FiRP09n6eDSMwqtKI&ust=1682478596232000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCuhKuHxP4CFQAAAAAdAAAAABAH",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "2",
    name: "Camiseta Argentina suplente",
    price: 1000,
    category: "deportivo",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bocashop.com.ar%2Fhe6324-camiseta-titular-boca-jrs-22-23%2Fp&psig=AOvVaw1lCv0FiRP09n6eDSMwqtKI&ust=1682478596232000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCuhKuHxP4CFQAAAAAdAAAAABAH",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "3",
    name: "Camiseta Boca",
    price: 1000,
    category: "deportivo",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bocashop.com.ar%2Fhe6324-camiseta-titular-boca-jrs-22-23%2Fp&psig=AOvVaw1lCv0FiRP09n6eDSMwqtKI&ust=1682478596232000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCuhKuHxP4CFQAAAAAdAAAAABAH",
    stock: 10,
    description: "Descripcion",
  },
  {
    id: "4",
    name: "Camiseta River",
    price: 1000,
    category: "deportivo",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bocashop.com.ar%2Fhe6324-camiseta-titular-boca-jrs-22-23%2Fp&psig=AOvVaw1lCv0FiRP09n6eDSMwqtKI&ust=1682478596232000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCuhKuHxP4CFQAAAAAdAAAAABAH",
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
