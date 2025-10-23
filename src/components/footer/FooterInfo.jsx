export default function FooterInfo({ faq }) {
      return (
    <div class="faq">
      <p class="footerTitle margin0">AJUDA</p>
      {faq.length > 0 ? (
        <div class="faqContainer">
          {faq.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}