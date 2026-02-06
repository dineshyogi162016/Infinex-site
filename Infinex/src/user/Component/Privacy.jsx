import React, { useState, useEffect } from 'react';
import { ChevronUp, Shield, Eye, Database, Lock, UserCheck, Settings, Mail, AlertTriangle, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
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
    { id: 'overview', label: 'Privacy Overview', icon: Eye },
    { id: 'collection', label: 'Data Collection', icon: Database },
    { id: 'usage', label: 'How We Use Data', icon: Settings },
    { id: 'sharing', label: 'Information Sharing', icon: UserCheck },
    { id: 'security', label: 'Data Security', icon: Lock },
    { id: 'rights', label: 'Your Rights', icon: Shield },
    { id: 'cookies', label: 'Cookies & Tracking', icon: Globe },
    { id: 'contact', label: 'Contact Us', icon: Mail }
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
      background: 'linear-gradient(135deg, #059669, #10b981)',
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
      background: '#d1fae5',
      color: '#065f46',
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
      background: '#ecfdf5',
      color: '#059669',
      borderLeft: '4px solid #10b981'
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
    alertRed: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626'
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
    cardBlue: {
      background: '#eff6ff',
      borderColor: '#bfdbfe'
    },
    cardOrange: {
      background: '#fffbeb',
      borderColor: '#fed7aa'
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
    btnGreen: {
      background: '#059669',
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
      background: '#059669',
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
    dataTable: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '1rem 0'
    },
    dataTableHeader: {
      background: '#f8fafc',
      fontWeight: '600',
      color: '#1e293b',
      padding: '0.75rem',
      borderBottom: '2px solid #e2e8f0',
      textAlign: 'left'
    },
    dataTableCell: {
      padding: '0.75rem',
      borderBottom: '1px solid #e2e8f0',
      color: '#374151'
    },
    icon: {
      marginRight: '0.5rem',
      verticalAlign: 'middle'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.headerIcon}>
              <Shield size={24} />
            </div>
            <div>
              <h1 style={styles.headerTitle}>Privacy Policy</h1>
              <p style={styles.headerSubtitle}>Last updated: January 2025</p>
            </div>
          </div>
          <div style={styles.headerRight}>
            <span style={{color: '#64748b', fontSize: '0.875rem'}}>GDPR Compliant</span>
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
                <Shield size={20} />
                Privacy Topics
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
              
              {/* Privacy Overview */}
              <section id="overview" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Eye size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>1. Privacy Overview</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding your data when you use our services.</p>
                  <div style={{...styles.alert, ...styles.alertGreen}}>
                    <p style={{margin: 0}}><strong>Your Privacy Matters:</strong> We believe privacy is a fundamental right. We minimize data collection, maximize your control, and never sell your personal information.</p>
                  </div>
                  <div style={{...styles.grid, ...styles.gridCols3}}>
                    <div style={{...styles.card, ...styles.cardGreen}}>
                      <Shield style={styles.icon} size={20} color="#059669" />
                      <h4 style={{...styles.cardTitle, color: '#059669'}}>Data Protection</h4>
                      <p style={{...styles.cardText, color: '#166534'}}>Industry-standard encryption and security measures</p>
                    </div>
                    <div style={{...styles.card, ...styles.cardBlue}}>
                      <UserCheck style={styles.icon} size={20} color="#2563eb" />
                      <h4 style={{...styles.cardTitle, color: '#2563eb'}}>User Control</h4>
                      <p style={{...styles.cardText, color: '#1e40af'}}>Full control over your data and privacy settings</p>
                    </div>
                    <div style={{...styles.card, ...styles.cardOrange}}>
                      <Eye style={styles.icon} size={20} color="#d97706" />
                      <h4 style={{...styles.cardTitle, color: '#d97706'}}>Transparency</h4>
                      <p style={{...styles.cardText, color: '#c2410c'}}>Clear information about data collection and usage</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Collection */}
              <section id="collection" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Database size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>2. Information We Collect</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We collect information to provide and improve our services. The types of information we collect include:</p>
                  
                  <h4 style={styles.proseH4}>Information You Provide Directly</h4>
                  <table style={styles.dataTable}>
                    <thead>
                      <tr>
                        <th style={styles.dataTableHeader}>Data Type</th>
                        <th style={styles.dataTableHeader}>Purpose</th>
                        <th style={styles.dataTableHeader}>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={styles.dataTableCell}>Account Information</td>
                        <td style={styles.dataTableCell}>Service provision</td>
                        <td style={styles.dataTableCell}>Name, email, password</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Profile Data</td>
                        <td style={styles.dataTableCell}>Personalization</td>
                        <td style={styles.dataTableCell}>Profile picture, preferences</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Communication Data</td>
                        <td style={styles.dataTableCell}>Customer support</td>
                        <td style={styles.dataTableCell}>Messages, feedback</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Payment Information</td>
                        <td style={styles.dataTableCell}>Transaction processing</td>
                        <td style={styles.dataTableCell}>Billing address, payment method</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 style={styles.proseH4}>Information Collected Automatically</h4>
                  <div style={{...styles.grid, ...styles.gridCols2}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Technical Information</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'IP address and location',
                          'Device and browser information',
                          'Operating system details',
                          'Network connection type'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Usage Information</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'Pages visited and time spent',
                          'Features used and interactions',
                          'Search queries and results',
                          'Error logs and performance data'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Usage */}
              <section id="usage" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Settings size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>3. How We Use Your Information</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We use your information for legitimate business purposes to provide, maintain, and improve our services:</p>
                  
                  <div style={{...styles.grid, ...styles.gridCols2}}>
                    <div style={{...styles.card, ...styles.cardGreen}}>
                      <h4 style={{...styles.cardTitle, color: '#059669'}}>Service Operations</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'Provide and maintain our services',
                          'Process transactions and payments',
                          'Authenticate users and prevent fraud',
                          'Provide customer support'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, color: '#166534', display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{...styles.card, ...styles.cardBlue}}>
                      <h4 style={{...styles.cardTitle, color: '#2563eb'}}>Service Improvement</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'Analyze usage patterns and trends',
                          'Develop new features and functionality',
                          'Improve user experience and performance',
                          'Conduct research and analytics'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, color: '#1e40af', display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{...styles.alert, ...styles.alertOrange}}>
                    <h4 style={{color: '#c2410c', margin: '0 0 0.5rem 0'}}>Marketing Communications</h4>
                    <p style={{margin: 0, color: '#c2410c'}}>We may send you promotional emails about new features or services, but you can always opt out. We never share your email with third parties for marketing purposes.</p>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section id="sharing" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <UserCheck size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>4. Information Sharing and Disclosure</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:</p>
                  
                  <div style={{...styles.grid, ...styles.gridCols2}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Service Providers</h4>
                      <p style={styles.cardText}>Trusted third parties who help us operate our services (hosting, payment processing, analytics) under strict confidentiality agreements.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Legal Requirements</h4>
                      <p style={styles.cardText}>When required by law, court order, or to protect our rights, safety, or the rights and safety of others.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Business Transfers</h4>
                      <p style={styles.cardText}>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>With Your Consent</h4>
                      <p style={styles.cardText}>When you explicitly consent to sharing your information with specific third parties for particular purposes.</p>
                    </div>
                  </div>

                  <div style={{...styles.alert, ...styles.alertRed}}>
                    <h4 style={{color: '#dc2626', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <AlertTriangle size={20} />
                      What We Never Do
                    </h4>
                    <ul style={{margin: 0, color: '#dc2626'}}>
                      <li>Sell your personal information to advertisers or data brokers</li>
                      <li>Share your data for third-party marketing without consent</li>
                      <li>Provide access to your private communications</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="security" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Lock size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>5. Data Security</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We implement comprehensive security measures to protect your personal information from unauthorized access, use, or disclosure:</p>
                  
                  <div style={{...styles.grid, ...styles.gridCols3}}>
                    {[
                      { title: 'Encryption', desc: 'Data encrypted in transit and at rest using industry-standard protocols', icon: '🔐' },
                      { title: 'Access Controls', desc: 'Strict employee access controls and regular security training', icon: '👤' },
                      { title: 'Monitoring', desc: '24/7 security monitoring and incident response procedures', icon: '👁️' },
                      { title: 'Updates', desc: 'Regular security updates and vulnerability assessments', icon: '🔄' },
                      { title: 'Compliance', desc: 'Adherence to security standards and regulatory requirements', icon: '✅' },
                      { title: 'Backups', desc: 'Secure data backups and disaster recovery plans', icon: '💾' }
                    ].map((item, index) => (
                      <div key={index} style={styles.card}>
                        <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                        <h4 style={styles.cardTitle}>{item.title}</h4>
                        <p style={styles.cardText}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{...styles.alert, ...styles.alertBlue}}>
                    <p style={{margin: '0 0 1rem 0'}}><strong>Security Incident Response:</strong> In the unlikely event of a data breach, we will notify affected users within 72 hours and provide detailed information about the incident and steps being taken.</p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="rights" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Shield size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>6. Your Privacy Rights</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>You have important rights regarding your personal information. Depending on your location, these may include:</p>
                  
                  <div style={{...styles.grid, ...styles.gridCols2}}>
                    <div style={{...styles.card, ...styles.cardGreen}}>
                      <h4 style={{...styles.cardTitle, color: '#059669'}}>Access & Control Rights</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'Access your personal information',
                          'Update or correct your data',
                          'Delete your account and data',
                          'Download your data (portability)'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, color: '#166534', display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{...styles.card, ...styles.cardBlue}}>
                      <h4 style={{...styles.cardTitle, color: '#2563eb'}}>Processing Rights</h4>
                      <ul style={{...styles.proseUl, margin: 0}}>
                        {[
                          'Restrict processing of your data',
                          'Object to data processing',
                          'Opt-out of marketing communications',
                          'Withdraw consent at any time'
                        ].map((item, index) => (
                          <li key={index} style={{...styles.cardText, color: '#1e40af', display: 'list-item', listStyle: 'disc', marginLeft: '1rem'}}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{...styles.alert, ...styles.alertGreen}}>
                    <h4 style={{color: '#166534', margin: '0 0 0.5rem 0'}}>How to Exercise Your Rights</h4>
                    <p style={{margin: 0, color: '#166534'}}>Contact us at <strong>privacy@company.com</strong> or use your account settings. We will respond to all requests within 30 days and verify your identity before processing.</p>
                  </div>
                </div>
              </section>

              {/* Cookies & Tracking */}
              <section id="cookies" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Globe size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>7. Cookies and Tracking Technologies</h2>
                </div>
                <div style={styles.prose}>
                  <p style={styles.proseP}>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.</p>
                  
                  <table style={styles.dataTable}>
                    <thead>
                      <tr>
                        <th style={styles.dataTableHeader}>Cookie Type</th>
                        <th style={styles.dataTableHeader}>Purpose</th>
                        <th style={styles.dataTableHeader}>Duration</th>
                        <th style={styles.dataTableHeader}>Control</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={styles.dataTableCell}>Essential</td>
                        <td style={styles.dataTableCell}>Required for site functionality</td>
                        <td style={styles.dataTableCell}>Session/1 year</td>
                        <td style={styles.dataTableCell}>Cannot be disabled</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Analytics</td>
                        <td style={styles.dataTableCell}>Understanding site usage</td>
                        <td style={styles.dataTableCell}>2 years</td>
                        <td style={styles.dataTableCell}>Can be disabled</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Functional</td>
                        <td style={styles.dataTableCell}>Remember preferences</td>
                        <td style={styles.dataTableCell}>1 year</td>
                        <td style={styles.dataTableCell}>Can be disabled</td>
                      </tr>
                      <tr>
                        <td style={styles.dataTableCell}>Marketing</td>
                        <td style={styles.dataTableCell}>Personalized advertising</td>
                        <td style={styles.dataTableCell}>90 days</td>
                        <td style={styles.dataTableCell}>Can be disabled</td>
                      </tr>
                    </tbody>
                  </table>

                  <div style={{...styles.alert, ...styles.alertOrange}}>
                    <h4 style={{color: '#c2410c', margin: '0 0 0.5rem 0'}}>Cookie Management</h4>
                    <p style={{margin: '0 0 1rem 0', color: '#c2410c'}}>You can control cookies through your browser settings or our cookie preference center.</p>
                    <button 
                      style={{...styles.btn, background: '#d97706', color: 'white'}}
                      onMouseEnter={(e) => e.target.style.background = '#b45309'}
                      onMouseLeave={(e) => e.target.style.background = '#d97706'}
                    >
                      Manage Cookie Preferences
                    </button>
                  </div>
                </div>
              </section>

              {/* Additional Privacy Information */}
              <section style={styles.section}>
                <h2 style={{...styles.sectionTitle, marginBottom: '1rem'}}>8. Additional Privacy Information</h2>
                <div style={{...styles.grid, ...styles.gridCols2}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Data Retention</h4>
                      <p style={styles.cardText}>We retain your personal information only as long as necessary to provide services and comply with legal obligations. Account data is deleted within 90 days of account closure.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>International Transfers</h4>
                      <p style={styles.cardText}>Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through appropriate safeguards.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Children's Privacy</h4>
                      <p style={styles.cardText}>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13 years of age.</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Third-Party Links</h4>
                      <p style={styles.cardText}>Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Policy Updates</h4>
                      <p style={styles.cardText}>We may update this policy periodically. We will notify you of significant changes via email or through our service.</p>
                    </div>
                    <div style={styles.card}>
                      <h4 style={styles.cardTitle}>Regulatory Compliance</h4>
                      <p style={styles.cardText}>We comply with GDPR, CCPA, and other applicable privacy regulations. We conduct regular privacy assessments and audits.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" style={styles.section}>
                <div style={styles.sectionHeader}>
                  <Mail size={24} color="#059669" />
                  <h2 style={styles.sectionTitle}>9. Contact Us</h2>
                </div>
                <div style={{...styles.card, ...styles.cardSlate}}>
                  <p style={{...styles.cardText, marginBottom: '1rem'}}>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div style={styles.contactGrid}>
                    <div style={styles.contactItem}>
                      <Mail size={20} color="#059669" />
                      <div>
                        <div style={styles.contactLabel}>Privacy Officer</div>
                        <div style={styles.contactValue}>privacy@company.com</div>
                      </div>
                    </div>
                    <div style={styles.contactItem}>
                      <Globe size={20} color="#059669" />
                      <div>
                        <div style={styles.contactLabel}>Mailing Address</div>
                        <div style={styles.contactValue}>123 Privacy Lane, Data City</div>
                      </div>
                    </div>
                    <div style={styles.contactItem}>
                      <Shield size={20} color="#059669" />
                      <div>
                        <div style={styles.contactLabel}>Data Protection</div>
                        <div style={styles.contactValue}>+1 (555) 123-GDPR</div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{...styles.alert, ...styles.alertBlue, marginTop: '1rem'}}>
                    <h4 style={{color: '#1e40af', margin: '0 0 0.5rem 0'}}>Quick Response Promise</h4>
                    <p style={{margin: 0, color: '#1e40af'}}>We typically respond to privacy inquiries within 24 hours and will resolve most requests within 5 business days.</p>
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
          e.target.style.background = '#047857';
          e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#059669';
          e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default PrivacyPolicy;