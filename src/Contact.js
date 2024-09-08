// import styled from "styled-components";
import { ContactStyle } from "./components/componentStyle";

const Contact = () => {


  return <ContactStyle>
    <h2 className="common-heading">About Page</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1208.026422184073!2d67.22077795429543!3d24.86422698069597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb331018d9e03af%3A0x1c39dfa9a5f2e7e6!2sJamia%20masjid%20Fatima%20tuz%20Zahra%20Samar%20garden%20pH%202%20Qaida%20abad%20landhi!5e0!3m2!1sen!2s!4v1724642494577!5m2!1sen!2s"
      title="Adress Of store"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullscreen="" loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xanwvyyr" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />

          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea name="Meassage" placeholder="Enter your message here" cols="30" rows="10" autoComplete="off" ></textarea>
          <input type="submit" value='Send' />
        </form>
      </div>
    </div>
  </ContactStyle>;
};


export default Contact;
