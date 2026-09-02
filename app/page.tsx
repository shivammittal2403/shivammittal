const experience = [
  { period: 'May 2026 — Present', role: 'Founder', organisation: 'Redkross Research Foundation', detail: 'Leading cybersecurity research and awareness initiatives, developing AI security and threat intelligence programs, and managing strategic partnerships.', accent: true },
  { period: 'Jul 2026', role: 'OSINT & HUMINT Research Analyst', organisation: 'Confidential Saudi Client · Freelance', detail: 'Conducted lawful OSINT and HUMINT-oriented research and delivered structured intelligence reporting.' },
  { period: 'May 2026', role: 'Guest Faculty', organisation: 'Panipat Institute of Engineering & Technology', detail: 'Delivered a five-day workshop spanning ethical hacking, OSINT, web and network security, and VAPT.' },
  { period: 'Mar 2026', role: 'Cyber Security Trainer', organisation: 'CyberYaan', detail: 'Delivered CISM training for senior defence personnel.' },
  { period: 'Feb 2026', role: 'Cyber Security Trainer', organisation: 'Jai Enterprises · C-DAC GIST PACE', detail: 'Delivered hands-on Nessus training for Armed Forces personnel.' },
  { period: 'Aug 2024 — Oct 2025', role: 'Cyber Security Trainer', organisation: 'Digisuraksha Parhari Foundation', detail: 'Delivered cybersecurity awareness and technical training.' },
  { period: 'Nov 2023 — Oct 2025', role: 'Technical Team Member', organisation: 'BSides Pune', detail: 'Supported conference technology and coordination.' },
  { period: '2023 — 2025', role: 'Cyber Security Analyst', organisation: 'Amroha Police · Gurugram Police · Cyber Secure India · TechnoHacks EduTech', detail: 'Worked across threat intelligence, security research, VAPT and incident analysis.' },
];

const disciplines = [
  ['01', 'Governance, Risk & Compliance', 'ISO/IEC 27001, PCI DSS, COSO, internal audit, risk assessment and security governance.'],
  ['02', 'Threat Intelligence & OSINT', 'MITRE ATT&CK, IOC analysis, malware analysis, HUMINT research and structured intelligence reporting.'],
  ['03', 'Offensive Security', 'Web, network and mobile security, VAPT, red teaming and vulnerability validation.'],
  ['04', 'AI Security', 'AI risk assessment, agent security, prompt engineering and LLM security.'],
  ['05', 'Security Education', 'Practical workshops, security awareness and technical training for institutions and public-sector audiences.'],
  ['06', 'Digital Forensics', 'Evidence-led investigation, incident analysis, malware triage and forensic fundamentals.'],
];

const certifications = [
  'CISA / CISM — Professional Development', 'SOC 2 Academy', 'COSO Framework', 'Internal Audit',
  'Foundation Level Threat Intelligence Analyst', 'Mastering Threat Intelligence',
  'MITRE ATT&CK Defender — Purple Teaming Fundamentals', 'Certified Ethical Hacker (CEH)',
  'CompTIA PenTest+', 'Mobile Application Security Fundamentals', 'Digital Forensics Essentials',
  'Mastering Open Source Intelligence (EC-Council)', 'Introduction to CISSP', 'PCI DSS',
  'GDPR', 'Zero Trust', 'AI Agent Security', 'Prompt Engineering',
];

const tools = ['Burp Suite', 'Nessus', 'Nmap', 'Metasploit', 'OWASP ZAP', 'OpenVAS', 'Nuclei', 'Wireshark', 'YARA', 'Sigma', 'Maltego', 'SpiderFoot', 'Shodan', 'Censys', 'VirusTotal', 'SecurityTrails'];

const achievementImages = [
  {
    src: '/achievements/parliament-jagriti-03.jpg',
    alt: 'Jagriti Residency cohort gathered at the Parliament complex in New Delhi',
    caption: 'Jagriti Residency · Parliament visit',
  },
  {
    src: '/achievements/parliament-jagriti-01.jpg',
    alt: 'Jagriti Residency participants in a group photograph at Parliament',
    caption: 'Cohort engagement at Parliament',
  },
  {
    src: '/achievements/parliament-jagriti-02.jpg',
    alt: 'Participants during the Jagriti Residency Parliament engagement',
    caption: 'Learning alongside the Jagriti cohort',
  },
  {
    src: '/achievements/jagriti-residency-04.jpg',
    alt: 'Jagriti Residency participants during an institutional visit',
    caption: 'Jagriti Residency field experience',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="grid-haze" aria-hidden="true" />
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="monogram" href="#top" aria-label="Shivam Mittal, home">SM<span>.</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a></div>
        </nav>
        <div className="hero-inner shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for select consulting & training</div>
            <h1>Security is a<br /><em>human system.</em></h1>
            <p className="hero-lede">I’m Shivam Mittal — a cyber security consultant working across GRC, threat intelligence, OSINT, VAPT and practical security education.</p>
            <div className="hero-actions">
              <a className="primary-cta linkedin-cta" href="https://www.linkedin.com/in/shivam-mittal2023/" target="_blank" rel="noreferrer"><b aria-hidden="true">in</b> Connect on LinkedIn <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/shivam-mittal-resume.pdf" target="_blank">View résumé <span>↗</span></a>
            </div>
            <div className="signal-row" aria-label="Professional links">
              <a href="https://github.com/shivammittal2403" target="_blank" rel="noreferrer">&lt;/&gt;&nbsp; GitHub</a>
              <a href="https://tryhackme.com/p/shivammittal2403" target="_blank" rel="noreferrer">◇&nbsp; TryHackMe</a>
              <span>⌖&nbsp; Sonipat, Haryana, India</span>
            </div>
          </div>
          <div className="portrait-stage" aria-label="Portrait of Shivam Mittal">
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
            <div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/129981495?v=4&size=640" alt="Shivam Mittal" /><span className="scan-line" aria-hidden="true" /></div>
            <div className="identity-chip chip-top"><span>01</span> GOVERNANCE</div>
            <div className="identity-chip chip-bottom">◇ THREAT INTEL</div>
          </div>
        </div>
        <a className="scroll-cue" href="#work"><span>Explore the profile</span><span aria-hidden="true">↓</span></a>
      </section>

      <div className="ticker" aria-hidden="true"><div>GRC <i>✦</i> THREAT INTELLIGENCE <i>✦</i> OSINT <i>✦</i> VAPT <i>✦</i> AI SECURITY <i>✦</i> SECURITY EDUCATION <i>✦</i> GRC <i>✦</i> THREAT INTELLIGENCE <i>✦</i> OSINT <i>✦</i> VAPT <i>✦</i></div></div>

      <section className="manifesto shell reveal-on-scroll" id="work">
        <p className="section-kicker">Profile / 001</p>
        <div className="manifesto-grid">
          <h2>From policy<br />to packet.</h2>
          <div>
            <p className="manifesto-copy">I connect security governance with technical reality — translating risk into decisions, intelligence into action, and complex security practices into training people can use.</p>
            <div className="mini-stats">
              <div><strong>66</strong><span>Public GitHub repositories</span></div>
              <div><strong>58</strong><span>GitHub followers</span></div>
              <div><strong>2023</strong><span>Cybersecurity experience since</span></div>
            </div>
            <p className="verification-note">Public profile figures verified from GitHub on 2 September 2026.</p>
          </div>
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="shell">
          <div className="section-head reveal-on-scroll">
            <div><p className="section-kicker">Practice / 002</p><h2>Security, end to end.</h2></div>
            <p>Strategy, investigation, validation and education — composed as one practical security practice.</p>
          </div>
          <div className="discipline-grid">
            {disciplines.map(([number, title, copy]) => (
              <article className="discipline-card reveal-on-scroll" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section shell">
        <div className="timeline-intro reveal-on-scroll">
          <p className="section-kicker">Field notes / 003</p><h2>Experience shaped in the field.</h2>
          <p>Consulting, research and training across public-sector, academic, community and private engagements.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className={'timeline-item reveal-on-scroll ' + (item.accent ? 'is-current' : '')} key={item.role + item.period}>
              <time>{item.period}</time>
              <div><h3>{item.role}</h3><p className="org">{item.organisation}</p><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="achievements-section" id="achievements">
        <div className="shell">
          <div className="section-head achievement-head reveal-on-scroll">
            <div><p className="section-kicker">Beyond the brief / 004</p><h2>Leadership in motion.</h2></div>
            <p>Community, professional development and disciplined pursuits that extend the security practice beyond a conventional résumé.</p>
          </div>

          <div className="achievement-story reveal-on-scroll">
            <div className="achievement-lead">
              <span className="achievement-index">01 / JAGRITI</span>
              <h3>Jagriti Residency<br />at Parliament.</h3>
              <p>Worked with <strong>Jagriti Yatra as an ERC</strong> during the Jagriti Residency, contributing to a cohort-led learning experience that included an engagement at Parliament.</p>
              <div className="achievement-tags"><span>Jagriti Yatra</span><span>ERC</span><span>Residency</span><span>Parliament</span></div>
            </div>
            <figure className="achievement-featured-image">
              <img src="/achievements/parliament-jagriti-03.jpg" alt="Jagriti Residency cohort gathered at the Parliament complex in New Delhi" />
              <figcaption><span>New Delhi</span><span>Jagriti Residency</span></figcaption>
            </figure>
          </div>

          <div className="achievement-gallery reveal-on-scroll" aria-label="Jagriti Residency and Parliament gallery">
            {achievementImages.slice(1).map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="achievement-notes">
            <article className="isaca-card reveal-on-scroll">
              <div className="isaca-mark">ISACA<span>DELHI</span></div>
              <div>
                <p className="section-kicker">Professional membership</p>
                <h3>ISACA Delhi Chapter Member</h3>
                <p>Registered for the <strong>CPE Event and Special General Meeting (SGM)</strong> scheduled for 22 August 2026—an opportunity for CPE learning and engagement with fellow ISACA members and industry professionals.</p>
              </div>
            </article>
            <article className="credential-focus reveal-on-scroll">
              <p className="section-kicker">Governance focus</p>
              <div className="credential-acronyms"><strong>CISA</strong><i>+</i><strong>CISM</strong></div>
              <p>Professional development aligned with information systems audit and security management.</p>
            </article>
            <article className="shooting-card reveal-on-scroll">
              <p className="section-kicker">Competitive discipline</p>
              <span className="target-rings" aria-hidden="true" />
              <h3>District-level<br />shooting</h3>
              <p>District-level shooting participation—bringing focus, composure and precision beyond the cyber domain.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="development-section">
        <div className="shell development-grid">
          <div className="development-card reveal-on-scroll">
            <p className="section-kicker">Professional development / 005</p>
            <div className="dev-badge">GIP<span>2026</span></div>
            <h2>Global Innovators Program</h2>
            <p className="dev-org">NUS Business School · Full scholarship · Part-time virtual</p>
            <p>Selected for a six-month program focused on startup strategy, venture creation, real-world business challenges and expert-led masterclasses.</p>
          </div>
          <div className="education-card reveal-on-scroll">
            <p className="section-kicker">Education</p>
            <div><span>In progress</span><h3>Diploma in International Relations & Diplomacy</h3></div>
            <div><span>2020 — 2023</span><h3>Bachelor of Arts</h3><p>Kurukshetra University</p></div>
          </div>
        </div>
      </section>

      <section className="credentials shell">
        <div className="section-head reveal-on-scroll">
          <div><p className="section-kicker">Credentials / 006</p><h2>Continuous learning,<br />applied deliberately.</h2></div>
          <p>Professional study across audit, governance, threat intelligence, offensive security, privacy and emerging AI risk.</p>
        </div>
        <div className="credential-cloud reveal-on-scroll">
          {certifications.map((cert, index) => <span className={index === 0 ? 'priority-credential' : index % 5 === 0 ? 'hot' : ''} key={cert}>{cert}</span>)}
        </div>
      </section>

      <section className="toolkit-section">
        <div className="shell toolkit-grid">
          <div className="reveal-on-scroll">
            <p className="section-kicker">Toolkit / 007</p><h2>Methods meet machinery.</h2>
            <p>Hands-on with security testing, network analysis, intelligence tooling and automation across Kali Linux, Ubuntu and Windows.</p>
          </div>
          <div className="tool-orbit reveal-on-scroll">
            {tools.map((tool, index) => <span style={{ '--i': index } as React.CSSProperties} key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>

      <section className="open-source shell reveal-on-scroll">
        <div className="github-panel">
          <div className="github-copy">
            <p className="section-kicker">Public work / 008</p><h2>An open security notebook.</h2>
            <p>Shivam’s public GitHub footprint includes security resources, malware-analysis references and practical research material — connected to the same LinkedIn and TryHackMe identities listed in the CV.</p>
            <div className="github-actions">
              <a className="primary-cta" href="https://github.com/shivammittal2403" target="_blank" rel="noreferrer">Explore GitHub <span>↗</span></a>
              <a className="text-link" href="https://tryhackme.com/p/shivammittal2403" target="_blank" rel="noreferrer">TryHackMe profile ↗</a>
            </div>
          </div>
          <div className="terminal-card" aria-label="GitHub profile summary">
            <div className="terminal-bar"><span /><span /><span /><small>public-profile.sh</small></div>
            <pre><code><b>$</b> whoami{String.fromCharCode(10)}shivammittal2403{String.fromCharCode(10,10)}<b>$</b> profile --focus{String.fromCharCode(10)}malware-analysis{String.fromCharCode(10)}threat-intelligence{String.fromCharCode(10)}security-resources{String.fromCharCode(10,10)}<b>$</b> connections{String.fromCharCode(10)}linkedin ✓{String.fromCharCode(10)}tryhackme ✓</code></pre>
            <span className="cursor" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-rings" aria-hidden="true" />
        <div className="shell contact-inner reveal-on-scroll">
          <p className="section-kicker">Secure the next move / 009</p>
          <h2>Bring clarity to<br /><em>the unknown.</em></h2>
          <p>For consulting, training, research partnerships and security awareness programs.</p>
          <a className="contact-email" href="mailto:shivammittal2403@gmail.com">shivammittal2403@gmail.com <span>↗</span></a>
          <div className="contact-meta">
            <a href="https://www.linkedin.com/in/shivam-mittal2023/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            <a href="https://redkross.org.in" target="_blank" rel="noreferrer">redkross.org.in ↗</a>
            <span>English · Hindi</span>
          </div>
          <p className="privacy-note">Public profile: professional contact and verified work links only. Sensitive personal details are not published.</p>
        </div>
      </section>

      <footer className="footer shell">
        <a className="monogram" href="#top">SM<span>.</span></a>
        <p>Cyber Security Consultant · Sonipat, India</p><p>© 2026 Shivam Mittal</p>
      </footer>
    </main>
  );
}

