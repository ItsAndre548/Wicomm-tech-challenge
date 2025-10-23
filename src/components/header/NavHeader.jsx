export default function NavHeader({ navItems }) {
  return (
    <nav className="navItems">
      {navItems.map((navItem, index) => (
        <div key={index}>
          <a href={navItem.href} className="navItem">
            {navItem.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
