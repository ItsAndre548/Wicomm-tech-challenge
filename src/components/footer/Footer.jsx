import NavFooter from "./NavFooter";
import FooterIcons from "./FooterIcons";
import "./Footer.css";
import FooterInfo from "./FooterInfo";
import FooterSecurity from "./FooterSecurity";
import FooterPaymentMethod from "./FooterPaymentMethod";
import FooterContact from "./FooterContact";
import NewsLetter from "../Newsletter";

export default function Footer({
  logoFooter,
  footerNavItems,
  paymentsIcons,
  securityIcons,
  Socials,
  faq,
  certificate,
  paymentTitle,
  contactNumber,
  contactEmail,
  formImage,
}) {
  return (
    <footer>
      <NewsLetter formImage={formImage} />
      <div className="parent">
        <div className="div1">
          <img
            src={logoFooter}
            width={75}
            height={101}
            alt="Footer Logo"
          />
        </div>
        <div className="div2">
          <NavFooter footerNavItems={footerNavItems} />
          <div className="certificateandpayments">
              <FooterPaymentMethod paymentTitle={paymentTitle} icons={paymentsIcons} />
              <FooterSecurity certificateTitle={certificate} securityIcons={securityIcons} />
          </div>
        </div>
        <div className="div3">
          <FooterInfo faq={faq} />
        </div>
        <div className="div4">
            <FooterContact contactNumber={contactNumber} contactemail={contactEmail} />
             <FooterIcons icons={Socials} />
        </div>
      </div>
      <div className="copyrightBar">
        <p>© 2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
        <p>
          GAT LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras |
          Cataguases - MG | CEP 36774-550
        </p>
      </div>
    </footer>
  );
}
