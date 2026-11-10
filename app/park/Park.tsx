// The plunging view over Madison Square Park, and why this landscape will hold (from the PRIVÉ notebook, "Un paysage tenu pour des décennies").
import "./park.css";

export default function Park({ lang }: { lang: "fr" | "en" }) {
  const t = (a: React.ReactNode, b: React.ReactNode) => (lang === "fr" ? a : b);
  return (
    <section id="park" className="sec">
      <div className="wrap">
        <div className="shead">
          <p className="eyebrow">{t("Vue plongeante · Madison Square Park", "Looking down · Madison Square Park")}</p>
          <h2>{t("Un paysage tenu pour des décennies", "A landscape held for decades")}</h2>
          <div className="rule" />
        </div>
        <div className="pk-grid">
          <div className="pk-pics">
            <figure><img src="/media/park_from_above.webp" alt="" loading="lazy" /><figcaption>{t("Le parc, vu du 50ᵉ étage", "The park, from the 50th floor")}</figcaption></figure>
            <figure><img src="/media/clock_from_above.webp" alt="" loading="lazy" style={{ objectPosition: "50% 70%" }} /><figcaption>{t("La tour de l'horloge, vue d'au-dessus", "The clock tower, seen from above")}</figcaption></figure>
          </div>
          <div className="pk-note">
            <p className="pk-lead">{t("D'en haut, tout se lit : un rectangle de verdure, et autour, des bâtiments que l'on ne remplacera pas.", "From above it all reads at once: a rectangle of green, and around it, buildings that will not be replaced.")}</p>
            <ol>
              <li><b>{t("Le parc ne se construit pas.", "The park cannot be built on.")}</b> {t("Terrain public depuis la charte de 1686, parc depuis 1847, il appartient à la Ville. Tout projet soumis à autorisation de la Ville doit étudier l'ombre qu'il jetterait sur un parc public.", "Public land since the 1686 charter and a park since 1847, it belongs to the City. Any project that needs City approval must study the shadow it would cast on a public park.")}</li>
              <li><b>{t("Les voisins sont classés.", "The neighbours are landmarked.")}</b> {t("Le Flatiron, la tour de l'horloge, le palais de justice, le New York Life Building : aucun ne peut être démoli ni surélevé sans l'accord de la Landmarks Preservation Commission.", "The Flatiron, the clock tower, the courthouse, the New York Life Building: none can be demolished or built higher without the Landmarks Preservation Commission's approval.")}</li>
              <li><b>{t("Les rues autour aussi.", "So are the streets around.")}</b> {t("Deux quartiers historiques bordent le parc : Ladies' Mile au sud (1989) et Madison Square North au nord et à l'ouest (2001). Chaque façade nouvelle y passe devant la même commission.", "Two historic districts border the park: Ladies' Mile to the south (1989) and Madison Square North to the north and west (2001). Every new facade there goes before the same commission.")}</li>
            </ol>
            <p className="pk-end">{t("Le droit ne garantit aucune vue. Mais ici, la ville a figé ce qu'il y a de plus précieux : le jardin au milieu, les monuments autour, et l'espace entre les deux.", "The law guarantees no view. But here, the city has fixed what is most precious: the garden in the middle, the landmarks around it, and the space between them.")}</p>
            <p className="pk-src">{t("Sources : NYC Parks ; Landmarks Preservation Commission ; CEQR Technical Manual (étude des ombres).", "Sources: NYC Parks; Landmarks Preservation Commission; CEQR Technical Manual (shadow analysis).")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
