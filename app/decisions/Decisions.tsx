// Where decisions are made / where value holds — ported from the PRIVÉ notebook (LOCALISATION spread).
import ManhattanMap, { colour } from "./ManhattanMap";
import "./decisions.css";

const A = (href: string, label: string) => <a href={href} target="_blank" rel="noreferrer">{label}</a>;

export default function Decisions({ lang }: { lang: "fr" | "en" }) {
  const t = (a: React.ReactNode, b: React.ReactNode) => (lang === "fr" ? a : b);
  // Listed companies (market caps: stockanalysis.com, closes of Oct. 26 / Oct. 30 / Nov. 6, 2026), plus one law firm.
  const cos = [
    { n: "Sony", logo: "sony", lvl: t("Direction mondiale", "Global leadership"), cap: "152", where: "25 Madison" },
    { n: "IBM", logo: "ibm", lvl: t("Grand bureau, 362 000 pi²", "Major office, 362,000 sq ft"), cap: "232", where: "One Madison Ave" },
    { n: "Palo Alto Networks", logo: "paloalto", lvl: t("Bureau majeur", "Major office"), cap: "256", where: "One Madison Ave" },
    { n: "UBS", logo: "ubs", lvl: t("Bureau majeur", "Major office"), cap: "143", where: "11 Madison" },
    { n: "Pinterest", logo: "pinterest", lvl: t("Bureau, 83 000 pi²", "Office, 83,000 sq ft"), cap: "12", where: "11 Madison" },
    { n: "Tempus AI", logo: "tempus", lvl: t("Bureau", "Office"), cap: "13", where: "11 Madison" },
    { n: "Goodwin", logo: "goodwin", lvl: t("Cabinet d'avocats, 250 000 pi²", "Law firm, 250,000 sq ft"), cap: "", where: "200 Fifth" },
  ];
  // Sotheby's Q3 2026 vs Q3 2025, condo average price per sq ft (pp. 21, 23-33).
  const S = {
    fidi: { z: "Financial District", v: 33, star: true },
    down: { z: "Downtown", v: 7 },
    mid: { z: "Midtown", v: -1 },
    uws: { z: "Upper West Side", v: -9 },
    ues: { z: "Upper East Side", v: -9 },
    up: { z: "Upper Manhattan", v: -5 },
  };
  const scale = [-9, -5, -1, 7, 33];
  const srcs = <>{A("https://slgreen.gcs-web.com/node/31411", "SL Green")}, {A("https://commercialobserver.com/2026/07/ai-firm-legora-takes-98k-sl-greens-11-madison-avenue/", "Commercial Observer")}, {A("https://www.bisnow.com/news/new-york/deal-sheet/this-weeks-ny-deal-sheet-ibm-expands-at-sl-greens-one-madison-127751", "Bisnow")}, {A("https://www.nasdaq.com/articles/sl-green-fully-leases-one-madison-avenue-projects-strong-q1-leasing", "Nasdaq")}, {A("https://www.fdtimes.com/2016/03/15/sony-at-25-madison-avenue/", "Film and Digital Times")}, {A("https://nyrej.com/goodwin-signs-250-000-s-f-ny-office-space-lease-at-200-fifth-ave", "NYREJ")}</>;

  return (
    <section id="value" className="sec">
      <div className="wrap">
        <div className="shead">
          <p className="eyebrow">{t("Le quartier · La valeur", "The neighbourhood · Value")}</p>
          <h2>{t("Là où se prennent les décisions, là où la valeur tient", "Where decisions are made, where value holds")}</h2>
          <div className="rule" />
        </div>
        <div className="dc-grid">
          <div className="dc-col">
            <div className="dc-flag">
              <b>{t("En face du 50A, des bureaux loués en un temps record.", "Across from 50A, offices leased in record time.")}</b>
              <span>{t("One Madison Avenue (1,4 million de pi²) est plein depuis mars 2026 ; 11 Madison, depuis juillet 2026. Dans un marché de bureaux réputé difficile, les entreprises se battent pour cette adresse : le signe d'une attractivité de premier ordre.", "One Madison Avenue (1.4 million sq ft) has been full since March 2026; 11 Madison, since July 2026. In an office market known to be difficult, companies are competing for this address: a sign of first-rate appeal.")}</span>
            </div>
            <div className="dc-list">
              {cos.map((c) => (
                <div className="dc-line" key={c.n}>
                  <img src={`/media/localisation/${c.logo}.png`} alt={c.n} loading="lazy" />
                  <div className="dc-lv"><b>{c.lvl}</b><span>{c.where}</span></div>
                  <em>{c.cap ? (lang === "en" ? `($${c.cap}B)` : `(${c.cap} Md$)`) : ""}</em>
                </div>
              ))}
            </div>
            <p className="dc-src">{t(<>Entre parenthèses : valeur boursière en milliards de dollars (stockanalysis.com, début novembre 2026). Sélection de locataires publiés. Sources : {srcs}. Logos : marques de leurs propriétaires.</>, <>In brackets: market value in billions of dollars (stockanalysis.com, early November 2026). A selection of published tenants. Sources: {srcs}. Logos: trademarks of their owners.</>)}</p>
          </div>
          <div className="dc-col">
            <ManhattanMap s={S} lang={lang} />
            <div className="dc-why">
              <b>{t("Pourquoi le quartier tient", "Why the neighbourhood holds")}</b>
              <p>{t("Les centres de décision des grandes sociétés s'installent de plus en plus ici, et l'immeuble en face du 50A s'est loué en un temps record. Ceux qui décident veulent habiter à côté : la demande de logements reste forte là où le travail arrive.", "The decision centres of major companies are increasingly settling here, and the building across from 50A leased in record time. Those who decide want to live nearby: housing demand stays strong where the work arrives.")}</p>
            </div>
            <p className="dc-lead">{t("Condos : variation du prix moyen au pi², troisième trimestre 2026 contre troisième trimestre 2025.", "Condos: change in average price per sq ft, third quarter 2026 against third quarter 2025.")}</p>
            <div className="dc-leg">
              <i style={{ background: `linear-gradient(90deg, ${scale.map((v) => colour(v)).join(",")})` }} />
              <span><em>−9 %</em><em>0</em><em>+33 %</em></span>
            </div>
            <ul className="dc-reads">
              <li>{t(<><b>Downtown, où se trouve le 50A, est le seul grand secteur en hausse</b> : +7 % au pi² pour les condos, +17 % pour le prix médian.</>, <><b>Downtown, where 50A stands, is the only large area rising</b>: +7% per sq ft for condos, +17% for the median price.</>)}</li>
              <li>{t("Les secteurs résidentiels du nord reculent de 5 à 9 %.", "The residential areas to the north fall 5 to 9%.")}</li>
            </ul>
            <p className="dc-src">{t("* Petit secteur (136 ventes) : à interpréter avec prudence. Source : Sotheby's International Realty, Manhattan Market Report T3 2026, pp. 5, 21, 23-33.", "* Small area (136 sales): read with caution. Source: Sotheby's International Realty, Manhattan Market Report Q3 2026, pp. 5, 21, 23-33.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
