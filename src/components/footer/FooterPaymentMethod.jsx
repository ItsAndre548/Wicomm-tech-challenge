import "./Footer.css";

export default function FooterPaymentMethod({ paymentTitle, icons }) {
  return (
    <div className="payments">
       <p className="footerTitle">{paymentTitle}</p>
      {icons.length > 0 ? (
        <div className="paymentIcons">
          {icons.map((icon, index) => (
            <span className="paymentIcon"  key={index}>
              <img
                src={icon.src}
                width={37}
                height={23}
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
