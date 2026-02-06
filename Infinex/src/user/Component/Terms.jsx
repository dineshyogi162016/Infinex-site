import React, { useState, useEffect } from 'react';
import { ChevronUp, FileText, Scale, Shield, Users, Globe, AlertTriangle, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigationItems = [
    { id: 'acceptance', label: 'Acceptance of Terms', icon: FileText },
    { id: 'definitions', label: 'Definitions', icon: Globe },
    { id: 'license', label: 'Use License', icon: Scale },
    { id: 'accounts', label: 'User Accounts', icon: Users },
    { id: 'content', label: 'User Content', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'prohibited', label: 'Prohibited Uses', icon: AlertTriangle },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen", Ubuntu, Cantarell, sans-serif'
    },
    header: {
      background: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    headerIcon: {
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      color: 'white',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #1e293b, #475569)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0
    },
    headerSubtitle: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
      margin: 0
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    statusBadge: {
      background: '#dbeafe',
      color: '#1e40af',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    mainContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '2rem 1rem'
    },
    mainContent: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start'
    },
    sidebar: {
      width: '320px',
      position: 'sticky',
      top: '120px',
      background: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      overflow: 'hidden'
    },
    sidebarHeader: {
      padding: '1.5rem',
      borderBottom: '1px solid #e2e8f0'
    },
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: 0
    },
    navList: {
      listStyle: 'none',
      padding: '0.5rem',
      margin: 0
    },
    navItem: {
      marginBottom: '0.25rem'
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      color: '#64748b',
      fontWeight: '500',
      fontSize: '0.875rem',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
      width: '100%',
      textAlign: 'left'
    },
    navLinkHover: {
      background: '#f8fafc',
      color: '#1e293b'
    },
    navLinkActive: {
      background: '#eff6ff',
      color: '#1d4ed8',
      borderLeft: '4px solid #2563eb'
    },
    content: {
      flex: 1,
      background: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      overflow: 'hidden'
    },
    contentInner: {
      padding: '2rem'
    },
    section: {
      marginBottom: '3rem'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1e293b',
      margin: 0
    },
    prose: {
      lineHeight: '1.7'
    },
    proseP: {
      marginBottom: '1rem',
      color: '#374151'
    },
    proseH4: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: '1.5rem 0 1rem 0'
    },
    proseUl: {
      listStyle: 'none',
      paddingLeft: 0,
      margin: '1rem 0'
    },
    proseLi: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    alert: {
      padding: '1rem',
      borderRadius: '0.5rem',
      margin: '1rem 0'
    },
    alertBlue: {
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      color: '#1e40af'
    },
    alertRed: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626'
    },
    alertGreen: {
      background: '#f0fdf4',
      border: '1px solid #bbf7d0',
      color: '#166534'
    },
    alertOrange: {
      background: '#fffbeb',
      border: '1px solid #fed7aa',
      color: '#c2410c'
    },
    grid: {
      display: 'grid',
      gap: '1rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    card: {
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0'
    },
    cardSlate: {
      background: '#f8fafc'
    },
    cardGreen: {
      background: '#f0fdf4',
      borderColor: '#bbf7d0'
    },
    cardOrange: {
      background: '#fffbeb',
      borderColor: '#fed7aa'
    },
    cardRed: {
      background: '#fef2f2',
      borderColor: '#fecaca',
      textAlign: 'center'
    },
    cardTitle: {
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0'
    },
    cardText: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: 0
    },
    btn: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      border: 'none'
    },
    btnBlue: {
      background: '#2563eb',
      color: 'white'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    contactLabel: {
      fontWeight: '500',
      color: '#1e293b',
      margin: 0
    },
    contactValue: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: 0
    },
    scrollTop: {
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      background: '#2563eb',
      color: 'white',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      display: showScrollTop ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center'
    },
    warningEmoji: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem'
    },
    // Responsive styles
    '@media (max-width: 1024px)': {
      mainContent: {
        flexDirection: 'column'
      },
      sidebar: {
        width: '100%',
        position: 'static'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.headerIcon}>
              <Scale size={24} />
            </div>
            <div>
              <h1 style={styles.headerTitle}>Terms & Conditions</h1>
              <p style={styles.headerSubtitle}>Last updated: January 2025</p>
            </div>
          </div>
          <div style={styles.headerRight}>
            <span style={{color: '#64748b', fontSize: '0.875rem'}}>Effective Date</span>
            <span style={styles.statusBadge}>Active</span>
          </div>
        </div>
      </header>

      <div style={styles.mainContainer}>
        <div style={styles.mainContent}>
          {/* Navigation Sidebar */}
          <aside style={styles.sidebar}>
            <div style={styles.sidebarHeader}>
              <h2 style={styles.sidebarTitle}>
                <FileText size={20} />
                Quick Navigation
              </h2>
            </div>
            <ul style={styles.navList}>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} style={styles.navItem}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        ...styles.navLink,
                        ...(isActive ? styles.navLinkActive : {})
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          Object.assign(e.target.style, styles.navLinkHover);
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#64748b';
                        }
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Main Content */}
          <main style={styles.content}>
            <div style={styles.contentInner}>
              
              {/* Acceptance of Terms */}
              <section id="acceptance" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <FileText size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>By accessing and using this website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you should not use this Service.</p>
                  <div style={{...styles.alert, ...styles.alertBlue}}>
                    <p style={{margin: 0}}><strong>Important:</strong> These terms constitute a legally binding agreement between you and our company.</p>
                  </div>
                </div>
              </section>

              {/* Definitions */}
              <section id="definitions" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Globe size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>2. Definitions</h2>
                </div>
                <div style={{...styles.grid, ...styles.gridCols2}}>
                  {[
                    { term: 'Company', def: 'Refers to [Your Company Name]' },
                    { term: 'User/You', def: 'Any individual or entity using our Service' },
                    { term: 'Content', def: 'All text, data, information, software, graphics, or other materials' },
                    { term: 'Service', def: 'Our website and all related services' }
                  ].map((item, index) => (
                    <div key={index} style={{...styles.card, ...styles.cardSlate}}>
                      <h3 style={styles.cardTitle}>"{item.term}"</h3>
                      <p style={styles.cardText}>{item.def}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Use License */}
              <section id="license" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Scale size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>3. Use License</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
                  <h4 style={styles.proseH4}>Under this license you may not:</h4>
                  <ul style={styles.proseUl}>
                    {[
                      'Modify or copy the materials',
                      'Use materials for commercial purposes or public display',
                      'Attempt to reverse engineer any software',
                      'Remove copyright or proprietary notations'
                    ].map((item, index) => (
                      <li key={index} style={styles.proseLi}>
                        <span style={{color: '#dc2626', marginTop: '0.125rem'}}>×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* User Accounts */}
              <section id="accounts" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Users size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>4. User Accounts</h2>
                </div>
                <div style={{...styles.grid, ...styles.gridCols2}}>
                  <div style={{...styles.card, ...styles.cardGreen}}>
                    <h4 style={{...styles.cardTitle, color: '#166534'}}>Account Creation</h4>
                    <ul style={{...styles.proseUl, margin: 0}}>
                      {[
                        'Provide accurate information',
                        'Maintain credential confidentiality',
                        'Take responsibility for all activities',
                        'Report unauthorized use immediately'
                      ].map((item, index) => (
                        <li key={index} style={{...styles.cardText, color: '#166534', display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{...styles.card, ...styles.cardOrange}}>
                    <h4 style={{...styles.cardTitle, color: '#c2410c'}}>Account Termination</h4>
                    <p style={{...styles.cardText, color: '#c2410c'}}>We reserve the right to terminate or suspend accounts for violations of these terms or harmful conduct.</p>
                  </div>
                </div>
              </section>

              {/* User Content */}
              <section id="content" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <FileText size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>5. User Content</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>You retain ownership of content you submit, but grant us a license to use it in connection with our Service.</p>
                  <div style={{...styles.alert, ...styles.alertRed}}>
                    <h4 style={{...styles.proseH4, color: '#dc2626', margin: '0 0 0.75rem 0'}}>Prohibited Content</h4>
                    <div style={{...styles.grid, ...styles.gridCols2, gap: '0.5rem'}}>
                      {[
                        'Illegal or harmful content',
                        'Copyright infringement',
                        'Malicious code or viruses',
                        'Privacy violations',
                        'Spam or commercial content',
                        'Abusive or threatening material'
                      ].map((item, index) => (
                        <div key={index} style={{...styles.cardText, color: '#dc2626'}}>• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy Policy */}
              <section id="privacy" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Shield size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>6. Privacy Policy</h2>
                </div>
                <div style={{...styles.alert, ...styles.alertBlue}}>
                  <p style={{marginBottom: '1rem'}}>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service.</p>
                  <button 
                    style={{...styles.btn, ...styles.btnBlue}}
                    onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.background = '#2563eb'}
                  >
                    View Privacy Policy
                  </button>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section id="prohibited" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <AlertTriangle size={24} color="#dc2626" />
                  <h2 style={styles.sectionTitle}>7. Prohibited Uses</h2>
                </div>
                <div style={{...styles.grid, ...styles.gridCols3}}>
                  {[
                    'Unlawful activities',
                    'Violating regulations',
                    'IP infringement',
                    'Harassment or abuse',
                    'False information',
                    'Malicious code',
                    'Spam or phishing',
                    'Security circumvention',
                    'Immoral purposes'
                  ].map((item, index) => (
                    <div key={index} style={{...styles.card, ...styles.cardRed}}>
                      <div style={styles.warningEmoji}>⚠️</div>
                      <p style={{...styles.cardTitle, color: '#dc2626', fontSize: '0.875rem'}}>{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Additional Legal Information */}
              <section style={styles.section}>
                <h2 style={{...styles.sectionTitle, marginBottom: '1rem'}}>8. Additional Legal Information</h2>
                <div style={{...styles.grid, ...styles.gridCols2}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Intellectual Property</h4>
                      <p style={styles.cardText}>All content and functionality remain our exclusive property, protected by copyright and trademark laws.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Limitation of Liability</h4>
                      <p style={styles.cardText}>We exclude liability for damages arising from service use to the fullest extent permitted by law.</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Service Availability</h4>
                      <p style={styles.cardText}>We don't guarantee continuous availability and may suspend access without notice.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Governing Law</h4>
                      <p style={styles.cardText}>These terms are governed by [Your State/Country] law without regard to conflict provisions.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Mail size={24} color="#2563eb" />
                  <h2 style={styles.sectionTitle}>9. Contact Information</h2>
                </div>
                <div style={{...styles.card, ...styles.cardSlate}}>
                  <p style={{...styles.cardText, marginBottom: '1rem'}}>If you have any questions about these Terms and Conditions, please contact us:</p>
                  <div style={styles.contactGrid}>
                    <div style={styles.contactItem}>
                      <Mail size={20} color="#2563eb" />
                      <div>
                        <div style={styles.contactLabel}>Email</div>
                        <div style={styles.contactValue}>legal@company.com</div>
                      </div>
                    </div>
                    <div style={styles.contactItem}>
                      <Globe size={20} color="#2563eb" />
                      <div>
                        <div style={styles.contactLabel}>Address</div>
                        <div style={styles.contactValue}>123 Tech Street, City</div>
                      </div>
                    </div>
                    <div style={styles.contactItem}>
                      <FileText size={20} color="#2563eb" />
                      <div>
                        <div style={styles.contactLabel}>Phone</div>
                        <div style={styles.contactValue}>+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={styles.scrollTop}
        onMouseEnter={(e) => {
          e.target.style.background = '#1d4ed8';
          e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#2563eb';
          e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default TermsAndConditions;