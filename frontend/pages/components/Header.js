export default function Header(props) {
  //destructure the cart items
  const { countCartItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="#">
          <img
            className="logo"
            src="https://api.logo.com/api/v2/images?logo=logo_648fbafa-a052-4d87-9ca2-83d742ceb83e&format=webp&margins=0&quality=60&width=500&background=transparent&u=1660217525"
            alt=""
          />
        </a>
      </div>
      <div>
        {/* <!--Cart is displayed here --> */}
        {/* <!--Takes count of products added into the cart from the props passed--> */}
        <a href="#">
          Cart
          {countCartItems ? (
            <button className="cart-badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#">Sign In</a>
      </div>
    </div>
  );
}
