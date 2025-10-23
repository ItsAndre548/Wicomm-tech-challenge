import "./Footer.css";

export default function FooterPaymentMethod({ paymentTitle, icons }) {
  return (
    <div className="payments">
       <p className="footerTitle">{paymentTitle}</p>
      {icons.length > 0 ? (
        <div className="paymentIcons">
          {icons.map((icon, index) => (
            <a href={icon.link}  key={index} target="_blank" rel="noopener noreferrer">
              <img
                src={icon.src}
                width={37}
                height={23}
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
