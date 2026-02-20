import { FaTiktok, FaInstagram, FaAmazon } from 'react-icons/fa'
import { HiOutlineGlobeAlt, HiOutlineCalendarDays } from 'react-icons/hi2'
import './App.css'

const PROFILE = {
  name: 'Bea Panneflek Hair',
  bio: 'Professional Hairstylist | Specialized in Leave-In Color | Miramar, PR',
  avatar: '/profile.jpg',
}

const LINKS = [
  {
    icon: <HiOutlineGlobeAlt />,
    label: 'BECA Hair & Co Website',
    url: 'https://www.becahaircompany.com/',
  },
  {
    icon: <HiOutlineCalendarDays />,
    label: 'Appointments',
    url: 'https://www.becahaircompany.com/appointments',
  },
  {
    icon: <FaAmazon />,
    label: 'My Amazon Page',
    url: 'https://www.amazon.com/shop/beapanneflekhair?ref_=cm_sw_r_apin_aipsfshop_KX0FAV818NHATVSQM54V&language=en-US',
  },
]

const SOCIALS = [
  {
    icon: <FaTiktok />,
    url: 'https://www.tiktok.com/@beapanneflek?_r=1&_t=ZP-944BY4MRZy3',
    label: 'TikTok',
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/beapanneflekhair?igsh=MXJneGxpcWwzMG11NA%3D%3D&utm_source=qr',
    label: 'Instagram',
  },
]

function App() {
  return (
    <main className="linktree">
      <article className="card">
        <header className="profile">
          <div className="avatar-wrapper">
            <img
              src={PROFILE.avatar}
              alt={`${PROFILE.name} — Hair stylist at BECA Hair & Co, Puerto Rico`}
              className="avatar"
              width="120"
              height="120"
            />
          </div>
          <h1 className="name">{PROFILE.name}</h1>
          <p className="bio">{PROFILE.bio}</p>
        </header>

        <nav className="links" aria-label="Links">
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <span className="link-icon" aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="socials" aria-label="Social media">
          {SOCIALS.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </article>
    </main>
  )
}

export default App
