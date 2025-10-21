export default function CartButton({ cartIcon }) {
  return (
    <div class="cartContainer">
      <button>
        <img src={cartIcon} alt="cart-Icon" width={18} height={18} />
      </button>
    </div>
  );
}
