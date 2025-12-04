function Footer() {
   const footerStyle = {
       textAlign: "center",
       padding: "20px 0",
       color: "#999",
       backgroundColor: "#2c3e50",
       marginTop: "30px",
   };
   
   return (
       <footer style={footerStyle}>
           <p style={{ margin: 0, fontSize: "14px" }}>© 2025 The Blog</p>
       </footer>
   );
}

export default Footer;