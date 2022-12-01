export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "product1",
    img: "https://mennatullah123456.github.io/E-Commerce-/imgs/home_new-arrival/pr6.jpg",
    brand: "folu",
    status: "out-stock",
    price: 35,
  },
  {
    id: 2,
    username: "product2",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "out-stock",
    price: 42,
  },
  {
    id: 3,
    username: "product3",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "out-stock",
    price: 45,
  },
  {
    id: 4,
    username: "product0",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "stock",
    price: 16,
  },
  {
    id: 5,
    username: "product4",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "out of stock",
    price: 22,
  },
  {
    id: 6,
    username: "product5",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "stock",
    price: 15,
  },
  {
    id: 7,
    productname: "product7",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "passive",
    price: 44,
  },
  {
    id: 8,
    productname: "product8",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "stock",
    price: 36,
  },
  {
    id: 9,
    productname: "product9",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    brand: "folu",
    status: "in-stock",
    price: 65,
  },
  {
    id: 10,
    productname: "product10",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "stock",
    price: 65,
  },
];
