export default function HeaderSearch({ searchIcon }) {
  return (
    <div class="searchInput">
      <img src={searchIcon} alt="Search-button" width={16} height={16} />
      <input id="search" type="text" placeholder="digite aqui o que procura" />
    </div>
  );
}
