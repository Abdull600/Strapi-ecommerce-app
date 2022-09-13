export default function Products(props) {
  const { item, product, onAddHandler, onRemoveHandler } = props;
  return (
    <section className="product">
      <img src={product.image} alt={product.name} />
      <section className="product-details">
        <h3>{product.name}</h3>
        <div>${product.price}</div>
      </section>
      <div className="btn-wrapper">
        {item ? (
          <div>
            {/* <!--Handles decreament of product from the cart--> */}
            <button onClick={() => onRemoveHandler(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            {/* <!--Handles increament of product to cart--> */}
            <button onClick={() => onAddHandler(item)} className="add">
              +
            </button>
          </div>
        ) : (
          // <!--Handles adding product to cart if it doesnot exist in the cart-->
          <button onClick={() => onAddHandler(product)} className="add-btn">
            Add to Cart
          </button>
        )}
      </div>
    </section>
  );
}
