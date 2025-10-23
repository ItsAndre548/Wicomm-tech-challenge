import "./Footer.css";

export default function FooterSecurity({ certificateTitle, securityIcons }) {
  return (
    <div className="security">
        <p className="footerTitle">{certificateTitle}</p>
      {securityIcons.length > 0 ? (
        <div className="securityIconsContainer">
          {securityIcons.map((icon, index) => (
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
