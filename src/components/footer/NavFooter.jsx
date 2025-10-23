
export default function NavFooter({ footerNavItems }) {
  return (
    <nav class="navFooter">
      {footerNavItems.map((navItem) => (
          <a href={navItem.href} class="navFooterItem">
            {navItem.label}
          </a>

      ))}
    </nav>
  );
}
