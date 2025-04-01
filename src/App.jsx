import useProductos from "./hooks/useProductos";

function App() {
  const productos = useProductos();

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(p => (
          <li key={p._id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;