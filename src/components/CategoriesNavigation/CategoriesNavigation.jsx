import './CategoriesNavigation.css'

export default function CategoriesNavigation({ categories }) {
    return(
        <section class="categorieNavigationSection">
            <p class="categoriesNavigationTitle">NAVEGUE PELAS CATEGORIAS</p>
            <div class="categorieNavigation">
                {categories.map((categorie)=>
            <div class="categorieNav">
                <a class="categorieNavLink" href={categorie.link}>
                    <img src={categorie.icon} width={categorie.width} height={categorie.height} alt={categorie.name} />
                <p>{categorie.name}</p>
                </a>
            </div>
            )}
            <a class="categorieNav categorieNavLink" href="#">VER TUDO</a>
            </div>
        </section>
    )
}