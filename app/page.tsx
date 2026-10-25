"use client";

import { useEffect, useMemo, useState } from "react";
import * as C from "@/content/site";
import type { L } from "@/content/site";

type Lang = "en" | "fr";
const tx = (lang: Lang, v: L | string) => (typeof v === "string" ? v : v[lang]);

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = (v: L | string) => tx(lang, v);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = null;
    try { saved = localStorage.getItem("omp-lang"); } catch {}
    const v = q === "fr" || q === "en" ? q : saved === "fr" ? "fr" : "en";
    setLang(v as Lang);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("omp-lang", lang); } catch {}
  }, [lang]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <Residence t={t} />
      <Views t={t} />
      <Building t={t} />
      <Location t={t} />
      <Dining t={t} />
      <Gallery t={t} />
      <Residents t={t} />
      <Terms t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </>
  );
}

type TT = { t: (v: L | string) => string };

function TopBar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className="topbar-in">
        <a href="#top" className="brand">
          <span className="brand-name">One Madison</span>
          <span className="brand-floor">{lang === "en" ? "Floor 50" : "50e étage"}</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Sections">
          {C.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label[lang]}</a>
          ))}
        </nav>
        <div className="topbar-tools">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
          </div>
          <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionHead({ t, number, title, subtitle }: TT & { number: L | string; title: L | string; subtitle?: L | string }) {
  return (
    <div className="shead">
      <p className="eyebrow">{t(number)}</p>
      <h2>{t(title)}</h2>
      {subtitle && <p className="ssub">{t(subtitle)}</p>}
      <div className="rule" />
    </div>
  );
}

function Hero({ t, lang }: TT & { lang: Lang }) {
  const [i, setI] = useState(0);
  const n = C.hero.slides.length;
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);
  return (
    <section id="top" className="hero">
      {C.hero.slides.map((s, k) => (
        <img key={s.src} src={s.src} alt={t(s.alt)} className={`hero-img ${k === i ? "on" : ""}`} fetchPriority={k === 0 ? "high" : "auto"} />
      ))}
      <div className="hero-shade" />
      <div className="hero-in">
        <p className="eyebrow light">{t(C.hero.eyebrow)}</p>
        <h1>{C.hero.title}<span>{t(C.hero.floor)}</span></h1>
        <p className="hero-lead">{t(C.hero.lead)}</p>
        <p className="hero-price">{C.priceLabel(lang)}</p>
        <div className="hero-dots">
          {C.hero.slides.map((s, k) => (
            <button key={s.src} aria-label={`${k + 1}`} className={k === i ? "on" : ""} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
      <dl className="hero-stats">
        {C.hero.stats.map((s) => (
          <div key={s.v}><dt>{s.v}</dt><dd>{t(s.l)}</dd></div>
        ))}
      </dl>
    </section>
  );
}

function Residence({ t }: TT) {
  const R = C.residence;
  return (
    <section id="residence" className="sec">
      <div className="wrap">
        <SectionHead t={t} number={R.number} title={R.title} subtitle={R.subtitle} />
        <div className="two">
          <figure className="fig">
            <img src={R.image.src} alt={t(R.image.caption)} loading="lazy" />
            <figcaption>{t(R.image.caption)}</figcaption>
          </figure>
          <div className="prose">
            {R.paras.map((p, k) => <p key={k}>{t(p)}</p>)}
            <div className="table">
              <p className="label">{t(R.roomsTitle)}</p>
              {R.rooms.map((r) => (
                <div className="trow" key={r.room.en}><span>{t(r.room)}</span><span>{r.sqft} sq ft</span><span>{r.sqm} m²</span></div>
              ))}
              <div className="trow total"><span>{t({ en: "Total interior", fr: "Total intérieur" })}</span><span>{R.totalInterior.sqft} sq ft</span><span>{R.totalInterior.sqm} m²</span></div>
              {R.terraces.map((r) => (
                <div className="trow" key={r.room.en}><span>{t(r.room)}</span><span>{r.sqft} sq ft</span><span>{r.sqm} m²</span></div>
              ))}
              <p className="small">* {t(R.terraceNote)}</p>
            </div>
          </div>
        </div>
        <div className="two plan-row">
          <figure className="fig plan">
            <img src={R.plan} alt={t(R.planTitle)} loading="lazy" />
            <figcaption>{t(R.planTitle)}</figcaption>
          </figure>
          <div>
            <p className="label">{t(R.finishesTitle)}</p>
            <ul className="ticks">{R.finishes.map((f) => <li key={f.en}>{t(f)}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Views({ t }: TT) {
  const V = C.views;
  return (
    <section id="views" className="sec alt">
      <div className="wrap">
        <SectionHead t={t} number={V.number} title={V.title} subtitle={V.subtitle} />
        <div className="dirs">
          {V.directions.map((d) => (
            <div className="dir" key={d.dir.en}>
              <p className="dir-h"><span aria-hidden>{d.icon}</span>{t(d.dir)}</p>
              <ul>{d.items.map((x) => <li key={x.en}>{t(x)}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="axis">
          <figure className="fig">
            <img src={V.axisImage.src} alt={t(V.axisImage.caption)} loading="lazy" />
            <figcaption>{t(V.axisImage.caption)}</figcaption>
          </figure>
          <div className="prose">
            <h3>{t(V.axisTitle)}</h3>
            {V.axisText.map((p, k) => <p key={k}>{t(p)}</p>)}
            <AxisDiagram t={t} />
          </div>
        </div>

        <div className="pano">
          {V.panorama.map((p) => (
            <figure key={p.src} className="pano-item">
              <img src={p.src} alt={t(p.caption)} loading="lazy" />
              <figcaption><b>{t(p.dir)}</b> {t(p.caption)}</figcaption>
            </figure>
          ))}
        </div>

        <div className="two">
          <div className="panel dark">
            <p className="eyebrow light">{t(V.riversTitle)}</p>
            <p>{t(V.riversText)}</p>
          </div>
          <div className="panel">
            <p className="eyebrow">{t(V.terracesTitle)}</p>
            <p>{t(V.terracesText)}</p>
            <dl className="figs">
              {V.terraceFigures.map((f) => <div key={f.v}><dt>{f.v}</dt><dd>{t(f.l)}</dd></div>)}
            </dl>
          </div>
        </div>

        <figure className="fig nadir">
          <img src={V.nadirImage.src} alt={t(V.nadirImage.caption)} loading="lazy" />
          <figcaption>{t(V.nadirImage.caption)}</figcaption>
        </figure>
      </div>
    </section>
  );
}

// Schematic of Madison Avenue ending at One Madison (north up, not to scale).
function AxisDiagram({ t }: TT) {
  return (
    <figure className="diagram" aria-label={t({ en: "Diagram: Madison Avenue runs north from One Madison", fr: "Schéma : Madison Avenue part de One Madison vers le nord" })}>
      <svg viewBox="0 0 320 260" role="img">
        <rect x="0" y="0" width="320" height="260" fill="var(--paper)" />
        {[40, 90, 200, 250].map((x) => <line key={x} x1={x} y1="10" x2={x} y2="250" stroke="var(--grid)" strokeWidth="3" />)}
        <rect x="40" y="10" width="50" height="34" fill="var(--park)" />
        <text x="65" y="31" textAnchor="middle" fontSize="8" fill="var(--ink2)">Central Park</text>
        <rect x="110" y="170" width="40" height="34" fill="var(--park)" />
        <text x="130" y="190" textAnchor="middle" fontSize="7" fill="var(--ink2)">Madison Sq.</text>
        <line x1="145" y1="14" x2="145" y2="214" stroke="var(--bronze)" strokeWidth="6" />
        <text x="160" y="120" fontSize="9" fill="var(--bronze)" fontWeight="600" transform="rotate(90 160 120)">MADISON AVENUE · 9.7 km</text>
        <polygon points="145,4 139,16 151,16" fill="var(--bronze)" />
        <rect x="203" y="96" width="44" height="18" fill="var(--grid2)" />
        <text x="225" y="108" textAnchor="middle" fontSize="6.5" fill="var(--ink)">Grand Central</text>
        <text x="182" y="136" fontSize="6.5" fill="var(--ink2)">Park Ave</text>
        <rect x="152" y="176" width="9" height="9" fill="var(--clock)" />
        <text x="165" y="184" fontSize="7" fill="var(--clock)">Met Life clock</text>
        <polygon points="112,208 104,214 116,214" fill="var(--ink2)" />
        <text x="100" y="226" textAnchor="end" fontSize="7" fill="var(--ink2)">Flatiron</text>
        <circle cx="145" cy="218" r="7" fill="var(--accent)" stroke="var(--paper)" strokeWidth="2" />
        <text x="158" y="236" fontSize="9" fontWeight="700" fill="var(--accent)">ONE MADISON · 50A</text>
      </svg>
      <figcaption>{t({ en: "Schematic, north up, not to scale", fr: "Schéma, nord en haut, sans échelle" })}</figcaption>
    </figure>
  );
}

function Building({ t }: TT) {
  const B = C.building;
  return (
    <section id="building" className="sec">
      <div className="wrap">
        <SectionHead t={t} number={B.number} title={B.title} subtitle={B.subtitle} />
        <figure className="fig wide">
          <img src={B.image.src} alt={t(B.image.caption)} loading="lazy" />
          <figcaption>{t(B.image.caption)}</figcaption>
        </figure>
        <div className="two">
          <div className="prose">{B.paras.map((p, k) => <p key={k}>{t(p)}</p>)}</div>
          <div className="table">
            {B.specs.map((s) => <div className="trow two-col" key={s.l.en}><span>{t(s.l)}</span><span>{s.v}</span></div>)}
          </div>
        </div>
        <p className="label">{t(B.clubTitle)}</p>
        <ul className="chips">{B.club.map((c) => <li key={c.en}>{t(c)}</li>)}</ul>
      </div>
    </section>
  );
}

function Location({ t }: TT) {
  const Lc = C.location;
  return (
    <section id="location" className="sec alt">
      <div className="wrap">
        <SectionHead t={t} number={Lc.number} title={Lc.title} subtitle={Lc.subtitle} />
        <div className="two">
          <div className="prose">
            <p>{t(Lc.para)}</p>
            <div className="table">
              {Lc.places.map((p) => (
                <div className="trow" key={p.place}><span>{p.place}</span><span>{t(p.dist)}</span><span className="muted">{t(p.note)}</span></div>
              ))}
            </div>
          </div>
          <div className="map">
            <iframe
              title={t(Lc.mapTitle)}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9945%2C40.7372%2C-73.9815%2C40.7442&layer=mapnik&marker=40.7406%2C-73.9880"
              loading="lazy"
            />
            <a href={Lc.mapLink} target="_blank" rel="noopener noreferrer">{t({ en: "Open the full map", fr: "Ouvrir la carte complète" })} ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dining({ t }: TT) {
  const D = C.dining;
  const F = D.feature;
  useEffect(() => {
    if (document.getElementById("ig-embed")) return;
    const s = document.createElement("script");
    s.id = "ig-embed"; s.async = true; s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, []);
  return (
    <section id="dining" className="sec">
      <div className="wrap">
        <SectionHead t={t} number={D.number} title={D.title} subtitle={D.subtitle} />

        <article className="feature">
          <div className="feature-text">
            <p className="eyebrow">{t(F.eyebrow)}</p>
            <h3>{F.title}</h3>
            <p className="tagline">{t(F.tagline)}</p>
            {F.paras.map((p, k) => <p key={k}>{t(p)}</p>)}
            <dl className="facts">
              {F.facts.map((f) => <div key={f.l.en}><dt>{t(f.l)}</dt><dd>{t(f.v)}</dd></div>)}
            </dl>
            <a className="link" href={F.url} target="_blank" rel="noopener noreferrer">lejardinsurmadison.com ↗</a>
          </div>
          <div className="feature-media">
            <img src={F.image} alt="Le Jardin sur Madison" loading="lazy" />
            <blockquote className="instagram-media" data-instgrm-permalink={F.instagram} data-instgrm-version="14">
              <a href={F.instagram} target="_blank" rel="noopener noreferrer">{t({ en: "View on Instagram", fr: "Voir sur Instagram" })}</a>
            </blockquote>
          </div>
        </article>

        <div className="restos">
          {D.list.map((r) => (
            <a className="resto" key={r.name} href={r.url} target="_blank" rel="noopener noreferrer">
              {r.img ? <img src={r.img} alt={r.name} /> : <div className="resto-ph"><span>{r.name}</span></div>}
              <div className="resto-b">
                <div className="resto-top"><span className="badge">{t(r.badge)}</span><span className="dist">{r.dist}</span></div>
                <h4>{r.name}</h4>
                <p className="resto-tag">{t(r.tag)}</p>
                <p>{t(r.desc)}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="small">{t(D.note)}</p>
      </div>
    </section>
  );
}

function Gallery({ t }: TT) {
  const G = C.gallery;
  const [mode, setMode] = useState<"photos" | "video">("photos");
  const [i, setI] = useState(0);
  const n = G.photos.length;
  const prev = () => setI((x) => (x - 1 + n) % n);
  const next = () => setI((x) => (x + 1) % n);
  useEffect(() => {
    if (mode !== "photos") return;
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  const cur = G.photos[i];
  return (
    <section id="gallery" className="sec dark">
      <div className="wrap">
        <div className="shead center">
          <p className="eyebrow light">{t(G.eyebrow)}</p>
          <h2>{t(G.title)}</h2>
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={mode === "photos"} onClick={() => setMode("photos")}>{t(G.photosTab)}</button>
            <button role="tab" aria-selected={mode === "video"} onClick={() => setMode("video")}>▶ {t(G.videoTab)}</button>
          </div>
        </div>
        {mode === "photos" ? (
          <>
            <div className="stage">
              <img key={cur.f} src={C.M(cur.f)} alt={t(cur.c)} />
              <button className="nav-btn l" onClick={prev} aria-label="Previous">‹</button>
              <button className="nav-btn r" onClick={next} aria-label="Next">›</button>
              <p className="stage-cap">{t(cur.c)}</p>
              <p className="stage-count">{i + 1} / {n}</p>
            </div>
            <div className="thumbs">
              {G.photos.map((p, k) => (
                <button key={p.f} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`${k + 1}`}>
                  <img src={C.M(p.f)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="video">
            <video src={G.video} poster={G.poster} controls playsInline preload="metadata" />
          </div>
        )}
      </div>
    </section>
  );
}

function Residents({ t }: TT) {
  const R = C.residents;
  return (
    <section id="residents" className="sec">
      <div className="wrap">
        <SectionHead t={t} number={R.number} title={R.title} subtitle={R.subtitle} />
        <div className="people">
          {R.people.map((p) => (
            <div className="person" key={p.name}>
              <h4>{p.name}</h4>
              <p className="label">{t(p.role)}</p>
              <p>{t(p.note)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terms({ t, lang }: TT & { lang: Lang }) {
  const T = C.terms;
  const ppsf = useMemo(() => (lang === "en" ? `$${C.ppsf.toLocaleString("en-US")}` : `${C.ppsf.toLocaleString("fr-FR")} $`), [lang]);
  return (
    <section id="terms" className="sec alt">
      <div className="wrap">
        <SectionHead t={t} number={T.number} title={T.title} subtitle={T.subtitle} />
        <div className="two">
          <div className="prose">
            {T.paras.map((p, k) => <p key={k}>{t(p)}</p>)}
            <div className="price">
              <p className="label">{t(T.priceLabel)}</p>
              <p className="price-v">{C.priceLabel(lang)}</p>
              <p className="muted">≈ {ppsf} {t(T.ppsfLabel)}</p>
            </div>
          </div>
          <div className="table">
            {T.rows.map((r) => <div className="trow two-col" key={r.l.en}><span>{t(r.l)}</span><span>{t(r.v)}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }: TT & { lang: Lang }) {
  const K = C.contact;
  return (
    <section id="contact" className="sec dark">
      <div className="wrap narrow">
        <SectionHead t={t} number={K.number} title={K.title} subtitle={K.text} />
        <div className="broker">
          <p className="label light">{t(K.broker.role)}</p>
          <p className="broker-name">{K.broker.name}</p>
          <p>{K.broker.firm}</p>
        </div>
        <div className="table on-dark">
          {K.details.map((d) => <div className="trow two-col" key={d.l.en}><span>{t(d.l)}</span><span>{d.v}</span></div>)}
          <div className="trow two-col"><span>{t(C.terms.priceLabel)}</span><span>{C.priceLabel(lang)}</span></div>
        </div>
        <footer className="foot">
          <p>{t(K.footer)}</p>
          <form method="post" action="/api/logout"><button type="submit" className="linkbtn">{lang === "en" ? "Sign out" : "Se déconnecter"}</button></form>
        </footer>
      </div>
    </section>
  );
}
