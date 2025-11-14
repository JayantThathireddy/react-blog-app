import { useState } from "react";


function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your message, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const buttonStyle = {
    backgroundColor: "#4a76cf",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  };


  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input 
          name="email" 
          type="email"
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={form.message} 
          onChange={handleChange}
          required
          rows="6"
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}


export default ContactPage;