import "./Footer.css";

export default function FooterSecurity({ certificateTitle, securityIcons }) {
  return (
    <div class="security">
        <p class="footerTitle">{certificateTitle}</p>
      {securityIcons.length > 0 ? (
        <div class="securityIconsContainer">
          {securityIcons.map((icon, index) => (
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
