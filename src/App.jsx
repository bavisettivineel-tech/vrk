import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Globe, Smartphone, Cloud, BarChart3, TrendingUp, Settings,
  ChevronRight, Mail, Phone, MapPin, MessageCircle, Star, ArrowRight,
  CheckCircle, Users, Award, Zap, Shield, Code2, Layers
} from "lucide-react";
import logo from "./assets/logo.jpg";
import "./index.css";

/* ─── REVEAL HOOK ─── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Home","Services","About","Testimonials","Contact"];
  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav role="navigation" aria-label="Main Navigation" style={{
      position: "fixed", top: 0, width: "100%", zIndex: 1000,
      background: scrolled ? "rgba(10,15,30,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      transition: "all 0.4s ease", padding: "0 24px"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <img src={logo} alt="VRK Solutions" style={{ height: 44, width: "auto", objectFit: "contain" }} />

        {/* Desktop Nav */}
        <ul className="nav-desktop" style={{ gap: 36, listStyle: "none", alignItems: "center" }}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} style={{
                background: "none", border: "none", color: "var(--gray-light)",
                fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.85rem",
                letterSpacing: "0.5px", cursor: "pointer", transition: "color 0.3s",
                padding: "4px 0"
              }}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = "var(--gray-light)"}
              >{l}</button>
            </li>
          ))}
          <li><a href="https://wa.me/919398845947" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.82rem" }}>Get Quote</a></li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", color: "var(--gold)", cursor: "pointer", alignItems: "center", justifyContent: "center" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "rgba(10,15,30,0.98)", padding: "20px 24px 30px",
          borderTop: "1px solid var(--border)", backdropFilter: "blur(16px)"
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", color: "var(--gray-light)",
              fontFamily: "Montserrat, sans-serif", fontWeight: 600,
              fontSize: "1rem", padding: "14px 0", cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}>{l}</button>
          ))}
          <a href="https://wa.me/919398845947" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>Get Free Quote</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="home" aria-label="VRK Solutions - Digital Agency Kakinada" itemScope itemType="https://schema.org/WPHeader" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(135deg, #0A0F1E 0%, #0D1530 50%, #0A0F1E 100%)",
      position: "relative", overflow: "hidden", paddingTop: 72
    }}>
      {/* BG grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 50, padding: "8px 20px", marginBottom: 32 }} className="animate-fadeInUp">
            <Zap size={14} color="var(--gold)" />
            <span style={{ fontFamily: "Montserrat", fontSize: "0.78rem", fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase" }}>Digital Agency · Kakinada, AP</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", fontWeight: 900, lineHeight: 1.08, marginBottom: 28 }} className="animate-fadeInUp">
            We <span className="shimmer-text">Build.</span><br />
            We <span className="shimmer-text">Scale.</span><br />
            We <span className="shimmer-text">Dominate.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "var(--gray-light)", maxWidth: 560, lineHeight: 1.8, marginBottom: 44 }} className="animate-fadeInUp">
            VRK Solutions crafts powerful digital experiences — from blazing-fast websites to enterprise ERP systems — that turn your vision into unstoppable growth.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="animate-fadeInUp">
            <a href="https://wa.me/919398845947?text=Hi%20VRK%20Solutions!%20I%20want%20a%20free%20consultation." target="_blank" rel="noreferrer" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </a>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[["30+","Projects Delivered"],["20+","Happy Clients"],["6+","Services Offered"],["100%","Client Satisfaction"]].map(([n, l]) => (
              <div key={l} className="animate-fadeInUp">
                <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, fontFamily: "Montserrat" }} className="gold-text">{n}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--gray)", fontWeight: 500, letterSpacing: 0.5, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — desktop only via CSS class */}
      <div className="animate-float hero-badge" style={{
        position: "absolute", right: "8%", top: "35%",
        background: "linear-gradient(135deg, var(--navy-light), var(--card-bg))",
        border: "1px solid var(--border)", borderRadius: 16, padding: "20px 28px",
        flexDirection: "column", gap: 6, boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
      }}>
        <div style={{ display: "flex", gap: 4 }}>{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}</div>
        <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.1rem", color: "var(--white)" }}>5.0 Rating</div>
        <div style={{ fontSize: "0.72rem", color: "var(--gray)", fontWeight: 500 }}>Trusted by Clients</div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, var(--gold), transparent)", animation: "fadeInUp 2s ease infinite" }} />
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  useReveal();
  const services = [
    { icon: Globe, title: "Website Development", desc: "Lightning-fast, SEO-ready websites built with modern tech. From landing pages to complex portals — we craft digital destinations that convert visitors into clients.", tags: ["React","Next.js","WordPress"] },
    { icon: Smartphone, title: "App Development", desc: "Native & cross-platform mobile apps engineered for performance. iOS, Android, and PWA solutions that your users will love using every day.", tags: ["React Native","Flutter","PWA"] },
    { icon: Cloud, title: "SaaS Applications", desc: "Scalable cloud-based software products with subscription models. We build the SaaS platforms that power modern businesses end-to-end.", tags: ["Node.js","Supabase","MongoDB"] },
    { icon: Layers, title: "ERP Systems", desc: "Comprehensive Enterprise Resource Planning systems that unify your operations — from inventory and HR to finance and CRM — in one powerful platform.", tags: ["Custom ERP","Automation","Dashboards"] },
    { icon: TrendingUp, title: "SEO Optimization", desc: "Dominate Google search results with data-driven SEO strategies. We boost your organic traffic, visibility, and lead generation systematically.", tags: ["On-Page","Link Building","Analytics"] },
    { icon: BarChart3, title: "Digital Marketing", desc: "Full-stack digital marketing — Google Ads, Meta Ads, social media management, and content strategy — to scale your brand and ROI aggressively.", tags: ["Google Ads","Meta Ads","Social Media"] },
  ];
  return (
    <section id="services" aria-label="Our Services - Website Development, App Development, ERP, SaaS, SEO, Digital Marketing" className="section-pad" style={{ background: "var(--navy-mid)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label reveal">What We Do</span>
          <h2 className="section-title reveal" style={{ maxWidth: 600, margin: "0 auto 20px" }}>
            Services Built to <span className="gold-text">Dominate</span> Markets
          </h2>
          <p style={{ color: "var(--gray)", maxWidth: 540, margin: "0 auto", lineHeight: 1.8 }} className="reveal">
            Six specialized services. One mission: make your business unstoppable in the digital world.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <div key={title} className="reveal" style={{
              background: "var(--card-bg)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "36px 32px", transition: "all 0.3s ease",
              cursor: "default", position: "relative", overflow: "hidden",
              transitionDelay: `${i * 0.08}s`
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(201,168,76,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
              <div style={{ width: 54, height: 54, borderRadius: 12, background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: "1px solid rgba(201,168,76,0.2)" }}>
                <Icon size={24} color="var(--gold)" />
              </div>
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.15rem", marginBottom: 14, color: "var(--white)" }}>{title}</h3>
              <p style={{ color: "var(--gray)", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 24 }}>{desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {tags.map(t => (
                  <span key={t} style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "var(--gold)", fontSize: "0.7rem", fontWeight: 600, fontFamily: "Montserrat", padding: "4px 12px", borderRadius: 50, letterSpacing: 0.5 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const points = [
    { icon: Shield, t: "Reliability First", d: "We deliver on time, every time. No excuses, no delays." },
    { icon: Code2, t: "Modern Tech Stack", d: "React, Node.js, Supabase, MongoDB — cutting-edge tools only." },
    { icon: Users, t: "Client-Centric", d: "Your success is our KPI. We measure our work by your growth." },
    { icon: Award, t: "Quality Guaranteed", d: "Every project undergoes rigorous testing before delivery." },
  ];
  return (
    <section id="about" className="section-pad" style={{ background: "var(--navy)", position: "relative" }}>
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <span className="section-label reveal">Who We Are</span>
            <h2 className="section-title reveal">
              The Digital Partner<br />Your Business <span className="gold-text">Deserves</span>
            </h2>
            <div className="gold-divider reveal" />
            <p style={{ color: "var(--gray-light)", lineHeight: 1.9, marginBottom: 20, fontSize: "0.95rem" }} className="reveal">
              VRK Solutions is a results-driven digital agency headquartered in Kakinada, Andhra Pradesh. We exist to bridge the gap between ambitious businesses and the digital solutions they need to thrive.
            </p>
            <p style={{ color: "var(--gray)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.95rem" }} className="reveal">
              From startups finding their first customers to established enterprises scaling operations — we engineer digital solutions that create real, measurable impact. Our team combines technical excellence with creative vision to build products your customers will love.
            </p>
            <a href="https://wa.me/919398845947?text=Hi!%20I%20want%20to%20know%20more%20about%20VRK%20Solutions." target="_blank" rel="noreferrer" className="btn-primary reveal">
              Talk to Us <ArrowRight size={16} />
            </a>
          </div>
          {/* Right */}
          <div className="about-points-grid">
            {points.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="reveal" style={{
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: 12, padding: "28px 24px", transition: "all 0.3s ease",
                transitionDelay: `${i * 0.1}s`
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "rgba(201,168,76,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--card-bg)"; }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={20} color="var(--gold)" />
                </div>
                <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.9rem", marginBottom: 8, color: "var(--white)" }}>{t}</h4>
                <p style={{ color: "var(--gray)", fontSize: "0.8rem", lineHeight: 1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const reviews = [
    { name: "Ravi Kumar Reddy", role: "Owner, TechMart Vijayawada", stars: 5, text: "VRK Solutions built our e-commerce website from scratch. The quality, speed, and attention to detail were outstanding. Our online sales increased by 3x within two months of launch!" },
    { name: "Priya Sharma", role: "CEO, GrowFast Startups", stars: 5, text: "Their SEO and Google Ads work transformed our business. We went from zero online presence to ranking #1 for our target keywords. Absolutely professional team!" },
    { name: "Suresh Babu", role: "Director, Coastal Logistics", stars: 5, text: "The ERP system VRK Solutions built for us replaced 5 different tools. Everything is now integrated — inventory, HR, accounts. Best investment we made this year." },
    { name: "Ananya Patel", role: "Founder, FreshFarm App", stars: 5, text: "Our mobile app was delivered on time and looked stunning. The team communicated perfectly throughout. Highly recommend VRK Solutions to anyone serious about going digital." },
    { name: "Mohammed Ali", role: "Manager, SkyView Hotels", stars: 5, text: "Meta Ads campaign managed by VRK Solutions gave us 400% ROI in the first month. They know exactly how to target the right audience. Incredibly talented team!" },
    { name: "Lakshmi Devi", role: "Principal, Sunrise Academy", stars: 5, text: "Our school website and admission portal is now fully digital thanks to VRK Solutions. Parents love the new system. Professional, responsive, and affordable service." },
  ];
  return (
    <section id="testimonials" className="section-pad" style={{ background: "var(--navy-mid)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label reveal">Client Voices</span>
          <h2 className="section-title reveal">
            What Our Clients <span className="gold-text">Say</span>
          </h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map(({ name, role, stars, text }, i) => (
            <div key={name} className="reveal" style={{
              background: "var(--card-bg)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "32px 28px", position: "relative",
              transition: "all 0.3s ease", transitionDelay: `${i * 0.08}s`
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "absolute", top: 20, right: 24, fontSize: "3rem", color: "rgba(201,168,76,0.1)", fontFamily: "Georgia", lineHeight: 1 }}>"</div>
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array(stars).fill(0).map((_, j) => <Star key={j} size={15} fill="var(--gold)" color="var(--gold)" />)}
              </div>
              <p style={{ color: "var(--gray-light)", lineHeight: 1.8, fontSize: "0.88rem", marginBottom: 28, fontStyle: "italic" }}>"{text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--gold), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat", fontWeight: 800, fontSize: "1rem", color: "var(--navy)", flexShrink: 0 }}>
                  {name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.9rem", color: "var(--white)" }}>{name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray)", marginTop: 2 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    const { name, phone, service, message } = form;
    if (!name || !phone) { alert("Please fill in your name and phone number."); return; }
    const text = `Hi VRK Solutions!%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${form.email}%0A*Service:* ${service}%0A*Message:* ${message || "I want a consultation."}`;
    window.open(`https://wa.me/919398845947?text=${text}`, "_blank");
  };
  const inputStyle = {
    width: "100%", background: "var(--navy)", border: "1px solid var(--border)",
    borderRadius: 8, padding: "14px 18px", color: "var(--white)",
    fontFamily: "Inter, sans-serif", fontSize: "0.9rem", outline: "none",
    transition: "border-color 0.3s ease"
  };
  const labelStyle = {
    display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--gray)",
    marginBottom: 8, fontFamily: "Montserrat", letterSpacing: 0.5, textTransform: "uppercase"
  };
  return (
    <section id="contact" className="section-pad" style={{ background: "var(--navy)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="section-title reveal">
            Ready to <span className="gold-text">Dominate</span> Digitally?
          </h2>
          <p style={{ color: "var(--gray)", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }} className="reveal">
            Tell us about your project. We'll get back to you within 2 hours with a free consultation plan.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div>
            <h3 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.4rem", marginBottom: 32, color: "var(--white)" }} className="reveal">Contact Information</h3>
            {[
              { icon: Phone, label: "WhatsApp / Call", val: "+91 93988 45947", href: "https://wa.me/919398845947" },
              { icon: Mail, label: "Email", val: "vrksolutionsinfo@gmail.com", href: "mailto:vrksolutionsinfo@gmail.com" },
              { icon: MapPin, label: "Location", val: "Kakinada, Andhra Pradesh, India", href: null },
            ].map(({ icon: Icon, label, val, href }) => (
              <div key={label} className="reveal" style={{ display: "flex", gap: 18, marginBottom: 32 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(201,168,76,0.1)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray)", fontWeight: 600, letterSpacing: 0.5, marginBottom: 4, textTransform: "uppercase", fontFamily: "Montserrat" }}>{label}</div>
                  {href
                    ? <a href={href} style={{ color: "var(--gray-light)", textDecoration: "none", fontSize: "0.92rem", fontWeight: 500, transition: "color 0.3s" }}
                        onMouseEnter={e => e.target.style.color = "var(--gold)"}
                        onMouseLeave={e => e.target.style.color = "var(--gray-light)"}
                      >{val}</a>
                    : <span style={{ color: "var(--gray-light)", fontSize: "0.92rem" }}>{val}</span>}
                </div>
              </div>
            ))}
            <div className="reveal" style={{ marginTop: 16, padding: "28px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12 }}>
              <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.9rem", marginBottom: 8, color: "var(--gold)" }}>Free Consultation</div>
              <p style={{ color: "var(--gray)", fontSize: "0.82rem", lineHeight: 1.7 }}>We offer a free 30-minute consultation for all new projects. No commitment required.</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 16, padding: "44px 40px" }}>
            <div className="contact-form-row">
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Ravi Kumar" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--gold)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--gold)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"} />
              </div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Service Required</label>
              <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}>
                <option value="">Select a service...</option>
                <option>Website Development</option>
                <option>App Development</option>
                <option>SaaS Application</option>
                <option>ERP System</option>
                <option>SEO Optimization</option>
                <option>Digital Marketing</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Tell Us About Your Project</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Brief description of your project..." rows={4} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"} />
            </div>
            <button onClick={handleSubmit} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "16px" }}>
              <MessageCircle size={18} /> Send via WhatsApp
            </button>
            <p style={{ textAlign: "center", color: "var(--gray)", fontSize: "0.75rem", marginTop: 14 }}>Your message will open in WhatsApp. We respond within 2 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ SECTION ─── */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What services does VRK Solutions offer?", a: "VRK Solutions offers Website Development, Mobile App Development, SaaS Application Development, ERP System Development, SEO Optimization, and Digital Marketing including Google Ads and Meta Ads management. We serve businesses across Kakinada, East Godavari, Vizag, and all of Andhra Pradesh." },
    { q: "Where is VRK Solutions located?", a: "VRK Solutions is located in Kakinada, Andhra Pradesh, India (Coordinates: 16.9891°N, 82.2475°E). We serve clients across East Godavari district, Rajahmundry, Vizag, Hyderabad and remotely across India." },
    { q: "How much does a website cost at VRK Solutions?", a: "Website development costs at VRK Solutions vary based on requirements. We offer affordable packages for small businesses, startups, and enterprises. Contact us on WhatsApp at +91 93988 45947 for a free quote." },
    { q: "Does VRK Solutions build mobile apps?", a: "Yes! VRK Solutions builds native and cross-platform mobile apps for iOS and Android using React Native and Flutter. We also build Progressive Web Apps (PWAs) for businesses across Andhra Pradesh." },
    { q: "Does VRK Solutions develop ERP systems?", a: "Yes, VRK Solutions builds fully custom ERP (Enterprise Resource Planning) systems including inventory management, HR management, finance, CRM, and operations modules for businesses in Kakinada and across India." },
    { q: "What is a SaaS application and does VRK Solutions build them?", a: "SaaS (Software as a Service) applications are cloud-based software products accessed via subscription. Yes, VRK Solutions designs and builds scalable SaaS platforms for startups and enterprises using modern tech like React, Node.js, Supabase, and MongoDB." },
    { q: "Does VRK Solutions provide SEO services in Kakinada?", a: "Yes, VRK Solutions provides complete SEO (Search Engine Optimization) services in Kakinada including on-page SEO, technical SEO, local SEO, link building, and Google Search Console setup to help your business rank #1 on Google." },
    { q: "How can I contact VRK Solutions?", a: "You can contact VRK Solutions via WhatsApp at +91 93988 45947, email at vrksolutionsinfo@gmail.com, or fill the contact form on our website. We respond within 2 hours on business days." },
  ];
  return (
    <section id="faq" className="section-pad" style={{ background: "var(--navy-mid)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label reveal">FAQ</span>
          <h2 className="section-title reveal">Frequently Asked <span className="gold-text">Questions</span></h2>
          <p style={{ color: "var(--gray)", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }} className="reveal">
            Everything you need to know about VRK Solutions and our digital services in Kakinada, Andhra Pradesh.
          </p>
        </div>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="reveal" style={{
              border: "1px solid var(--border)", borderRadius: 10, marginBottom: 12,
              background: open === i ? "rgba(201,168,76,0.04)" : "var(--card-bg)",
              transition: "all 0.3s ease", overflow: "hidden",
              transitionDelay: `${i * 0.05}s`
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "22px 28px", background: "none", border: "none", cursor: "pointer",
                textAlign: "left", gap: 16
              }}>
                <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.95rem", color: open === i ? "var(--gold)" : "var(--white)", lineHeight: 1.4 }}>{q}</span>
                <span style={{ color: "var(--gold)", fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 28px 24px", color: "var(--gray-light)", lineHeight: 1.8, fontSize: "0.88rem" }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const services = ["Website Development","App Development","SaaS Applications","ERP Systems","SEO Optimization","Digital Marketing"];
  return (
    <footer style={{ background: "#060A14", borderTop: "1px solid var(--border)", padding: "64px 0 0" }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={logo} alt="VRK Solutions" style={{ height: 48, width: "auto", marginBottom: 24, objectFit: "contain" }} />
            <p style={{ color: "var(--gray)", lineHeight: 1.8, fontSize: "0.88rem", maxWidth: 300, marginBottom: 28 }}>
              Building digital futures for businesses across Andhra Pradesh and beyond. We build. We scale. We dominate.
            </p>
            <a href="https://wa.me/919398845947" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--gold)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", fontFamily: "Montserrat" }}>
              <MessageCircle size={16} /> +91 93988 45947
            </a>
          </div>
          <div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1, color: "var(--white)", marginBottom: 24, textTransform: "uppercase" }}>Services</h4>
            <ul style={{ listStyle: "none" }}>
              {services.map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <span style={{ color: "var(--gray)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                    <ChevronRight size={12} color="var(--gold)" />{s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1, color: "var(--white)", marginBottom: 24, textTransform: "uppercase" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <a href="mailto:vrksolutionsinfo@gmail.com" style={{ color: "var(--gray)", fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Mail size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} />vrksolutionsinfo@gmail.com
              </a>
              <span style={{ color: "var(--gray)", fontSize: "0.85rem", display: "flex", alignItems: "flex-start", gap: 10 }}>
                <MapPin size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} />Kakinada, Andhra Pradesh, India
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ color: "var(--gray)", fontSize: "0.8rem" }}>© 2026 VRK Solutions. All rights reserved.</p>
          <p style={{ color: "var(--gray)", fontSize: "0.8rem" }}>Crafted with excellence in Kakinada, AP</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FLOAT ─── */
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919398845947?text=Hi%20VRK%20Solutions!%20I%20want%20a%20free%20consultation." target="_blank" rel="noreferrer"
      style={{
        position: "fixed", bottom: 30, right: 30, zIndex: 9999,
        width: 60, height: 60, borderRadius: "50%",
        background: "linear-gradient(135deg, #25D366, #1DA851)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 6px 30px rgba(37,211,102,0.45)",
        animation: "wa-pulse 2.5s ease-in-out infinite",
        textDecoration: "none"
      }}>
      <MessageCircle size={28} color="white" fill="white" />
      <style>{`
        @keyframes wa-pulse {
          0%,100% { box-shadow: 0 6px 30px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4); }
          50% { box-shadow: 0 6px 30px rgba(37,211,102,0.45), 0 0 0 14px rgba(37,211,102,0); }
        }
      `}</style>
    </a>
  );
}

/* ─── APP ─── */
export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
