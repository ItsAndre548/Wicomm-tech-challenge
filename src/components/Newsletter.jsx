import React, { useState } from "react";
import "./NewsletterForm.css";

export default function NewsletterForm({ formImage }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      setStatus("success");
      setFormData({ name: "", email: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="newsletterSection">
      <div>
        <img src={formImage} width={505} height={347} alt="" />
      </div>
      <div className="newsletterTitleContainer">
        <p className="newsletterTitle">NEWSLETTER</p>
      </div>
      <div className="newsletterText">
        <p>
          <strong>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</strong>
        </p>
        <p>Seja a primeira a receber lançamentos, novidades e promoções.</p>
      </div>
      <form
        className="newsletter"
        onSubmit={handleSubmit}
        aria-labelledby="newsletter-title"
        noValidate
      >
        <div className="fields">
          <div className="field">
            <label htmlFor="subscriber-name"></label>
            <input
              id="subscriber-name"
              className="form-label"
              name="name"
              type="text"
              placeholder="NOME DO SEU PET"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label htmlFor="subscriber-email"></label>
            <input
              id="subscriber-email"
              className="form-label"
              name="email"
              type="email"
              placeholder="SEU EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
        </div>

        <button type="submit" className="formBTN">
          CADASTRAR
        </button>

        {status === "success" && (
          <p className="form-message success">
            🎉 Inscrição realizada com sucesso!
          </p>
        )}
        {status === "error" && (
          <p className="form-message error">
            ⚠️ Preencha todos os campos corretamente.
          </p>
        )}
      </form>
    </section>
  );
}
