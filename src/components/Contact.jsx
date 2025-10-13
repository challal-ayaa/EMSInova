import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    surname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const PUBLIC_KEY = "RY_9mvNRSMb8GnYnP";
      const SERVICE_ID = "service_b6xf5hl";
      const TEMPLATE_ID = "template_qbqgtcb";

      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        from_name: formData.surname,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "emsinova.club@gmail.com",
        reply_to: formData.email,
        current_date: new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log("✅ Email envoyé avec succès!", response);
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          surname: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitStatus(null);
        setShowForm(false);
      }, 3000);
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contactez-Nous</h2>
      <p className="section-description">
        Pour toute question ou proposition de collaboration, n’hésitez pas à nous contacter.
      </p>

      {!showForm ? (
        <div className="contact-button-container">
          <button
            className="contact-trigger-button"
            onClick={() => setShowForm(true)}
          >
            Contactez-Nous
          </button>
        </div>
      ) : (
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="surname">Surnom *</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  placeholder="Votre surnom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Objet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message..."
                rows="6"
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className="success-message">
                Message envoyé avec succès ! ✓
              </div>
            )}

            {submitStatus === "error" && (
              <div className="error-message">
                Une erreur s'est produite. Veuillez réessayer.
              </div>
            )}

            <div className="form-buttons">
              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowForm(false)}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
