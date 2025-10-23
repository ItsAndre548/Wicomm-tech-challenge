import ProductCard from "./ProductCard";
import "./CategoriesProduct.css";
import "./ProductCard.css";

export default function CategoriesProduct({ categories, products }) {
  return (
    <section className="categoriesProduct">
      <div className="categoryProduct">
        <div className="categorie">
          <div className="sphere"></div>
          <div dangerouslySetInnerHTML={{ __html: categories }} />
          <div className="categoriesButton">
            <button>VER TUDO</button>
          </div>
        </div>
        <div className="categoriesProductContainer">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
