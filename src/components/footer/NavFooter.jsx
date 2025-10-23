
export default function NavFooter({ footerNavItems }) {
  return (
    <nav className="navFooter">
      {footerNavItems.map((navItem, index) => (
          <a key={index} href={navItem.href} className="navFooterItem">
            {navItem.label}
          </a>

      ))}
    </nav>
  );
}
