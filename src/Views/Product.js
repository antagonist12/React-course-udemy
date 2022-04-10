import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  //* nanti urlnya berbuah berdasarkan parameter url ( ini biar dinamis )
  const { id } = useParams();

  const url = `https://5f7991bde402340016f931cb.mockapi.io/Products/${id}`;

  //*   sekarang mau buat loading, pada saat awal fetching ( ini keadaan default)
  // const [getProduct, setProduct] = useState({
  //   loading: false,
  //   data: null,
  //   error: false,
  // });

  //? Sekarang pemanggilannya menggunakan react custom hook
  let product = useAxiosGet(url);

  //  useeffect
  // useEffect(() => {
  //*   ini sebelum request
  //   setProduct({
  //     loading: true,
  //     data: null,
  //     error: false,
  //   });
  //* ini requestnya
  //   axios
  //     .get(url)
  //     .then((Response) => {
  //       setProduct({
  //         loading: false,
  //         data: Response.data,
  //         error: false,
  //       });
  //     })
  //     .catch(() => {
  //       setProduct({
  //         loading: false,
  //         data: null,
  //         error: true,
  //       });
  //     });
  // }, [url]);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  //! kenapa begini untuk handle errornya, karena dari mockApi ngebalikin errornya bukan JSON object
  //! dan cmn string makannya gk bs diambil

  if (product.error) {
    content = <p>There was an error please try again later.</p>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img
            className="w-1/6 mb-3"
            src={product.data.image}
            alt={product.data.name}
          />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
