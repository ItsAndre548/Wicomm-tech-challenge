export default function CartButton({ cartIcon }) {
  return (
    <div className="cartContainer">
      <button>
        <img src={cartIcon} alt="cart-Icon" width={18} height={18} />
      </button>
    </div>
  );
}
