import ProductCard from "./ProductCard";
import "./CategoriesProduct.css";
import "./ProductCard.css";

export default function CategoriesProduct({ categories, products }) {
  return (
    <section class="categoriesProduct">
      <div class="categoryProduct">
        <div class="categorie">
          <div class="sphere"></div>
          <div dangerouslySetInnerHTML={{ __html: categories }} />
          <div class="categoriesButton">
            <button>VER TUDO</button>
          </div>
        </div>
        <div class="categoriesProductContainer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
