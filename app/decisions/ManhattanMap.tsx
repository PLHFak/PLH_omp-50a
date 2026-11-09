// Schematic Manhattan, sectors coloured by condo $/sq ft change (green = up, dark red = down). Not to scale.
export type Sector = { z: string; v: number; star?: boolean };
const stops: [number, [number, number, number]][] = [[-9, [140, 31, 26]], [-5, [201, 80, 47]], [-1, [232, 176, 74]], [7, [143, 194, 122]], [33, [47, 125, 58]]];
export const colour = (v: number) => {
  if (v <= stops[0][0]) return `rgb(${stops[0][1]})`;
  for (let i = 1; i < stops.length; i++) if (v <= stops[i][0]) { const [a, ca] = stops[i - 1], [b, cb] = stops[i]; const t = (v - a) / (b - a); return `rgb(${ca.map((c, k) => Math.round(c + (cb[k] - c) * t)).join(",")})`; }
  return `rgb(${stops[stops.length - 1][1]})`;
};
const ang = (29 * Math.PI) / 180;
const R = (u: number, v: number): [number, number] => [u * Math.cos(ang) + v * Math.sin(ang), -(v * Math.cos(ang) - u * Math.sin(ang))];
const hw = (v: number) => { const k: [number, number][] = [[0, 85], [120, 115], [420, 140], [620, 150], [900, 125], [1000, 100]]; for (let i = 1; i < k.length; i++) if (v <= k[i][0]) { const [a, wa] = k[i - 1], [b, wb] = k[i]; return wa + ((wb - wa) * (v - a)) / (b - a); } return 70; };
const band = (v0: number, v1: number, side: "all" | "W" | "E" = "all") => {
  const steps = 6, pts: [number, number][] = [];
  const lo = (v: number) => (side === "E" ? 14 : -hw(v)), up = (v: number) => (side === "W" ? -14 : hw(v));
  for (let i = 0; i <= steps; i++) { const v = v0 + ((v1 - v0) * i) / steps; pts.push(R(lo(v), v)); }
  for (let i = steps; i >= 0; i--) { const v = v0 + ((v1 - v0) * i) / steps; pts.push(R(up(v), v)); }
  return pts.map((p) => p.join(",")).join(" ");
};
export default function ManhattanMap({ s, lang }: { s: Record<string, Sector>; lang: "fr" | "en" }) {
  const pct = (n: number) => `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n)} %`;
  const items: { k: string; v0: number; v1: number; side?: "W" | "E"; lab: [number, number]; out?: boolean }[] = [
    { k: "fidi", v0: 0, v1: 120, lab: [0, 60], out: true },
    { k: "down", v0: 120, v1: 420, lab: [0, 225] },
    { k: "mid", v0: 420, v1: 640, lab: [0, 530] },
    { k: "uws", v0: 640, v1: 900, side: "W", lab: [-72, 780] },
    { k: "ues", v0: 640, v1: 900, side: "E", lab: [72, 780] },
    { k: "up", v0: 900, v1: 1000, lab: [0, 945] },
  ];
  const o = R(0, 345);
  return (
    <svg viewBox="-200 -940 880 1000" className="mh" role="img" aria-label="Manhattan">
      <rect x="-200" y="-940" width="880" height="1000" className="mh-bg" />
      {items.map((i) => <polygon key={i.k} points={band(i.v0, i.v1, i.side)} fill={colour(s[i.k].v)} className="mh-z" />)}
      <polygon points={band(640, 900).replace(/^/, "")} fill="none" />
      {items.map((i) => { const p = R(i.lab[0], i.lab[1]); const q = s[i.k]; const dark = q.v < -3 || q.v > 20; const fs = i.k === "uws" || i.k === "ues" ? 19 : i.k === "up" ? 24 : 30; const vs = i.k === "uws" || i.k === "ues" || i.k === "up" ? 32 : 38;
        return i.out ? (
          <g key={i.k}><line x1={p[0] + 10} y1={p[1]} x2={p[0] + 150} y2={p[1] + 10} className="mh-ld" /><text x={p[0] + 156} y={p[1] + 4} className="mh-t out" fontSize={fs}>{q.z}{q.star ? " *" : ""}</text><text x={p[0] + 156} y={p[1] + 46} className="mh-v out" fontSize="38">{pct(q.v)}</text></g>
        ) : (
          <g key={i.k} fill={dark ? "#fff" : "#2b2b2b"}>{(q.z.length > 12 && !i.out) ? (<><text x={p[0]} y={p[1] - 30} textAnchor="middle" className="mh-t" fontSize={fs}>{q.z.split(" ").slice(0, -1).join(" ")}</text><text x={p[0]} y={p[1] - 2} textAnchor="middle" className="mh-t" fontSize={fs}>{q.z.split(" ").slice(-1).join(" ")}</text></>) : <text x={p[0]} y={p[1] - 8} textAnchor="middle" className="mh-t" fontSize={fs}>{q.z}</text>}<text x={p[0]} y={p[1] + 34} textAnchor="middle" className="mh-v" fontSize={vs}>{pct(q.v)}</text></g>
        ); })}
      <circle cx={o[0] - 62} cy={o[1] + 6} r="14" className="mh-omp" />
      <text x={o[0] - 84} y={o[1] + 14} textAnchor="end" className="mh-omp-t">OMP · 50A</text>
      <g transform="translate(620 -890)"><line x1="0" y1="30" x2="0" y2="0" stroke="#3b342b" strokeWidth="2.5" /><path d="M-7,10 L0,-5 L7,10 Z" fill="#3b342b" /><text x="0" y="50" textAnchor="middle" className="mh-n">N</text></g>
      <text x="-190" y="-905" className="mh-n">{lang === "fr" ? "Schéma, hors échelle" : "Schematic, not to scale"}</text>
    </svg>
  );
}
