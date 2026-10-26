"use client";

import { useEffect, useState } from "react";
import * as Q from "@/content/quartier";
import type { L } from "@/content/quartier";

type Lang = "en" | "fr";

export default function Quartier() {
  const [lang, setLang] = useState<Lang>("en");
  const t = (v: L | string) => (typeof v === "string" ? v : v[lang]);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = null;
    try { saved = localStorage.getItem("omp-lang"); } catch {}
    setLang(q === "fr" || q === "en" ? q : saved === "fr" ? "fr" : "en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "en" ? "The Neighbourhood · One Madison" : "Le quartier · One Madison";
    try { localStorage.setItem("omp-lang", lang); } catch {}
  }, [lang]);

  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <a href={`/?lang=${lang}`} className="brand">
            <span className="brand-name">One Madison</span>
            <span className="brand-floor">{lang === "en" ? "Floor 50" : "50e étage"}</span>
          </a>
          <nav className="nav q-nav" aria-label="Sections">
            <a href={`/?lang=${lang}`}>← {t(Q.page.back)}</a>
          </nav>
          <div className="topbar-tools">
            <div className="lang" role="group" aria-label="Language">
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
            </div>
          </div>
        </div>
      </header>

      <section className="sec q-intro">
        <div className="wrap narrow">
          <div className="shead">
            <p className="eyebrow">{t(Q.page.eyebrow)}</p>
            <h2>{t(Q.page.title)}</h2>
            <p className="ssub">{t(Q.page.lead)}</p>
            <div className="rule" />
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Head t={t} n={Q.view.number} title={Q.view.title} />
          <div className="two">
            <div className="prose">{Q.view.paras.map((p, k) => <p key={k}>{t(p)}</p>)}</div>
            <aside className="q-aside"><p>{t(Q.view.tower)}</p></aside>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head t={t} n={Q.landmarks.number} title={Q.landmarks.title} />
          <div className="q-cards">
            {Q.landmarks.items.map((b) => (
              <article className="q-card" key={b.name}>
                <p className="q-year">{b.year}</p>
                <h4><a href={b.url} target="_blank" rel="noopener noreferrer">{b.name}</a></h4>
                <p className="small">{b.addr}</p>
                <p>{t(b.what)}</p>
                <p className="q-prot">{t(b.prot)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <Head t={t} n={Q.park.number} title={Q.park.title} />
          <ol className="q-time">
            {Q.park.events.map((e) => (
              <li key={e.y}><span className="q-y">{e.y}</span><span>{t(e.t)}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head t={t} n={Q.shack.number} title={Q.shack.title} />
          <div className="two">
            <div className="prose">{Q.shack.paras.map((p, k) => <p key={k}>{t(p)}</p>)}</div>
            <dl className="q-figs">
              {Q.shack.figures.map((f) => <div key={f.v}><dt>{f.v}</dt><dd>{t(f.l)}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Head t={t} n={Q.tables.number} title={Q.tables.title} sub={Q.tables.sub} />
          <div className="q-tw">
            <table className="q-table">
              <thead><tr><th>{t(Q.tables.cols.name)}</th><th>{t(Q.tables.cols.cuisine)}</th><th>{t(Q.tables.cols.stars)}</th><th>{t(Q.tables.cols.dist)}</th></tr></thead>
              <tbody>
                {Q.tables.items.map((r) => (
                  <tr key={r.name}>
                    <td><a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a><span className="small">{r.addr}</span></td>
                    <td>{t(r.cuisine)}</td>
                    <td className="nw">{t(r.stars)}</td>
                    <td className="nw">{r.dist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small">{t(Q.tables.more)} <a href={`/?lang=${lang}#dining`}>→</a></p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head t={t} n={Q.economy.number} title={Q.economy.title} />
          <dl className="q-figs wide">
            {Q.economy.figures.map((f) => <div key={f.v}><dt>{f.v}</dt><dd>{t(f.l)}</dd></div>)}
          </dl>
          <p className="small">{t(Q.economy.source)}</p>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap narrow">
          <p className="eyebrow">{lang === "en" ? "Sources" : "Sources"}</p>
          <ul className="q-src">
            {Q.sources.map((s) => <li key={s.u}><a href={s.u} target="_blank" rel="noopener noreferrer">{s.t}</a></li>)}
          </ul>
          <p className="small"><a href={`/?lang=${lang}`}>← {t(Q.page.back)}</a></p>
        </div>
      </section>
    </>
  );
}

function Head({ t, n, title, sub }: { t: (v: L | string) => string; n: L; title: L; sub?: L }) {
  return (
    <div className="shead">
      <p className="eyebrow">{t(n)}</p>
      <h2>{t(title)}</h2>
      {sub && <p className="ssub">{t(sub)}</p>}
      <div className="rule" />
    </div>
  );
}
