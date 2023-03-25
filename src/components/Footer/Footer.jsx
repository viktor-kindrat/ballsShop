import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

function Footer(){
    const socialMediaLinks = [
        {
          icon: faFacebook,
          url: 'https://www.facebook.com/abibas',
        },
        {
          icon: faInstagram,
          url: 'https://www.instagram.com/abibas',
        },
        {
          icon: faTwitter,
          url: 'https://twitter.com/abibas',
        },
      ];
    return (
        <footer className={`Footer`}>
      <nav className="Footer-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
      </nav>

      <div className="Footer-social-media">
        <ul>
          {socialMediaLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="Footer-company">
        <p>&copy; {new Date().getFullYear()} Abibas</p>
      </div>
    </footer>
    )
}

export default Footer