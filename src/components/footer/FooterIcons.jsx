import "./Footer.css";

export default function FooterIcons({ icons }) {
  return (
    <div className="social">
      <p className="footerTitle">REDES SOCIAIS</p>
      {icons.length > 0 ? (
        <div className="socialIcons">
          {icons.map((icon, index) => (
            <span key={index}>
              <img
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.src}
              />
            </span>
          ))}
        </div>
      ) : (
        <p>No payment icons available.</p>
      )}
    </div>
  );
}
