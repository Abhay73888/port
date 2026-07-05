const Navbar = () => {
  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Tech', href: '#tech' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '1rem 1.5rem', background: 'rgba(5, 5, 10, 0.9)', backdropFilter: 'blur(12px)' }}>
      <nav style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <a href="#hero" style={{ color: '#f5f5f7', textDecoration: 'none', fontWeight: 700 }}>AM</a>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {links.map((link) => (
            <a key={link.label} href={link.href} style={{ color: '#a1a1b0', textDecoration: 'none', fontSize: '0.95rem' }}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
