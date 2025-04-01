import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/productos";

export default function useProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setProductos(res.data));
  }, []);

  return productos;
}