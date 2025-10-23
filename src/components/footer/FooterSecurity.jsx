import "./Footer.css";

export default function FooterSecurity({ certificateTitle, securityIcons }) {
  return (
    <div className="security">
      <p className="footerTitle">{certificateTitle}</p>
      {securityIcons.length > 0 ? (
        <div className="securityIconsContainer">
          {securityIcons.map((icon, index) => (
            <span
              className="securityIcon"
              key={index}
            >
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
        <p>No security icons available.</p>
      )}
    </div>
  );
}
