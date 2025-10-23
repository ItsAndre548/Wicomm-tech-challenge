import AddToCartButton from "../AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
     <div className="upperCard">
     {product.discountCoupon ? (
        <p className="discountCard"> <strong>{product.discountCoupon}</strong> OFF</p>
      ) : null}
      {product.launch ? <p className="launch">LANÇAMENTO</p> : null}

     </div>
      <div className="image-container">
        <img className="productShow" src={product.img} alt={product.title} />
        <img
          className="productHidden"
          src={product.imgHover}
          alt={product.title}
        />
      </div>

      <div className="text-container">
        <p>{product.title}</p>
        <svg
          width="62"
          height="11"
          viewBox="0 0 62 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="56.3001"
            cy="5.3"
            r="5.3"
            transform="rotate(90 56.3001 5.3)"
            fill="#433643"
          />
          <circle
            cx="39.3001"
            cy="5.3"
            r="5.3"
            transform="rotate(90 39.3001 5.3)"
            fill="#637C52"
          />
          <circle
            cx="22.3001"
            cy="5.3"
            r="5.3"
            transform="rotate(90 22.3001 5.3)"
            fill="#BF362E"
          />
          <circle
            cx="5.3001"
            cy="5.3"
            r="5.3"
            transform="rotate(90 5.3001 5.3)"
            fill="#7EABE3"
          />
        </svg>
      </div>
      <div className="price-container">
        <p>{product.price}</p>
        <p>{product.discountPrice}</p>
      </div>
        <AddToCartButton />
    </div>
  );
}
