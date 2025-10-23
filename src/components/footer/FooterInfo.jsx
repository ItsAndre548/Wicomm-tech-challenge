export default function FooterInfo({ faq }) {
      return (
    <div className="faq">
      <p className="footerTitle margin0">AJUDA</p>
      {faq.length > 0 ? (
        <div className="faqContainer" >
          {faq.map((item, index) => (
            <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
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