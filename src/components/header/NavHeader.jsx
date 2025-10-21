export default function NavHeader({ navItems }) {
  return (
    <nav class="navItems">
      {navItems.map((navItem) => (
        <div key={navItem.index}>
          <a href={navItem.href} class="navItem">
            {navItem.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
