import "./products/CategoriesProduct.css";

export default function AddToCartButton() {
  return (
    <button class="addToCartButton">
      <span>Adicionar ao carrinho </span>
      <img
        src="/Assets/addToCart.svg"
        alt="adicionar ao carrinho"
        width={16}
        height={16}
      />
    </button>
  );
}
