import Products from "./Products";
export default function Main(props) {
  const { cartItems, products, onAddHandler, onRemoveHandler } = props;
  //change product.id to product._id after fetching data from strapi
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            onAddHandler={onAddHandler}
            onRemoveHandler={onRemoveHandler}
          />
        ))}
      </div>
    </div>
  );
}
