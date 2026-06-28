import { useState, useEffect } from "react";
import {
  Menu, X, Globe, Smartphone, Cloud, BarChart3, TrendingUp,
  ChevronRight, Mail, MapPin, MessageCircle, Star, ArrowRight,
  Users, Award, Zap, Shield, Code2, Layers
} from "lucide-react";
import logo from "./assets/logo.jpg";
import "./index.css";

/* ── SCROLL REVEAL ── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ════════════════════════════════════════
   NAVBAR
════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home", "Services", "About", "Testimonials", "FAQ", "Contact"];
  const go = id => { setOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav role="navigation" aria-label="Main Navigation" style={{
      position: "fixed", top: 0, width: "100%", zIndex: 1000,
      background: scrolled ? "rgba(10,15,30,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      transition: "all .4s ease"
    }}>
      <div className="nav-inner">
        <a href="/" aria-label="VRK Solutions Home">
          <img src={logo} alt="VRK Solutions Logo - Digital Agency Kakinada" style={{ height: 44, width: "auto", objectFit: "contain", display: "block" }} />
        </a>
        <ul className="nav-links" role="list">
          {links.map(l => (
            <li key={l}>
              <button className="nav-link-btn" onClick={() => go(l)} aria-label={`Go to ${l}`}>{l}</button>
            </li>
          ))}
          <li>
            <a href="https://wa.me/919398845947" target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ padding: "10px 24px", fontSize: ".82rem" }}
              aria-label="Get a free quote from VRK Solutions">
              Get Quote
            </a>
          </li>
        </ul>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile-menu" role="menu">
          {links.map(l => (
            <button key={l} className="nav-mobile-btn" onClick={() => go(l)} role="menuitem">{l}</button>
          ))}
          <a href="https://wa.me/919398845947" target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
function Hero() {
  return (
    <section id="home" aria-label="VRK Solutions - Top Digital Agency in Kakinada, Andhra Pradesh"
      itemScope itemType="https://schema.org/WPHeader"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg,#0A0F1E 0%,#0D1530 50%,#0A0F1E 100%)",
        position: "relative", overflow: "hidden", paddingTop: 72
      }}>

      {/* BG grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Glow orbs */}
      <div aria-hidden="true" style={{ position:"absolute", top:"20%", right:"10%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"10%", left:"5%",  width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(74,158,255,.06) 0%,transparent 70%)",  pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1, width:"100%" }}>
        <div className="hero-content">
          {/* Badge */}
          <div className="animate-fadeInUp" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(201,168,76,.1)", border:"1px solid rgba(201,168,76,.3)", borderRadius:50, padding:"8px 20px", marginBottom:32 }}>
            <Zap size={14} color="var(--gold)" aria-hidden="true" />
            <span style={{ fontFamily:"Montserrat", fontSize:".78rem", fontWeight:700, letterSpacing:2, color:"var(--gold)", textTransform:"uppercase" }}>
              Digital Agency · Kakinada, Andhra Pradesh
            </span>
          </div>

          {/* H1 */}
          <h1 className="animate-fadeInUp" style={{ fontSize:"clamp(2.4rem,6vw,4.8rem)", fontWeight:900, lineHeight:1.08, marginBottom:28 }}>
            We <span className="shimmer-text">Build.</span><br />
            We <span className="shimmer-text">Scale.</span><br />
            We <span className="shimmer-text">Dominate.</span>
          </h1>

          {/* Sub */}
          <p className="animate-fadeInUp" style={{ fontSize:"clamp(1rem,2vw,1.18rem)", color:"var(--gray-light)", maxWidth:580, lineHeight:1.85, marginBottom:44 }}>
            VRK Solutions is a professional digital agency in Kakinada, Andhra Pradesh offering
            <strong style={{color:"var(--gold)"}}> Website Development</strong>,
            <strong style={{color:"var(--gold)"}}> App Development</strong>,
            <strong style={{color:"var(--gold)"}}> ERP Systems</strong>,
            <strong style={{color:"var(--gold)"}}> SaaS Applications</strong>,
            <strong style={{color:"var(--gold)"}}> SEO</strong> &amp;
            <strong style={{color:"var(--gold)"}}> Digital Marketing</strong> that turn your vision into unstoppable growth.
          </p>

          {/* CTAs */}
          <div className="hero-btns animate-fadeInUp">
            <a href="https://wa.me/919398845947?text=Hi%20VRK%20Solutions!%20I%20want%20a%20free%20consultation."
              target="_blank" rel="noopener noreferrer" className="btn-primary"
              aria-label="Start your project with VRK Solutions via WhatsApp">
              Start Your Project <ArrowRight size={16} aria-hidden="true" />
            </a>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior:"smooth" })}
              className="btn-outline" aria-label="Explore VRK Solutions services">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats animate-fadeInUp" role="list" aria-label="Company statistics">
            {[["30+","Projects Delivered"],["20+","Happy Clients"],["6+","Services Offered"],["100%","Client Satisfaction"]].map(([n,l]) => (
              <div key={l} role="listitem">
                <div style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, fontFamily:"Montserrat" }} className="gold-text">{n}</div>
                <div style={{ fontSize:".78rem", color:"var(--gray)", fontWeight:500, letterSpacing:.5, marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating rating badge — desktop only, hidden on tablet/mobile */}
      <div className="animate-float hero-badge-wrap" aria-hidden="true" style={{
        background:"linear-gradient(135deg,var(--navy-light),var(--card-bg))",
        border:"1px solid var(--border)", borderRadius:16, padding:"20px 28px",
        flexDirection:"column", gap:6, boxShadow:"0 20px 60px rgba(0,0,0,.5)"
      }}>
        <div style={{ display:"flex", gap:4 }}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="var(--gold)" color="var(--gold)"/>)}</div>
        <div style={{ fontFamily:"Montserrat", fontWeight:800, fontSize:"1.1rem", color:"var(--white)" }}>5.0 Rating</div>
        <div style={{ fontSize:".72rem", color:"var(--gray)", fontWeight:500 }}>Trusted by Clients</div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SERVICES
════════════════════════════════════════ */
function Services() {
  const services = [
    { icon: Globe,       title:"Website Development",  desc:"Lightning-fast, SEO-ready websites built with modern tech — React, Next.js, and WordPress. From landing pages to complex portals that convert visitors into paying clients.", tags:["React","Next.js","WordPress"] },
    { icon: Smartphone,  title:"App Development",       desc:"Native & cross-platform mobile apps for iOS and Android using React Native and Flutter. PWA solutions your users love every single day.", tags:["React Native","Flutter","PWA"] },
    { icon: Cloud,       title:"SaaS Applications",     desc:"Scalable cloud-based software products with subscription models. We build SaaS platforms that power modern businesses end-to-end on Node.js, Supabase & MongoDB.", tags:["Node.js","Supabase","MongoDB"] },
    { icon: Layers,      title:"ERP Systems",           desc:"Comprehensive Enterprise Resource Planning systems unifying inventory, HR, finance and CRM into one powerful, custom-built platform for your business.", tags:["Custom ERP","Automation","Dashboards"] },
    { icon: TrendingUp,  title:"SEO Optimization",      desc:"Dominate Google search results with data-driven SEO strategies. We boost organic traffic, local search visibility and lead generation systematically.", tags:["On-Page SEO","Link Building","Analytics"] },
    { icon: BarChart3,   title:"Digital Marketing",     desc:"Full-stack digital marketing — Google Ads, Meta Ads, social media management and content strategy — to scale your brand and ROI aggressively.", tags:["Google Ads","Meta Ads","Social Media"] },
  ];

  return (
    <section id="services" aria-label="VRK Solutions Services" className="section-pad"
      style={{ background:"var(--navy-mid)", position:"relative", overflow:"hidden" }}>
      <div aria-hidden="true" style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,var(--gold),transparent)" }} />
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:70 }}>
          <span className="section-label reveal">What We Do</span>
          <h2 className="section-title reveal" style={{ maxWidth:640, margin:"0 auto 20px" }}>
            Services Built to <span className="gold-text">Dominate</span> Markets
          </h2>
          <p style={{ color:"var(--gray)", maxWidth:540, margin:"0 auto", lineHeight:1.8 }} className="reveal">
            Six specialised digital services. One mission — make your business unstoppable online.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon:Icon, title, desc, tags }, i) => (
            <article key={title} className="service-card reveal" itemScope itemType="https://schema.org/Service"
              style={{ transitionDelay:`${i*.08}s` }}>
              <div aria-hidden="true" style={{ position:"absolute", top:0, right:0, width:80, height:80, background:"radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 70%)" }} />
              <div style={{ width:54, height:54, borderRadius:12, background:"linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.05))", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:24, border:"1px solid rgba(201,168,76,.2)" }}>
                <Icon size={24} color="var(--gold)" aria-hidden="true" />
              </div>
              <h3 itemProp="name" style={{ fontFamily:"Montserrat", fontWeight:800, fontSize:"1.12rem", marginBottom:14, color:"var(--white)" }}>{title}</h3>
              <p itemProp="description" style={{ color:"var(--gray)", lineHeight:1.75, fontSize:".9rem", marginBottom:24 }}>{desc}</p>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }} aria-label="Technologies used">
                {tags.map(t => (
                  <span key={t} style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(201,168,76,.2)", color:"var(--gold)", fontSize:".7rem", fontWeight:600, fontFamily:"Montserrat", padding:"4px 12px", borderRadius:50, letterSpacing:.5 }}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   ABOUT
════════════════════════════════════════ */
function About() {
  const points = [
    { icon:Shield, t:"Reliability First",    d:"We deliver on time, every time — no delays, no excuses." },
    { icon:Code2,  t:"Modern Tech Stack",    d:"React, Node.js, Supabase, MongoDB — cutting-edge tools only." },
    { icon:Users,  t:"Client-Centric",       d:"Your success is our KPI. We measure our work by your growth." },
    { icon:Award,  t:"Quality Guaranteed",   d:"Every project is rigorously tested before delivery." },
  ];
  return (
    <section id="about" aria-label="About VRK Solutions" className="section-pad"
      style={{ background:"var(--navy)" }} itemScope itemType="https://schema.org/Organization">
      <div className="container">
        <div className="about-grid">
          {/* Left text */}
          <div>
            <span className="section-label reveal">Who We Are</span>
            <h2 className="section-title reveal">
              The Digital Partner<br />Your Business <span className="gold-text">Deserves</span>
            </h2>
            <div className="gold-divider reveal" />
            <p style={{ color:"var(--gray-light)", lineHeight:1.9, marginBottom:20, fontSize:".95rem" }} className="reveal">
              <span itemProp="name">VRK Solutions</span> is a results-driven digital agency headquartered in
              <span itemProp="location"> Kakinada, Andhra Pradesh</span>. We bridge the gap between ambitious businesses
              and the digital solutions they need to thrive — from startups finding their first customers to enterprises scaling operations.
            </p>
            <p style={{ color:"var(--gray)", lineHeight:1.9, marginBottom:40, fontSize:".95rem" }} className="reveal">
              Our team combines technical excellence with creative vision. Whether you need a website developer in Kakinada,
              an app developer in Andhra Pradesh, a custom ERP system, or a full-scale digital marketing campaign —
              we deliver results that create real, measurable impact for your business.
            </p>
            <a href="https://wa.me/919398845947?text=Hi!%20I%20want%20to%20know%20more%20about%20VRK%20Solutions."
              target="_blank" rel="noopener noreferrer" className="btn-primary reveal"
              aria-label="Talk to VRK Solutions team on WhatsApp">
              Talk to Us <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Right cards */}
          <div className="about-cards">
            {points.map(({ icon:Icon, t, d }, i) => (
              <div key={t} className="about-card reveal" style={{ transitionDelay:`${i*.1}s` }}>
                <div style={{ width:42, height:42, borderRadius:10, background:"rgba(201,168,76,.1)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                  <Icon size={20} color="var(--gold)" aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".9rem", marginBottom:8, color:"var(--white)" }}>{t}</h4>
                <p style={{ color:"var(--gray)", fontSize:".8rem", lineHeight:1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TESTIMONIALS
════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { name:"Ravi Kumar Reddy",  role:"Owner, TechMart Vijayawada",    stars:5, text:"VRK Solutions built our e-commerce website from scratch. The quality, speed, and attention to detail were outstanding. Our online sales increased by 3x within two months of launch!" },
    { name:"Priya Sharma",      role:"CEO, GrowFast Startups",         stars:5, text:"Their SEO and Google Ads work transformed our business. We went from zero online presence to ranking #1 for our target keywords. Absolutely professional team!" },
    { name:"Suresh Babu",       role:"Director, Coastal Logistics",    stars:5, text:"The ERP system VRK Solutions built replaced 5 different tools. Everything is now integrated — inventory, HR, accounts. Best investment we made this year." },
    { name:"Ananya Patel",      role:"Founder, FreshFarm App",         stars:5, text:"Our mobile app was delivered on time and looked stunning. The team communicated perfectly throughout. Highly recommend VRK Solutions to anyone serious about going digital." },
    { name:"Mohammed Ali",      role:"Manager, SkyView Hotels",        stars:5, text:"Meta Ads campaign managed by VRK Solutions gave us 400% ROI in the first month. They know exactly how to target the right audience. Incredibly talented team!" },
    { name:"Lakshmi Devi",      role:"Principal, Sunrise Academy",     stars:5, text:"Our school website and admission portal is now fully digital thanks to VRK Solutions. Parents love the new system. Professional, responsive, and affordable service." },
  ];
  return (
    <section id="testimonials" aria-label="Client Testimonials" className="section-pad"
      style={{ background:"var(--navy-mid)", position:"relative", overflow:"hidden" }}>
      <div aria-hidden="true" style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,var(--gold),transparent)" }} />
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:70 }}>
          <span className="section-label reveal">Client Voices</span>
          <h2 className="section-title reveal">What Our Clients <span className="gold-text">Say</span></h2>
          <p style={{ color:"var(--gray)", maxWidth:480, margin:"0 auto", lineHeight:1.8 }} className="reveal">
            Real results from real businesses across Andhra Pradesh and beyond.
          </p>
        </div>
        <div className="testimonials-grid">
          {reviews.map(({ name, role, stars, text }, i) => (
            <div key={name} className="testimonial-card reveal" itemScope itemType="https://schema.org/Review"
              style={{ transitionDelay:`${i*.08}s` }}>
              <div aria-hidden="true" style={{ position:"absolute", top:20, right:24, fontSize:"3rem", color:"rgba(201,168,76,.1)", fontFamily:"Georgia", lineHeight:1 }}>"</div>
              <div style={{ display:"flex", gap:3, marginBottom:20 }} aria-label={`${stars} out of 5 stars`}>
                {Array(stars).fill(0).map((_,j)=><Star key={j} size={15} fill="var(--gold)" color="var(--gold)" aria-hidden="true"/>)}
              </div>
              <p itemProp="reviewBody" style={{ color:"var(--gray-light)", lineHeight:1.8, fontSize:".88rem", marginBottom:28, fontStyle:"italic" }}>"{text}"</p>
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <div aria-hidden="true" style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,var(--gold),var(--gold-dark))", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat", fontWeight:800, fontSize:"1rem", color:"var(--navy)", flexShrink:0 }}>
                  {name.charAt(0)}
                </div>
                <div>
                  <div itemProp="author" style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".9rem", color:"var(--white)" }}>{name}</div>
                  <div style={{ fontSize:".75rem", color:"var(--gray)", marginTop:2 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FAQ
════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q:"What services does VRK Solutions offer in Kakinada?",         a:"VRK Solutions offers Website Development, Mobile App Development, SaaS Application Development, ERP System Development, SEO Optimization, and Digital Marketing including Google Ads and Meta Ads — all from our base in Kakinada, Andhra Pradesh." },
    { q:"Where is VRK Solutions located?",                              a:"VRK Solutions is located in Kakinada, Andhra Pradesh, India (GPS: 16.9891°N, 82.2475°E). We serve clients across East Godavari, Rajahmundry, Vizag, Hyderabad and remotely across India." },
    { q:"How much does website development cost at VRK Solutions?",     a:"Website development pricing varies based on your requirements. We offer affordable packages for small businesses, startups and enterprises. Contact us via WhatsApp at +91 93988 45947 for a free, no-obligation quote." },
    { q:"Does VRK Solutions build mobile apps in Andhra Pradesh?",      a:"Yes! VRK Solutions builds native iOS and Android apps using React Native and Flutter, as well as Progressive Web Apps (PWAs) for businesses across Andhra Pradesh and India." },
    { q:"Does VRK Solutions develop custom ERP systems?",               a:"Yes. VRK Solutions builds fully custom ERP systems including inventory management, HR, finance, CRM and operations modules for businesses in Kakinada and across India." },
    { q:"Does VRK Solutions provide SEO services near me in Kakinada?", a:"Yes. VRK Solutions provides complete local and national SEO services — on-page SEO, technical SEO, Google Business Profile optimisation, link building and Google Search Console setup — to rank your business on top of Google." },
    { q:"What is the best digital agency near Kakinada, AP?",           a:"VRK Solutions is the top-rated digital agency in Kakinada, Andhra Pradesh offering website development, app development, ERP, SaaS, SEO and digital marketing services. Contact us at +91 93988 45947." },
    { q:"How do I contact VRK Solutions?",                              a:"You can reach VRK Solutions via WhatsApp at +91 93988 45947, by email at info@vrksolutions.in, or through the contact form on this website. We respond within 2 hours on business days." },
  ];
  return (
    <section id="faq" aria-label="Frequently Asked Questions about VRK Solutions" className="section-pad"
      style={{ background:"var(--navy-mid)", position:"relative" }} itemScope itemType="https://schema.org/FAQPage">
      <div aria-hidden="true" style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,var(--gold),transparent)" }} />
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:60 }}>
          <span className="section-label reveal">FAQ</span>
          <h2 className="section-title reveal">Frequently Asked <span className="gold-text">Questions</span></h2>
          <p style={{ color:"var(--gray)", maxWidth:500, margin:"0 auto", lineHeight:1.8 }} className="reveal">
            Everything you need to know about VRK Solutions' services in Kakinada, Andhra Pradesh.
          </p>
        </div>
        <div className="faq-wrap">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="reveal" itemScope itemType="https://schema.org/Question"
              style={{ border:"1px solid var(--border)", borderRadius:10, marginBottom:12, background:open===i?"rgba(201,168,76,.04)":"var(--card-bg)", transition:"all .3s ease", overflow:"hidden", transitionDelay:`${i*.05}s` }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                aria-expanded={open===i} aria-controls={`faq-ans-${i}`}
                style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"22px 28px", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:16 }}>
                <span itemProp="name" style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".95rem", color:open===i?"var(--gold)":"var(--white)", lineHeight:1.4 }}>{q}</span>
                <span aria-hidden="true" style={{ color:"var(--gold)", fontSize:"1.4rem", flexShrink:0, lineHeight:1 }}>{open===i?"−":"+"}</span>
              </button>
              {open===i && (
                <div id={`faq-ans-${i}`} itemScope itemType="https://schema.org/Answer"
                  style={{ padding:"0 28px 24px", color:"var(--gray-light)", lineHeight:1.8, fontSize:".88rem" }}>
                  <span itemProp="text">{a}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   CONTACT
════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", message:"" });
  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const submit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return; }
    const t = `Hi VRK Solutions!%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email || "Not provided"}%0A*Service:* ${form.service || "Not specified"}%0A*Message:* ${form.message || "I want a free consultation."}`;
    window.open(`https://wa.me/919398845947?text=${t}`, "_blank");
  };
  return (
    <section id="contact" aria-label="Contact VRK Solutions" className="section-pad"
      style={{ background:"var(--navy)" }}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:70 }}>
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="section-title reveal">Ready to <span className="gold-text">Dominate</span> Digitally?</h2>
          <p style={{ color:"var(--gray)", maxWidth:500, margin:"0 auto", lineHeight:1.8 }} className="reveal">
            Tell us about your project. We'll respond within 2 hours with a free consultation plan.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info column */}
          <div>
            <h3 style={{ fontFamily:"Montserrat", fontWeight:800, fontSize:"1.4rem", marginBottom:32, color:"var(--white)" }} className="reveal">
              Contact Information
            </h3>
            {[
              { icon:MessageCircle, label:"WhatsApp / Call", val:"+91 93988 45947",          href:"https://wa.me/919398845947" },
              { icon:Mail,          label:"Email",           val:"info@vrksolutions.in", href:"mailto:info@vrksolutions.in" },
              { icon:MapPin,        label:"Location",        val:"Kakinada, Andhra Pradesh, India", href:null },
            ].map(({ icon:Icon, label, val, href }) => (
              <div key={label} className="reveal" style={{ display:"flex", gap:18, marginBottom:32 }}>
                <div style={{ width:48, height:48, borderRadius:10, background:"rgba(201,168,76,.1)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Icon size={20} color="var(--gold)" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize:".75rem", color:"var(--gray)", fontWeight:600, letterSpacing:.5, marginBottom:4, textTransform:"uppercase", fontFamily:"Montserrat" }}>{label}</div>
                  {href
                    ? <a href={href} style={{ color:"var(--gray-light)", textDecoration:"none", fontSize:".92rem", fontWeight:500, transition:"color .3s" }}
                        onMouseEnter={e=>e.target.style.color="var(--gold)"}
                        onMouseLeave={e=>e.target.style.color="var(--gray-light)"}>{val}</a>
                    : <span style={{ color:"var(--gray-light)", fontSize:".92rem" }}>{val}</span>}
                </div>
              </div>
            ))}
            <div className="reveal" style={{ padding:28, background:"var(--card-bg)", border:"1px solid var(--border)", borderRadius:12 }}>
              <div style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".9rem", marginBottom:8, color:"var(--gold)" }}>Free Consultation</div>
              <p style={{ color:"var(--gray)", fontSize:".82rem", lineHeight:1.7 }}>We offer a free 30-minute consultation for all new projects. No commitment required.</p>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-box reveal">
            <div className="form-row">
              <div>
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input id="name" name="name" value={form.name} onChange={handle} placeholder="Ravi Kumar" className="form-input" autoComplete="name" />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" className="form-input" autoComplete="tel" inputMode="tel" />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className="form-input" autoComplete="email" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="service">Service Required</label>
              <select id="service" name="service" value={form.service} onChange={handle} className="form-input" style={{ cursor:"pointer" }}>
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
            <div className="form-field">
              <label className="form-label" htmlFor="message">Tell Us About Your Project</label>
              <textarea id="message" name="message" value={form.message} onChange={handle} placeholder="Brief description of your project..." rows={4} className="form-input" style={{ resize:"vertical", lineHeight:1.6 }} />
            </div>
            <button onClick={submit} className="btn-primary" style={{ width:"100%", justifyContent:"center", fontSize:"1rem", padding:"16px" }}
              aria-label="Send enquiry to VRK Solutions via WhatsApp">
              <MessageCircle size={18} aria-hidden="true" /> Send via WhatsApp
            </button>
            <p style={{ textAlign:"center", color:"var(--gray)", fontSize:".75rem", marginTop:14 }}>
              Your message opens in WhatsApp. We respond within 2 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FOOTER
════════════════════════════════════════ */
function Footer() {
  const services = ["Website Development","App Development","SaaS Applications","ERP Systems","SEO Optimization","Digital Marketing"];
  return (
    <footer role="contentinfo" style={{ background:"#060A14", borderTop:"1px solid var(--border)", padding:"64px 0 0" }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" aria-label="VRK Solutions Home">
              <img src={logo} alt="VRK Solutions - Digital Agency Kakinada AP" loading="lazy"
                style={{ height:48, width:"auto", marginBottom:24, objectFit:"contain", display:"block" }} />
            </a>
            <p style={{ color:"var(--gray)", lineHeight:1.8, fontSize:".88rem", maxWidth:300, marginBottom:28 }}>
              Building digital futures for businesses across Andhra Pradesh and India. Website development, app development, ERP & digital marketing from Kakinada.
            </p>
            <a href="https://wa.me/919398845947" target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, color:"var(--gold)", fontSize:".88rem", fontWeight:600, textDecoration:"none", fontFamily:"Montserrat" }}
              aria-label="Chat with VRK Solutions on WhatsApp">
              <MessageCircle size={16} aria-hidden="true" /> +91 93988 45947
            </a>
          </div>

          <div>
            <h4 style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".85rem", letterSpacing:1, color:"var(--white)", marginBottom:24, textTransform:"uppercase" }}>Services</h4>
            <ul style={{ listStyle:"none" }} aria-label="VRK Solutions Services">
              {services.map(s => (
                <li key={s} style={{ marginBottom:12 }}>
                  <span style={{ color:"var(--gray)", fontSize:".85rem", display:"flex", alignItems:"center", gap:8 }}>
                    <ChevronRight size={12} color="var(--gold)" aria-hidden="true" />{s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily:"Montserrat", fontWeight:700, fontSize:".85rem", letterSpacing:1, color:"var(--white)", marginBottom:24, textTransform:"uppercase" }}>Contact</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}
              itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="VRK Solutions" />
              <meta itemProp="telephone" content="+919398845947" />
              <a href="mailto:info@vrksolutions.in" itemProp="email"
                style={{ color:"var(--gray)", fontSize:".85rem", textDecoration:"none", display:"flex", alignItems:"flex-start", gap:10 }}>
                <Mail size={15} color="var(--gold)" style={{ marginTop:2, flexShrink:0 }} aria-hidden="true" />
                info@vrksolutions.in
              </a>
              <address style={{ fontStyle:"normal", color:"var(--gray)", fontSize:".85rem", display:"flex", alignItems:"flex-start", gap:10 }}
                itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin size={15} color="var(--gold)" style={{ marginTop:2, flexShrink:0 }} aria-hidden="true" />
                <span>
                  <span itemProp="addressLocality">Kakinada</span>,&nbsp;
                  <span itemProp="addressRegion">Andhra Pradesh</span>,&nbsp;
                  <span itemProp="addressCountry">India</span>
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ color:"var(--gray)", fontSize:".8rem" }}>© 2026 VRK Solutions. All rights reserved.</p>
          <p style={{ color:"var(--gray)", fontSize:".8rem" }}>
            <a href="https://vrksolutions.in" style={{ color:"var(--gray)", textDecoration:"none" }}>vrksolutions.in</a> · Kakinada, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   WHATSAPP FLOATING BUTTON
════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919398845947?text=Hi%20VRK%20Solutions!%20I%20want%20a%20free%20consultation."
      target="_blank" rel="noopener noreferrer" className="wa-float"
      aria-label="Chat with VRK Solutions on WhatsApp for a free consultation">
      <MessageCircle size={28} color="white" fill="white" aria-hidden="true" />
    </a>
  );
}

/* ════════════════════════════════════════
   APP ROOT
════════════════════════════════════════ */
export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
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
