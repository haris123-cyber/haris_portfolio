import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Sending...');

    const bodyData = {
      access_key: '9d053d26-6fe0-43dc-9fe2-9ad27e863c5a',
      ...formData,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        setStatus('Sent Successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to Send');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error Sending');
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setStatus('Send Message');
        setIsSent(false);
      }, 3000);
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <h3 style={{ color: 'white', fontSize: '1.8rem' }}>Let's Talk</h3>
          <p style={{ color: '#999' }}>
            I'm open to discussing web development projects or partnership opportunities.
          </p>

          <div className="contact-item">
            <div className="icon-box">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <span style={{ display: 'block', color: '#777', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Email
              </span>
              <span style={{ color: 'white', fontSize: '1.1rem' }}>harismkadr@gmail.com</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <span style={{ display: 'block', color: '#777', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Phone
              </span>
              <span style={{ color: 'white', fontSize: '1.1rem' }}>+91 9061274433</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <span style={{ display: 'block', color: '#777', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Location
              </span>
              <span style={{ color: 'white', fontSize: '1.1rem' }}>Calicut, Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
              placeholder="Subject"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              opacity: isSending ? 0.7 : 1,
              background: isSent ? '#ffffff' : '',
              color: isSent ? '#121212' : '',
              borderColor: isSent ? '#ffffff' : '',
              transition: 'all 0.3s ease',
            }}
            disabled={isSending}
          >
            {status}
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
