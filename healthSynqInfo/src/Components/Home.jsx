import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --teal: #2a9d8f;
    --teal-dark: #1f7a6e;
    --teal-light: #4db6ac;
    --teal-pale: #e0f2f1;
    --mint: #b2dfdb;
    --navy: #0d2b2a;
    --off-white: #f7fafa;
    --white: #ffffff;
    --gray: #6b7c7b;
    --gray-light: #cfe3e1;
    --accent: #e76f51;
    --text: #1a2e2d;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--off-white);
    color: var(--text);
    overflow-x: hidden;
  }

  /* NAV */
  .hs-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 6%;
    background: rgba(247,250,250,0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--gray-light);
  }
  .hs-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .hs-logo-icon {
    width: 38px; height: 38px;
    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 12px rgba(42,157,143,0.3);
  }
  .hs-logo-icon svg { width: 20px; height: 20px; }
  .hs-logo-text { font-family: 'DM Serif Display', serif; font-size: 1.4rem; color: var(--navy); letter-spacing: -0.3px; }
  .hs-logo-text span { color: var(--teal); }
  .hs-nav ul { display: flex; gap: 32px; list-style: none; }
  .hs-nav ul a { text-decoration: none; font-size: 0.9rem; font-weight: 500; color: var(--gray); transition: color 0.2s; }
  .hs-nav ul a:hover { color: var(--teal); }
  .hs-nav-cta {
    background: var(--teal) !important;
    color: var(--white) !important;
    padding: 9px 22px;
    border-radius: 8px;
    font-weight: 600 !important;
    transition: background 0.2s, transform 0.15s;
  }
  .hs-nav-cta:hover { background: var(--teal-dark) !important; transform: translateY(-1px); }

  /* HERO */
  .hs-hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px 6% 80px;
    position: relative; overflow: hidden;
  }
  .hs-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background:
      radial-gradient(ellipse 60% 60% at 70% 50%, rgba(42,157,143,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(77,182,172,0.06) 0%, transparent 60%);
  }
  .hs-hero-grid {
    position: absolute; inset: 0; z-index: 0;
    background-image:
      linear-gradient(rgba(42,157,143,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(42,157,143,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .hs-hero-inner {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 60px; align-items: center;
    max-width: 1200px; margin: 0 auto; width: 100%;
  }
  .hs-hero-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--teal-pale); color: var(--teal-dark);
    font-size: 0.78rem; font-weight: 600;
    padding: 6px 14px; border-radius: 20px; margin-bottom: 20px;
    letter-spacing: 0.5px; text-transform: uppercase;
    border: 1px solid var(--mint);
    animation: fadeSlideUp 0.6s ease both;
  }
  .hs-badge-dot {
    width: 7px; height: 7px;
    background: var(--teal); border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }
  .hs-hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.4rem, 4vw, 3.6rem);
    line-height: 1.12; color: var(--navy); margin-bottom: 20px;
    animation: fadeSlideUp 0.6s 0.1s ease both;
  }
  .hs-hero-title em { font-style: italic; color: var(--teal); }
  .hs-hero-desc {
    font-size: 1.05rem; line-height: 1.7; color: var(--gray);
    max-width: 480px; margin-bottom: 36px;
    animation: fadeSlideUp 0.6s 0.2s ease both;
  }
  .hs-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; animation: fadeSlideUp 0.6s 0.3s ease both; }
  .hs-btn-primary {
    display: inline-flex; align-items: center; gap: 9px;
    background: var(--teal); color: var(--white);
    padding: 14px 28px; border-radius: 10px; text-decoration: none;
    font-weight: 600; font-size: 0.95rem;
    box-shadow: 0 6px 20px rgba(42,157,143,0.35); transition: all 0.2s;
  }
  .hs-btn-primary:hover { background: var(--teal-dark); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(42,157,143,0.4); }
  .hs-btn-secondary {
    display: inline-flex; align-items: center; gap: 9px;
    background: var(--white); color: var(--teal-dark);
    padding: 14px 28px; border-radius: 10px; text-decoration: none;
    font-weight: 600; font-size: 0.95rem;
    border: 1.5px solid var(--mint); transition: all 0.2s;
  }
  .hs-btn-secondary:hover { border-color: var(--teal); background: var(--teal-pale); transform: translateY(-2px); }
  .hs-hero-stats { display: flex; gap: 32px; margin-top: 44px; animation: fadeSlideUp 0.6s 0.4s ease both; }
  .hs-stat { display: flex; flex-direction: column; gap: 3px; }
  .hs-stat-num { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: var(--navy); }
  .hs-stat-label { font-size: 0.78rem; font-weight: 500; color: var(--gray); text-transform: uppercase; letter-spacing: 0.5px; }
  .hs-stat-divider { width: 1px; background: var(--gray-light); align-self: stretch; }

  /* PHONE MOCKUP */
  .hs-hero-visual { display: flex; justify-content: center; align-items: center; position: relative; animation: fadeSlideUp 0.7s 0.2s ease both; }
  .hs-phone-wrap { position: relative; }
  .hs-phone-outer {
    width: 260px;
    background: var(--navy); border-radius: 44px; padding: 14px;
    box-shadow: 0 40px 80px rgba(13,43,42,0.25), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .hs-phone-screen {
    background: linear-gradient(160deg, #e8f5f3 0%, #d0efeb 100%);
    border-radius: 32px; overflow: hidden; aspect-ratio: 9/19;
    display: flex; flex-direction: column; padding: 20px 16px 16px; gap: 12px;
  }
  .hs-phone-status { display: flex; justify-content: space-between; align-items: center; font-size: 0.55rem; font-weight: 600; color: var(--navy); opacity: 0.6; }
  .hs-phone-app-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
    border-radius: 13px; display: flex; align-items: center; justify-content: center;
    margin: 0 auto; box-shadow: 0 6px 16px rgba(42,157,143,0.4);
  }
  .hs-phone-app-icon svg { width: 22px; height: 22px; }
  .hs-phone-greeting { text-align: center; }
  .hs-phone-greeting h3 { font-family: 'DM Serif Display', serif; font-size: 1rem; color: var(--navy); }
  .hs-phone-greeting p { font-size: 0.55rem; color: var(--gray); margin-top: 2px; }
  .hs-phone-card { background: rgba(255,255,255,0.85); border-radius: 14px; padding: 12px; backdrop-filter: blur(8px); }
  .hs-phone-card-label { font-size: 0.5rem; font-weight: 600; color: var(--gray); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
  .hs-glucose-row { display: flex; justify-content: space-between; align-items: center; }
  .hs-glucose-val { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--teal-dark); }
  .hs-glucose-unit { font-size: 0.48rem; color: var(--gray); margin-top: 4px; }
  .hs-glucose-badge { background: #dcfce7; color: #166534; font-size: 0.45rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: 0.4px; }
  .hs-mini-bars { display: flex; gap: 3px; align-items: flex-end; height: 24px; margin-top: 8px; }
  .hs-mini-bar { flex: 1; background: var(--mint); border-radius: 2px; }
  .hs-mini-bar.active { background: var(--teal); }
  .hs-phone-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .hs-metric-mini { background: rgba(255,255,255,0.7); border-radius: 10px; padding: 8px; }
  .hs-metric-mini-label { font-size: 0.45rem; color: var(--gray); font-weight: 500; margin-bottom: 2px; }
  .hs-metric-mini-val { font-size: 0.75rem; font-weight: 700; color: var(--navy); }
  .hs-metric-mini-sub { font-size: 0.4rem; color: var(--teal); font-weight: 600; }

  /* FLOAT CARDS */
  .hs-float-card {
    position: absolute; background: var(--white); border-radius: 14px;
    padding: 12px 16px; box-shadow: 0 12px 36px rgba(0,0,0,0.1);
    display: flex; align-items: center; gap: 10px;
    border: 1px solid var(--gray-light); min-width: 140px;
    animation: float 4s ease-in-out infinite;
  }
  .hs-float-card:nth-child(2) { animation-delay: -2s; }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
  .hs-float-card-1 { top: 40px; right: -80px; }
  .hs-float-card-2 { bottom: 80px; left: -90px; }
  .hs-float-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .hs-float-icon.green { background: #dcfce7; }
  .hs-float-icon.blue { background: #dbeafe; }
  .hs-float-text-title { font-size: 0.7rem; font-weight: 700; color: var(--navy); }
  .hs-float-text-sub { font-size: 0.62rem; color: var(--gray); }

  @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

  /* FEATURES */
  .hs-features { padding: 100px 6%; background: var(--white); }
  .hs-section-header { text-align: center; max-width: 560px; margin: 0 auto 64px; }
  .hs-section-tag { display: inline-block; font-size: 0.75rem; font-weight: 600; color: var(--teal-dark); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
  .hs-section-title { font-family: 'DM Serif Display', serif; font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--navy); line-height: 1.2; margin-bottom: 14px; }
  .hs-section-sub { color: var(--gray); font-size: 1rem; line-height: 1.65; }
  .hs-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
  .hs-feature-card {
    background: var(--off-white); border-radius: 20px; padding: 32px 28px;
    border: 1px solid var(--gray-light); transition: all 0.25s;
    position: relative; overflow: hidden;
  }
  .hs-feature-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--teal), var(--teal-light));
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .hs-feature-card:hover { border-color: var(--mint); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(42,157,143,0.12); }
  .hs-feature-card:hover::before { transform: scaleX(1); }
  .hs-feature-icon { width: 52px; height: 52px; background: var(--teal-pale); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 1.5rem; }
  .hs-feature-title { font-family: 'DM Serif Display', serif; font-size: 1.15rem; color: var(--navy); margin-bottom: 10px; }
  .hs-feature-desc { font-size: 0.88rem; line-height: 1.65; color: var(--gray); }
  .hs-feature-card.highlight { background: linear-gradient(135deg, var(--navy) 0%, #1a4a47 100%); border-color: transparent; }
  .hs-feature-card.highlight .hs-feature-title { color: var(--white); }
  .hs-feature-card.highlight .hs-feature-desc { color: rgba(255,255,255,0.65); }
  .hs-feature-card.highlight .hs-feature-icon { background: rgba(255,255,255,0.1); }
  .hs-feature-card.highlight::before { background: linear-gradient(90deg, var(--teal-light), var(--accent)); }

  /* DOWNLOAD */
  .hs-download { padding: 100px 6%; background: var(--off-white); position: relative; overflow: hidden; }
  .hs-download-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 50% 80% at 50% 50%, rgba(42,157,143,0.06) 0%, transparent 70%); }
  .hs-download-inner { max-width: 700px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
  .hs-download-card { background: var(--white); border-radius: 28px; padding: 56px 48px; border: 1px solid var(--gray-light); box-shadow: 0 20px 60px rgba(0,0,0,0.06); margin-top: 48px; }
  .hs-download-icon-wrap {
    width: 72px; height: 72px;
    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
    border-radius: 22px; display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px; box-shadow: 0 10px 28px rgba(42,157,143,0.35);
  }
  .hs-download-icon-wrap svg { width: 34px; height: 34px; }
  .hs-download-title { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: var(--navy); margin-bottom: 10px; }
  .hs-download-sub { color: var(--gray); font-size: 0.95rem; line-height: 1.6; margin-bottom: 32px; }
  .hs-download-btn {
    display: inline-flex; align-items: center; gap: 12px;
    background: var(--teal); color: var(--white);
    padding: 16px 36px; border-radius: 12px; text-decoration: none;
    font-weight: 600; font-size: 1rem;
    box-shadow: 0 8px 24px rgba(42,157,143,0.35); transition: all 0.2s; margin-bottom: 18px;
  }
  .hs-download-btn:hover { background: var(--teal-dark); transform: translateY(-2px); box-shadow: 0 14px 32px rgba(42,157,143,0.4); }
  .hs-download-meta { display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap; }
  .hs-download-meta-item { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--gray); font-weight: 500; }
  .hs-download-meta-item svg { color: var(--teal); width: 14px; height: 14px; }
  .hs-version-badge { display: inline-block; background: var(--teal-pale); color: var(--teal-dark); font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-bottom: 24px; }
  .hs-qr-section { margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--gray-light); display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .hs-qr-label { font-size: 0.82rem; color: var(--gray); font-weight: 500; }
  .hs-qr-box { width: 100px; height: 100px; background: var(--off-white); border-radius: 12px; border: 2px dashed var(--mint); display: flex; align-items: center; justify-content: center; color: var(--gray); font-size: 0.68rem; font-weight: 500; text-align: center; padding: 8px; }

  /* FOOTER */
  .hs-footer { background: var(--navy); padding: 48px 6% 32px; color: rgba(255,255,255,0.5); }
  .hs-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
  .hs-footer-logo { display: flex; align-items: center; gap: 10px; }
  .hs-footer-logo-icon { width: 32px; height: 32px; background: rgba(42,157,143,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
  .hs-footer-logo-text { font-family: 'DM Serif Display', serif; font-size: 1.15rem; color: rgba(255,255,255,0.85); }
  .hs-footer-logo-text span { color: var(--teal-light); }
  .hs-footer-copy { font-size: 0.8rem; text-align: center; }
  .hs-footer-tagline { font-size: 0.78rem; font-style: italic; color: rgba(255,255,255,0.3); }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .hs-hero-inner { grid-template-columns: 1fr; text-align: center; }
    .hs-hero-desc { margin: 0 auto 36px; }
    .hs-hero-actions { justify-content: center; }
    .hs-hero-stats { justify-content: center; }
    .hs-features-grid { grid-template-columns: 1fr 1fr; }

    /* Show phone mockup below text, scaled up for mobile */
    .hs-hero-visual { display: flex; margin-top: 48px; }
    .hs-float-card { display: none; }
    .hs-phone-outer { width: 300px; }
    .hs-phone-screen { padding: 22px 18px 18px; gap: 14px; }
    .hs-phone-app-icon { width: 52px; height: 52px; border-radius: 15px; }
    .hs-phone-app-icon svg { width: 26px; height: 26px; }
    .hs-phone-greeting h3 { font-size: 1.15rem; }
    .hs-phone-greeting p { font-size: 0.65rem; }
    .hs-phone-card-label { font-size: 0.6rem; }
    .hs-glucose-val { font-size: 2rem; }
    .hs-glucose-unit { font-size: 0.58rem; }
    .hs-glucose-badge { font-size: 0.55rem; padding: 4px 10px; }
    .hs-mini-bars { height: 32px; }
    .hs-metric-mini { padding: 10px; }
    .hs-metric-mini-label { font-size: 0.55rem; }
    .hs-metric-mini-val { font-size: 0.9rem; }
    .hs-metric-mini-sub { font-size: 0.5rem; }
  }

  @media (max-width: 600px) {
    .hs-nav ul { display: none; }
    .hs-features-grid { grid-template-columns: 1fr; }
    .hs-download-card { padding: 36px 24px; }
    .hs-phone-outer { width: 260px; }
    .hs-phone-screen { padding: 18px 14px 14px; gap: 11px; }
    .hs-phone-greeting h3 { font-size: 1rem; }
    .hs-glucose-val { font-size: 1.7rem; }
    .hs-metric-mini-val { font-size: 0.78rem; }
  }
`;

export default function Home() {
  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="hs-nav">
        <a href="#" className="hs-logo">
          <div className="hs-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <span className="hs-logo-text">Health<span>Synq</span></span>
        </a>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download" className="hs-nav-cta">Download App</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hs-hero">
        <div className="hs-hero-bg" />
        <div className="hs-hero-grid" />
        <div className="hs-hero-inner">
          <div className="hs-hero-content">
            <div className="hs-hero-badge">
              <div className="hs-badge-dot" />
              Smart Health Monitoring
            </div>
            <h1 className="hs-hero-title">
              Your Health,<br /><em>Intelligently</em><br />Monitored
            </h1>
            <p className="hs-hero-desc">
              HealthSynq integrates with your smartwatch to track vitals in real-time, generate personalised daily diet plans, and provide specialised monitoring for diabetic users — all in one platform.
            </p>
            <div className="hs-hero-actions">
              <a href="#download" className="hs-btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16l-4-4h8l-4 4z" /><path d="M12 12V4" /><rect x="2" y="18" width="20" height="3" rx="1.5" />
                </svg>
                Download APK
              </a>
              <a href="#features" className="hs-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Explore Features
              </a>
            </div>
            <div className="hs-hero-stats">
              <div className="hs-stat">
                <span className="hs-stat-num">Live</span>
                <span className="hs-stat-label">Vitals Tracking</span>
              </div>
              <div className="hs-stat-divider" />
              <div className="hs-stat">
                <span className="hs-stat-num">AI</span>
                <span className="hs-stat-label">Diet Planning</span>
              </div>
              <div className="hs-stat-divider" />
              <div className="hs-stat">
                <span className="hs-stat-num">24/7</span>
                <span className="hs-stat-label">Glucose Monitoring</span>
              </div>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="hs-hero-visual">
            <div className="hs-phone-wrap">
              <div className="hs-float-card hs-float-card-1">
                <div className="hs-float-icon green">🩺</div>
                <div>
                  <div className="hs-float-text-title">Diet Adjusted</div>
                  <div className="hs-float-text-sub">Based on today's intake</div>
                </div>
              </div>
              <div className="hs-float-card hs-float-card-2">
                <div className="hs-float-icon blue">⌚</div>
                <div>
                  <div className="hs-float-text-title">Watch Synced</div>
                  <div className="hs-float-text-sub">All vitals up to date</div>
                </div>
              </div>
              <div className="hs-phone-outer">
                <div className="hs-phone-screen">
                  <div className="hs-phone-status">
                    <span>9:41</span>
                    <span>▐▌▌▌ 78%</span>
                  </div>
                  <div className="hs-phone-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="hs-phone-greeting">
                    <h3>Good morning, Saksham</h3>
                    <p>Here's your health summary</p>
                  </div>
                  <div className="hs-phone-card">
                    <div className="hs-phone-card-label">Blood Glucose</div>
                    <div className="hs-glucose-row">
                      <div>
                        <div className="hs-glucose-val">98</div>
                        <div className="hs-glucose-unit">mg/dL</div>
                      </div>
                      <div className="hs-glucose-badge">NORMAL</div>
                    </div>
                    <div className="hs-mini-bars">
                      {[['active','60%'],['active','75%'],['active','55%'],['','90%'],['','70%'],['','65%'],['','80%']].map(([cls, h], i) => (
                        <div key={i} className={`hs-mini-bar ${cls}`} style={{ height: h }} />
                      ))}
                    </div>
                  </div>
                  <div className="hs-phone-metrics">
                    {[
                      ['Calories Today', '1,240', '↑ On target'],
                      ['Heart Rate', '72 bpm', '✓ Normal'],
                      ['Steps', '6,430', '↗ +12%'],
                      ['Water', '1.8 L', '↑ Good'],
                    ].map(([label, val, sub]) => (
                      <div key={label} className="hs-metric-mini">
                        <div className="hs-metric-mini-label">{label}</div>
                        <div className="hs-metric-mini-val">{val}</div>
                        <div className="hs-metric-mini-sub">{sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="hs-features">
        <div className="hs-section-header">
          <div className="hs-section-tag">Core Features</div>
          <h2 className="hs-section-title">Everything your health needs, in one place</h2>
          <p className="hs-section-sub">From smartwatch integration to AI-powered diet management — HealthSynq is built for proactive, data-driven wellness.</p>
        </div>
        <div className="hs-features-grid">
          {[
            { icon: '🩸', title: 'Diabetic-First Monitoring', desc: 'Specialised glucose tracking and diet planning for diabetic and pre-diabetic users. Every meal recommendation prioritises blood sugar stability and metabolic health.', highlight: true },
            { icon: '⌚', title: 'Smartwatch Integration', desc: 'Seamlessly sync with your smartwatch to get real-time data on calories burned, heart rate, steps, and other vital health parameters.' },
            { icon: '🥗', title: 'AI Daily Diet Plans', desc: 'Receive a fresh, personalised diet plan every day based on your health profile, activity level, and progress towards your target goals.' },
            { icon: '🔔', title: 'Smart Intake Alerts', desc: 'Get notified when you under-eat or over-eat. HealthSynq automatically adjusts your upcoming meal plans to keep you on track.' },
            { icon: '🎯', title: 'Goal-Based Planning', desc: 'Set your health targets — weight loss, muscle gain, blood sugar control — and get a complete roadmap tailored specifically to you.' },
            { icon: '🤖', title: 'Health Chatbot', desc: 'Ask questions, get dietary advice, or understand your health data through a conversational AI assistant available right inside the app.' },
          ].map(({ icon, title, desc, highlight }) => (
            <div key={title} className={`hs-feature-card${highlight ? ' highlight' : ''}`}>
              <div className="hs-feature-icon">{icon}</div>
              <div className="hs-feature-title">{title}</div>
              <p className="hs-feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="hs-download">
        <div className="hs-download-bg" />
        <div className="hs-download-inner">
          <div className="hs-section-tag">Get the App</div>
          <h2 className="hs-section-title">Start monitoring your health today</h2>
          <p className="hs-section-sub">Download the HealthSynq APK directly to your Android device. No app store needed.</p>
          <div className="hs-download-card">
            <div className="hs-download-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="10" x2="12" y2="16" />
                <polyline points="9,13 12,16 15,13" />
              </svg>
            </div>
            <div className="hs-version-badge">Android APK · v1.0.0</div>
            <div className="hs-download-title">HealthSynq for Android</div>
            <p className="hs-download-sub">Compatible with Android 8.0 and above. Enable "Install from unknown sources" in your device settings before installing.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <a href="#" className="hs-download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16l-4-4h8l-4 4z" /><path d="M12 12V4" /><rect x="2" y="18" width="20" height="3" rx="1.5" />
                </svg>
                Download APK (Free)
              </a>
            </div>
            <div className="hs-download-meta">
              {['Free to download', 'No account required to install', 'Android 8.0+'].map(text => (
                <div key={text} className="hs-download-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {text}
                </div>
              ))}
            </div>
            <div className="hs-qr-section">
              <div className="hs-qr-label">Or scan to open this page on your phone</div>
              <div className="hs-qr-box">QR Code<br />(add yours here)</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gray)' }}>Scan → Visit Website → Download</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hs-footer">
        <div className="hs-footer-inner">
          <div className="hs-footer-logo">
            <div className="hs-footer-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(77,182,172,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span className="hs-footer-logo-text">Health<span>Synq</span></span>
          </div>
          <div className="hs-footer-copy">© 2025 HealthSynq · Final Year Project</div>
          <div className="hs-footer-tagline">Smart health for every body.</div>
        </div>
      </footer>
    </>
  );
}
