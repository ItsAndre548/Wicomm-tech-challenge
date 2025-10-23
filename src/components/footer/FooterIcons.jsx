import "./Footer.css";

export default function FooterIcons({ icons }) {
  return (
    <div className="social">
      <p className="footerTitle">REDES SOCIAIS</p>
      {icons.length > 0 ? (
        <div className="socialIcons">
          {icons.map((icon, index) => (
            <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
              <img
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
