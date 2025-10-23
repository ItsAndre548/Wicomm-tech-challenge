import './CategoriesNavigation.css'

export default function CategoriesNavigation({ categories }) {
    return(
        <section className="categorieNavigationSection">
            <p className="categoriesNavigationTitle">NAVEGUE PELAS CATEGORIAS</p>
            <div className="categorieNavigation">
                {categories.map((categorie, index)=>
            <div className="categorieNav" key={index}>
                <a className="categorieNavLink" href={categorie.link}>
                    <img src={categorie.icon} width={categorie.width} height={categorie.height} alt={categorie.name} />
                <p>{categorie.name}</p>
                </a>
            </div>
            )}
            <a className="categorieNav categorieNavLink" href="#">VER TUDO</a>
            </div>
        </section>
    )
}