// ─────────────────────────────────────────────────────────────
// "The Neighbourhood" page (/quartier) — English + French.
// Every fact here was checked against the sources listed at the bottom (October 2026).
// ─────────────────────────────────────────────────────────────

export type L = { en: string; fr: string };
const l = (en: string, fr: string): L => ({ en, fr });

export const page = {
  eyebrow: l("Beyond the listing", "Au-delà de l'annonce"),
  title: l("The Neighbourhood, in Depth", "Le quartier, en profondeur"),
  lead: l(
    "What the 50th floor looks out on: more than a century of New York architecture, a park with a long public life, some of the city's best tables and a district that big companies are choosing again.",
    "Ce que l'on voit depuis le 50e étage : plus d'un siècle d'architecture new-yorkaise, un parc à la longue histoire publique, quelques-unes des meilleures tables de la ville et un quartier que les grandes entreprises choisissent à nouveau."
  ),
  back: l("Back to the residence", "Retour à la résidence"),
};

export const view = {
  number: l("The view", "La vue"),
  title: l("A Park Framed by Landmarks", "Un parc encadré de monuments"),
  paras: [
    l(
      "Residence 50A looks over Madison Square Park: 6.2 acres of public garden, opened on May 10, 1847, and run by the Madison Square Park Conservancy, which raises its entire operating budget.",
      "La résidence 50A domine Madison Square Park : 2,5 hectares de jardin public, ouvert le 10 mai 1847 et géré par la Madison Square Park Conservancy, qui finance la totalité de son fonctionnement."
    ),
    l(
      "The park is framed by designated landmarks — the Flatiron Building, the Met Life Tower and the Appellate Division Courthouse — and by two historic districts: Ladies' Mile (1989) to the south and Madison Square North (2001) to the north and west. None of these buildings can be demolished or substantially altered without approval from the Landmarks Preservation Commission.",
      "Le parc est encadré de bâtiments classés — le Flatiron, la tour Met Life et le palais de justice de l'Appellate Division — et de deux quartiers historiques : Ladies' Mile (1989) au sud et Madison Square North (2001) au nord et à l'ouest. Aucun de ces bâtiments ne peut être démoli ni sensiblement modifié sans l'accord de la Landmarks Preservation Commission."
    ),
    l(
      "New York law does not guarantee any view. But the public park and the protected buildings around it make this outlook unusually stable.",
      "Le droit new-yorkais ne garantit aucune vue. Mais le parc public et les monuments protégés qui l'entourent rendent cette perspective particulièrement stable."
    ),
  ],
  tower: l(
    "One Madison itself rises 621 ft (189 m) over 60 stories. Designed by CetraRuddy, it was completed in 2013 under Related Companies.",
    "One Madison culmine elle-même à 189 m, sur 60 étages. Dessinée par CetraRuddy, elle a été achevée en 2013 par Related Companies."
  ),
};

export const landmarks = {
  number: l("Landmarks", "Monuments"),
  title: l("A Century of New York Architecture", "Un siècle d'architecture new-yorkaise"),
  cols: { name: l("Building", "Bâtiment"), year: l("Year", "Année"), what: l("Why it matters", "Ce qui le distingue"), prot: l("Protection", "Protection") },
  items: [
    {
      name: "Met Life Tower", addr: "1 Madison Ave", year: "1909",
      what: l(
        "The world's tallest building until 1913 (700 ft). Its four 26-ft clock faces were the largest in the world. Home to the New York EDITION hotel since 2015.",
        "Plus haut bâtiment du monde jusqu'en 1913 (213 m). Ses quatre horloges de 8 m étaient les plus grandes du monde. Abrite l'hôtel EDITION depuis 2015."
      ),
      prot: l("NYC landmark (1989) · National Historic Landmark (1978)", "Monument de New York (1989) · monument historique national (1978)"),
      url: "https://en.wikipedia.org/wiki/Metropolitan_Life_Insurance_Company_Tower",
    },
    {
      name: "Flatiron Building", addr: "175 Fifth Ave", year: "1902",
      what: l(
        "Designed by Daniel Burnham. Now being converted into 38 residences; the condominium offering plan was approved in September 2025.",
        "Signé Daniel Burnham. En cours de transformation en 38 résidences ; le plan de vente a été approuvé en septembre 2025."
      ),
      prot: l("NYC landmark (1966) · National Historic Landmark (1989)", "Monument de New York (1966) · monument historique national (1989)"),
      url: "https://en.wikipedia.org/wiki/Flatiron_Building",
    },
    {
      name: "Met Life North Building", addr: "11 Madison Ave", year: "1929–1950",
      what: l("Art Deco, 30 stories. Home to Eleven Madison Park.", "Art déco, 30 étages. Abrite Eleven Madison Park."),
      prot: l("National Register of Historic Places (1996)", "Registre national des lieux historiques (1996)"),
      url: "https://en.wikipedia.org/wiki/Metropolitan_Life_North_Building",
    },
    {
      name: "Appellate Division Courthouse", addr: "Madison Ave & 25th St", year: "1900",
      what: l("Its sculpture program was led by Daniel Chester French.", "Programme de sculptures dirigé par Daniel Chester French."),
      prot: l("Exterior landmarked (1966), interior (1981)", "Façade classée (1966), intérieur (1981)"),
      url: "https://en.wikipedia.org/wiki/Appellate_Division_Courthouse_of_New_York_State",
    },
    {
      name: "Empire State Building", addr: "350 Fifth Ave", year: "1931",
      what: l("1,454 ft to the tip of its antenna.", "443 m avec l'antenne."),
      prot: l("—", "—"),
      url: "https://en.wikipedia.org/wiki/Empire_State_Building",
    },
  ],
};

export const park = {
  number: l("The park", "Le parc"),
  title: l("Madison Square Park, Through the Years", "Madison Square Park au fil du temps"),
  events: [
    { y: "1847", t: l("The park opens to the public on May 10.", "Le parc ouvre au public le 10 mai.") },
    { y: "1876–1882", t: l("The arm and torch of the Statue of Liberty are displayed in the park to raise funds for the statue.", "Le bras et la torche de la statue de la Liberté y sont exposés pour financer la statue.") },
    { y: "1879", t: l("The first Madison Square Garden opens at Madison Avenue and 26th Street; it stays there until 1925.", "Le premier Madison Square Garden ouvre à l'angle de Madison Avenue et de la 26e rue ; il y reste jusqu'en 1925.") },
    { y: "1912", t: l("The first public Christmas tree lighting in the United States.", "Première illumination publique d'un sapin de Noël aux États-Unis.") },
    { y: "2001", t: l("Danny Meyer opens a hot dog cart in the park, as part of the Conservancy's first art installation.", "Danny Meyer installe un chariot à hot-dogs dans le parc, dans le cadre de la première installation artistique de la Conservancy.") },
    { y: "2004", t: l("The first Shake Shack kiosk opens, and the Conservancy launches Mad. Sq. Art, its contemporary art program — about fifty works since.", "Le premier kiosque Shake Shack ouvre, et la Conservancy lance Mad. Sq. Art, son programme d'art contemporain : une cinquantaine d'œuvres depuis.") },
  ],
};

export const shack = {
  number: l("Born in the park", "Né dans le parc"),
  title: l("The Shake Shack Story", "L'aventure Shake Shack"),
  paras: [
    l(
      "In 2001, Danny Meyer set up a hot dog cart in Madison Square Park for \"I ♥ Taxi\", the Conservancy's first art installation. The cart was supplied by the kitchen of Eleven Madison Park.",
      "En 2001, Danny Meyer installe un chariot à hot-dogs dans Madison Square Park pour « I ♥ Taxi », la première installation artistique de la Conservancy. Le chariot est approvisionné par la cuisine d'Eleven Madison Park."
    ),
    l(
      "The permanent kiosk opened in July 2004. It is still the first Shake Shack.",
      "Le kiosque permanent ouvre en juillet 2004. C'est toujours le premier Shake Shack."
    ),
  ],
  figures: [
    { v: "2004", l: l("first kiosk, in the park", "premier kiosque, dans le parc") },
    { v: "2015", l: l("NYSE listing at $21 a share (SHAK)", "entrée en bourse à 21 $ l'action (SHAK)") },
    { v: "710+", l: l("locations worldwide (August 2026)", "restaurants dans le monde (août 2026)") },
  ],
};

export const tables = {
  number: l("Michelin", "Michelin"),
  title: l("Six Starred Tables Within 600 m", "Six tables étoilées à moins de 600 m"),
  sub: l(
    "Michelin Guide 2025. Walking distances are approximate, from 23 East 22nd Street. The 2026 guide is announced on December 14, 2026.",
    "Guide Michelin 2025. Distances à pied approximatives depuis le 23 East 22nd Street. Le guide 2026 sera publié le 14 décembre 2026."
  ),
  cols: { name: l("Restaurant", "Restaurant"), cuisine: l("Cuisine", "Cuisine"), stars: l("Michelin", "Michelin"), dist: l("Distance", "Distance") },
  items: [
    { name: "Eleven Madison Park", addr: "11 Madison Ave", cuisine: l("Contemporary; meat and fish back since October 2025", "Contemporaine ; viande et poisson de retour depuis octobre 2025"), stars: l("3 stars", "3 étoiles"), dist: "~250 m", url: "https://guide.michelin.com/us/en/new-york-state/new-york/restaurant/eleven-madison-park" },
    { name: "Jua", addr: "36 E 22nd St", cuisine: l("Korean", "Coréenne"), stars: l("1 star", "1 étoile"), dist: "~50 m", url: "https://en.wikipedia.org/wiki/Jua_(restaurant)" },
    { name: "Gramercy Tavern", addr: "42 E 20th St", cuisine: l("Contemporary American", "Américaine contemporaine"), stars: l("1 star", "1 étoile"), dist: "~200 m", url: "https://guide.michelin.com/en/new-york-state/new-york/restaurant/gramercy-tavern" },
    { name: "Cote", addr: "16 W 22nd St", cuisine: l("Korean steakhouse", "Steakhouse coréen"), stars: l("1 star", "1 étoile"), dist: "~300 m", url: "https://guide.michelin.com/us/en/new-york-state/new-york/restaurant/cote" },
    { name: "Oiji Mi", addr: "17 W 19th St", cuisine: l("Contemporary Korean", "Coréenne contemporaine"), stars: l("1 star", "1 étoile"), dist: "~450 m", url: "https://guide.michelin.com/en/new-york-state/new-york/restaurant/oiji-mi" },
    { name: "Noda", addr: "37 W 20th St", cuisine: l("Sushi", "Sushi"), stars: l("1 star", "1 étoile"), dist: "~550 m", url: "https://guide.michelin.com/us/en/new-york-state/new-york/restaurant/noda" },
  ],
  more: l(
    "A little further: Atomix (2 stars, about 750 m). Le Jardin sur Madison, Daniel Boulud's rooftop across 23rd Street, is presented in the Dining section.",
    "Un peu plus loin : Atomix (2 étoiles, environ 750 m). Le Jardin sur Madison, le rooftop de Daniel Boulud de l'autre côté de la 23e rue, est présenté dans la section Tables."
  ),
};

export const economy = {
  number: l("The district", "Le quartier"),
  title: l("Where Major Companies Are Choosing to Be", "Là où les grandes entreprises choisissent de s'installer"),
  figures: [
    { v: "100%", l: l("leased: One Madison Avenue, the office tower next door, since Q1 2026 — IBM, Palo Alto Networks, Coinbase, Franklin Templeton, Harvey AI", "loués : One Madison Avenue, la tour de bureaux voisine, depuis le 1er trimestre 2026 — IBM, Palo Alto Networks, Coinbase, Franklin Templeton, Harvey AI") },
    { v: "18%", l: l("Class A office availability in Q3 2025, down from 30% in early 2024", "de disponibilité des bureaux haut de gamme au 3e trimestre 2025, contre 30 % début 2024") },
    { v: "86%", l: l("of pre-pandemic employee visits to the district (Q1 2026)", "de la fréquentation des salariés d'avant la pandémie (1er trimestre 2026)") },
  ],
  source: l("Sources: Flatiron NoMad Partnership economic reports; Commercial Observer.", "Sources : rapports économiques du Flatiron NoMad Partnership ; Commercial Observer."),
};

export const sources: { t: string; u: string }[] = [
  { t: "Madison Square Park — Wikipedia", u: "https://en.wikipedia.org/wiki/Madison_Square_and_Madison_Square_Park" },
  { t: "Historical marker, Madison Square Park", u: "https://www.hmdb.org/m.asp?m=241335" },
  { t: "One Madison — Wikipedia", u: "https://en.wikipedia.org/wiki/One_Madison" },
  { t: "Madison Square North Historic District", u: "https://en.wikipedia.org/wiki/Madison_Square_North_Historic_District" },
  { t: "Ladies' Mile Historic District", u: "https://en.wikipedia.org/wiki/Ladies%27_Mile_Historic_District" },
  { t: "Is your view a property right? — Cooperator News", u: "https://cooperatornews.com/article/is-your-view-a-property-right" },
  { t: "Flatiron conversion — The Real Deal", u: "https://therealdeal.com/new-york/2025/06/26/flatiron-building-conversion-takes-shape" },
  { t: "Statue of Liberty arm in Madison Square — Bowery Boys", u: "https://www.boweryboyshistory.com/2022/02/when-statue-of-liberty-left-her-arm-in.html" },
  { t: "Shake Shack origins — Mashed", u: "https://www.mashed.com/1316573/what-it-is-like-eat-first-shake-shack/" },
  { t: "Shake Shack IPO — Renaissance Capital", u: "https://www.renaissancecapital.com/IPO-Center/News/22989/shake-shack-prices-ipo-at-21-above-upwardly-revised-17-19-range" },
  { t: "Shake Shack Q2 2026 results", u: "https://www.businesswire.com/news/home/20260805111482/en/" },
  { t: "Michelin Guide New York 2025", u: "https://guide.michelin.com/ie/en/article/michelin-guide-ceremony/all-the-stars-in-the-michelin-guide-to-new-york-city-2025" },
  { t: "IBM at One Madison Avenue — Commercial Observer", u: "https://commercialobserver.com/2025/01/ibm-lease-sl-green-one-madison-avenue/" },
  { t: "Flatiron NoMad economic snapshot, Q1 2026", u: "https://flatironnomad.nyc/newsletter/april-23-2026-flatiron-nomad-economic-development-snapshot-q1-2026/" },
  { t: "Flatiron NoMad economic report, Q3 2025", u: "https://www.flatironnomad.nyc/wp-content/uploads/2025/10/Q3-2025-Economic-Report_10.15.pdf" },
];
