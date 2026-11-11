// "Above the fray": map of 40-storey-plus towers around 50A + the study by day and night + north terrace (same content as the PRIVÉ spread 9 ter).
import "./above.css";

export default function Above({ lang }: { lang: "fr" | "en" }) {
  const t = (a: React.ReactNode, b: React.ReactNode) => (lang === "fr" ? a : b);
  return (
    <section id="above" className="sec alt">
      <div className="wrap">
        <div className="shead">
          <p className="eyebrow">{t("Au-dessus de la mêlée", "Above the fray")}</p>
          <h2>{t("Au centre de New York, sans vis-à-vis", "At the centre of New York, overlooked by no one")}</h2>
          <div className="rule" />
        </div>
        <div className="ab-grid">
          <div className="ab-text">
            <p className="ab-lead">{t("Le bureau, de jour comme de nuit, domine New York sans qu'aucune fenêtre ne lui fasse face. On y travaille en toute intimité, et la ville devient un spectacle apaisant. C'est rarissime à New York, et pourtant on est à son centre de gravité.",
              "The study, by day and by night, overlooks New York with no window facing it. You work in complete privacy, and the city becomes a soothing spectacle. This is very rare in New York, and yet you are at its centre of gravity.")}</p>
            <dl className="ab-facts">
              <div><dt>{t("Sud", "South")}</dt><dd>{t("aucune tour de 40 étages sur 3,2 km", "no 40-storey tower for 3.2 km")}</dd></div>
              <div><dt>{t("Ouest", "West")}</dt><dd>{t("aucune jusqu'à l'Hudson ; au-delà, les monts Watchung (New Jersey), à 15 miles", "none up to the Hudson; beyond, the Watchung Mountains (New Jersey), 15 miles away")}</dd></div>
              <div><dt>{t("Est", "East")}</dt><dd>{t("aucune jusqu'à l'East River", "none up to the East River")}</dd></div>
              <div><dt>{t("La nuit", "At night")}</dt><dd>{t("les avions en approche de LaGuardia, les bateaux sur les fleuves", "planes approaching LaGuardia, boats on the rivers")}</dd></div>
            </dl>
            <p className="ab-end">{t("Chaque jour, le temps et la lumière recomposent ce spectacle sous un très grand ciel. Les photos n'en donnent qu'une idée : en parcourant ce panorama du regard, l'œil perçoit jusqu'à 430 millions de points, l'équivalent de 50 images 4K, en relief, avec une lumière qu'aucun appareil ne restitue. Une présence en très haute définition, où l'on découvre du neuf jour après jour, mois après mois, année après année.",
              "Every day, the weather and the light recompose this spectacle under a vast sky. The photographs only hint at it: scanning this panorama, the eye takes in up to 430 million points, the equivalent of 50 4K images, in depth, with a light no camera can render. A very-high-definition presence where you discover something new day after day, month after month, year after year.")}</p>
          </div>
          <figure className="ab-map">
            <img src={lang === "fr" ? "/media/plan_tours_fr.webp" : "/media/plan_tours_en.webp"} alt={lang === "fr" ? "Plan des tours de 40 étages et plus à Manhattan" : "Map of 40-storey-plus towers in Manhattan"} loading="lazy" />
          </figure>
        </div>
        <div className="ab-photos">
          <figure className="ab-wide"><img src="/media/office_day.webp" alt="" loading="lazy" /><figcaption>{t("Le bureau, le jour", "The study, by day")}</figcaption></figure>
          <figure><img src="/media/office_night.webp" alt="" loading="lazy" /><figcaption>{t("Le bureau, la nuit", "The study, at night")}</figcaption></figure>
          <figure><img src="/media/terrace_north_esb.webp" alt="" loading="lazy" /><figcaption>{t("Terrasse nord, l'Empire State", "North terrace, the Empire State")}</figcaption></figure>
        </div>
        <p className="ab-src">{t("Plan : tours de 140 m et plus (≈ 40 étages), recensées à Manhattan seulement ; zone dorée : directions sans tour de cette hauteur, jusqu'aux rives. Source : NYC Open Data, oct. 2026. Résolution de l'œil : estimation de Roger Clark (0,3 minute d'arc), panorama de 180° × 60°.",
          "Map: towers of 140 m and more (≈ 40 storeys), surveyed in Manhattan only; golden area: directions with no tower of that height, up to the shores. Source: NYC Open Data, Oct. 2026. Eye resolution: Roger Clark's estimate (0.3 arcminute), 180° × 60° panorama.")}</p>
      </div>
    </section>
  );
}
