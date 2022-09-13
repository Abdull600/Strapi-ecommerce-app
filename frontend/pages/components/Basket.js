export default function Basket(props) {
  const { cartItems, onAddHandler, onRemoveHandler } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className=" block col-1">
      <h2>cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="clo-1">
              <button onClick={() => onRemoveHandler(item)} className="remove">
                -
              </button>
              <span className="p-1">{item.qty}</span>
              <button onClick={() => onAddHandler(item)} className="add">
                +
              </button>
            </div>
            <div className="col-1 text-right">
              {item.qty} X ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                onClick={() =>
                  alert("Congrats!!. You may now emptyy the cart.")
                }
                className="checkout-btn"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
