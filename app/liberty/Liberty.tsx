"use client";
// Simulation of the view from 50A toward the Statue of Liberty.
// The skyline is computed from NYC building footprints and roof heights (content/liberty.json);
// the statue is drawn at its true angular size (305 ft at 4.59 mi = 0.72°). A calculation, not a photograph.
import { useState } from "react";
import "./liberty.css";
import data from "@/content/liberty.json";

const FT_PER_DEG = 305 / 0.72;
const X = (az: number) => (az - data.az0) * 100;
const Y = (el: number) => (3 - el) * 100;

const STATUE = [
  "M-45,0 L45,0 L45,-65 L31,-65 L31,-154 L-31,-154 L-31,-65 L-45,-65 Z", // pedestal and base
  "M-22,-154 L22,-154 L16,-225 L-13,-225 Z", // robes
  "M-13,-225 L16,-225 L19,-240 L10,-247 L-8,-247 L-15,-238 Z", // torso
  "M-9,-256 L-15,-262 L-8,-259 L-8,-266 L-3,-261 L0,-270 L3,-261 L8,-266 L8,-259 L15,-262 L9,-256 Z", // crown
  "M-24,-232 L-10,-238 L-8,-216 L-22,-210 Z", // tablet
  "M17,-288 L27,-288 L27,-292 L17,-292 Z", // torch cup
  "M22,-292 q-6,-6 0,-13 q6,7 0,13 Z", // flame
];

function Scene({ i, box, fs, showLabels }: { i: number; box: string; fs: number; showLabels: boolean }) {
  const e = data.eyes[i];
  const yb = Y(e.base), yt = Y(e.top), s = (yb - yt) / 305;
  const xs = X(data.statue.az);
  let d = "";
  e.sky.forEach((v, k) => { if (v > -3) d += `M${k * 10},${Y(v)} h10 V1000 h-10 Z `; });
  return (
    <svg viewBox={box} preserveAspectRatio="xMidYMid slice" className="lib-svg" role="img" aria-label="Simulation de la vue vers la statue de la Liberté">
      <defs>
        <linearGradient id={`sk${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bcd3e6" /><stop offset=".62" stopColor="#e6eef0" /><stop offset="1" stopColor="#f3efe6" /></linearGradient>
        <linearGradient id={`ci${i}`} x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#46535f" /><stop offset="1" stopColor="#262e38" /></linearGradient>
        <linearGradient id={`wa${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cdd9dc" /><stop offset="1" stopColor="#a9bac2" /></linearGradient>
      </defs>
      <rect x="0" y="-400" width="1500" height="1400" fill={`url(#sk${i})`} />
      <rect x="0" y={Y(-1.6)} width="1500" height={1000 - Y(-1.6)} fill={`url(#wa${i})`} opacity=".9" />
      <line x1="0" x2="1500" y1={Y(0)} y2={Y(0)} stroke="#8fa3b0" strokeWidth={fs * 0.05} strokeDasharray={`${fs * 0.4} ${fs * 0.3}`} />
      <g transform={`translate(${xs},${yb}) scale(${s})`} fill="#5f7d70" stroke="#44584f" strokeWidth={0.8}>
        {STATUE.map((p, k) => <path key={k} d={p} />)}
        <path d="M12,-240 L22,-288" stroke="#5f7d70" strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
      <path d={d} fill={`url(#ci${i})`} />
      {showLabels && (
        <g fontFamily="Montserrat, sans-serif" fontSize={fs} fill="#2b3440">
          <line x1={xs} x2={xs} y1={yt - fs * 3.2} y2={yt - fs * 0.6} stroke="#8a6a2c" strokeWidth={fs * 0.09} />
          <text x={xs} y={yt - fs * 3.8} textAnchor="middle" fontWeight={700} fill="#5b3f10">Statue · {data.statue.az.toFixed(0)}°</text>
          <line x1={X(data.statue.wtcAz)} x2={X(data.statue.wtcAz)} y1={Y(4.5)} y2={Y(4.3)} stroke="#34404d" strokeWidth={fs * 0.09} />
          <text x={X(data.statue.wtcAz) + fs * 0.8} y={Y(4.2)} fontWeight={600}>One WTC · {data.statue.wtcAz.toFixed(0)}°</text>
          <circle cx={X(224.5)} cy={Y(3.4)} r={26} fill="none" stroke="#7b8a97" strokeWidth={fs * 0.09} strokeDasharray={`${fs * 0.3} ${fs * 0.25}`} />
          <text x={X(224.5)} y={Y(3.4) + 52 + fs} textAnchor="middle" fill="#506070">Moon · 0.52°</text>
          {[213, 215, 217, 219, 221, 223, 225].map((a) => (
            <g key={a}><line x1={X(a)} x2={X(a)} y1={Y(-4.2)} y2={Y(-4.35)} stroke="#ffffffaa" strokeWidth={fs * 0.08} /><text x={X(a)} y={Y(-4.35) - fs * 0.5} textAnchor="middle" fill="#fff" opacity=".85">{a}°</text></g>
          ))}
        </g>
      )}
    </svg>
  );
}

export default function Liberty({ lang }: { lang: "fr" | "en" }) {
  const [i, setI] = useState(1);
  const fr = lang === "fr";
  const t = (a: React.ReactNode, b: React.ReactNode) => (fr ? a : b);
  const e = data.eyes[i];
  const cx = X(data.statue.az);
  const part = [
    t("la torche, la tête et le buste", "the torch, the head and the chest"),
    t("presque toute la statue ; le piédestal est caché", "almost the whole statue; the pedestal is hidden"),
    t("toute la statue et le haut du piédestal", "the whole statue and the top of the pedestal"),
  ];
  return (
    <section id="liberty" className="sec">
      <div className="wrap">
        <div className="shead">
          <p className="eyebrow">{t("Vue sud-ouest · Simulation", "Southwest view · Simulation")}</p>
          <h2>{t("La statue de la Liberté, depuis le 50e", "The Statue of Liberty, from the 50th floor")}</h2>
          <p className="ssub">{t("Plein sud-ouest, à 4,6 miles, juste à droite de One World Trade Center. Calculée à partir de la hauteur réelle des immeubles qui s'interposent.", "Due southwest, 4.6 miles away, just to the right of One World Trade Center. Worked out from the real heights of the buildings in between.")}</p>
          <div className="rule" />
        </div>
        <div className="lb-figs">
          <div><b>220°</b><span>{t("cap, sud-ouest", "bearing, southwest")}</span></div>
          <div><b>4.6 mi</b><span>{t("distance", "distance")}</span></div>
          <div><b>305 ft</b><span>{t("hauteur de la statue", "statue height")}</span></div>
          <div><b>0.72°</b><span>{t("hauteur apparente, 1,4 × la Lune", "apparent height, 1.4 × the Moon")}</span></div>
        </div>
        <div className="lb-main">
          <div className="lb-frame"><Scene i={i} box="0 -150 1500 900" fs={17} showLabels /></div>
          <div className="lb-ctl">
            <span>{t("Altitude de l'œil au-dessus de la mer", "Eye level above sea level")}</span>
            {data.eyes.map((o, k) => (
              <button key={o.ft} type="button" className={k === i ? "on" : ""} onClick={() => setI(k)}>{o.ft} ft{k === 1 ? (fr ? " · estimation" : " · estimate") : ""}</button>
            ))}
          </div>
        </div>
        <div className="lb-two">
          <div>
            <p className="eyebrow">{t("Zoom ×8", "8× zoom")}</p>
            <div className="lb-zoom"><Scene i={i} box={`${cx - 97} ${Y(e.top) - 8} 195 50`} fs={3.2} showLabels={false} /></div>
          </div>
          <div>
            <table className="lb-tbl">
              <thead><tr><th>{t("Œil", "Eye")}</th><th>{t("Statue visible", "Statue visible")}</th><th>{t("On voit", "You see")}</th></tr></thead>
              <tbody>{data.eyes.map((o, k) => (<tr key={o.ft} className={k === i ? "on" : ""}><td>{o.ft} ft</td><td>{o.visibleFt} / 305 ft</td><td>{part[k]}</td></tr>))}</tbody>
            </table>
            <p className="lb-note">{t("Vue vers le sud-ouest, fenêtre de 15° × 9°, échelle réelle ; en sombre, la ligne de toits calculée. Simulation, pas une photographie : la hauteur exacte de l'œil (≈ 546 ft) reste à confirmer, et la brume n'est pas simulée. Données : NYC Open Data (emprises et hauteurs des immeubles), National Park Service.", "View toward the southwest, 15° × 9° window, true scale; in dark, the computed skyline. A simulation, not a photograph: the exact eye level (≈ 546 ft) is still to be confirmed, and haze is not simulated. Data: NYC Open Data (building footprints and heights), National Park Service.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
