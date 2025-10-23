import "./Footer.css";

export default function FooterPaymentMethod({ paymentTitle, icons }) {
  return (
    <div class="payments">
       <p class="footerTitle">{paymentTitle}</p>
      {icons.length > 0 ? (
        <div class="paymentIcons">
          {icons.map((icon, index) => (
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img
                key={index}
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
