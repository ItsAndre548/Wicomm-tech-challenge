import "./Footer.css";

export default function FooterIcons({ icons }) {
  return (
    <div class="social">
      <p class="footerTitle">REDES SOCIAIS</p>
      {icons.length > 0 ? (
        <div class="socialIcons">
          {icons.map((icon, index) => (
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img
                key={index}
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.src}
              />
            </a>
          ))}
        </div>
      ) : (
        <p>No payment icons available.</p>
      )}
    </div>
  );
}
