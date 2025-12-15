import "./Footer.css";

const socialLinks = [
  { icon: " 🐙", href: "#", label: "GitHub" },
  { icon: "in", href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <p className="footerText">
          Made<span className="footerHeart"></span>by Yumeth © 2025
        </p>

        <div className="socialLinks">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="socialLink"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
