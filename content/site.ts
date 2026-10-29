// ─────────────────────────────────────────────────────────────
// ALL THE TEXT OF THE SITE LIVES HERE (English + French).
// To change a sentence, a price or a restaurant, edit this file only.
// ─────────────────────────────────────────────────────────────

export type L = { en: string; fr: string };
const l = (en: string, fr: string): L => ({ en, fr });

export const M = (f: string) => `/media/${f}`;

// ── Key figures ──────────────────────────────────────────────
export const PRICE = 14_995_000; // asking price in USD (REBNY listing, 29 Sept 2026)
export const INTERIOR_SQFT = 1647;
export const TERRACE_SQFT = 481;
export const priceLabel = (lang: "en" | "fr") =>
  lang === "en" ? `$${PRICE.toLocaleString("en-US")}` : `${PRICE.toLocaleString("fr-FR")} $`;
export const ppsf = Math.round(PRICE / INTERIOR_SQFT); // ≈ 9,104

export const nav: { id: string; label: L; href?: string }[] = [
  { id: "residence", label: l("Residence", "Résidence") },
  { id: "views", label: l("Views", "Vues") },
  { id: "building", label: l("Building", "Immeuble") },
  { id: "location", label: l("Location", "Quartier") },
  { id: "dining", label: l("Dining", "Tables") },
  { id: "gallery", label: l("Gallery", "Galerie") },
  { id: "quartier", label: l("Neighbourhood", "Le quartier"), href: "/quartier" },
  { id: "terms", label: l("Acquisition", "Acquisition") },
  { id: "contact", label: l("Contact", "Contact") },
];

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  eyebrow: l("Confidential — Private Offering", "Confidentiel — Offre privée"),
  title: "One Madison",
  floor: l("Floor 50", "50e étage"),
  lead: l(
    "A full-floor residence at the head of Madison Avenue, above Madison Square Park. 360° views, two open-air terraces.",
    "Une résidence plein étage à la tête de Madison Avenue, au-dessus de Madison Square Park. Vues à 360°, deux terrasses à l'air libre."
  ),
  slides: [
    { src: M("lhoest_evening_metlife_madison.webp"), alt: l("Evening light — Met Life campanile, Madison Avenue axis, Empire State Building", "Lumière du soir — campanile Met Life, axe de Madison Avenue, Empire State Building") },
    { src: M("lhoest_sunset_lower_manhattan.webp"), alt: l("Sunset — Lower Manhattan, One World Trade Center, Hudson River", "Coucher de soleil — Lower Manhattan, One World Trade Center, Hudson") },
    { src: M("lhoest_terrace_night_panorama.webp"), alt: l("South terrace at night — Lower Manhattan", "Terrasse sud la nuit — Lower Manhattan") },
    { src: M("dining_metlife_sunset.webp"), alt: l("Dining room at dusk — Met Life campanile framed by the glazing", "Salle à manger au crépuscule — le campanile Met Life cadré par le vitrage") },
  ],
  stats: [
    { v: "50", l: l("Floor", "Étage") },
    { v: "1,647", l: l("Interior sq ft", "pi² intérieurs") },
    { v: "481", l: l("Terrace sq ft", "pi² de terrasses") },
    { v: "360°", l: l("Views", "Vues") },
    { v: "3", l: l("Bedrooms", "Chambres") },
  ],
};

// ── 01 Residence ─────────────────────────────────────────────
export const residence = {
  number: l("01 — The Residence", "01 — La résidence"),
  title: l("A Full-Floor Sanctuary", "Un plateau entier"),
  subtitle: l(
    "The only residence on the 50th floor. Never subdivided.",
    "La seule résidence du 50e étage. Jamais subdivisée."
  ),
  image: { src: M("salonbbb.webp"), caption: l("Living & dining — 708 sq ft / 65.8 m²", "Séjour et salle à manger — 708 pi² / 65,8 m²") },
  paras: [
    l(
      "On the 50th level of One Madison, this residence occupies the entire floor plate. The floor has never been divided, and its custom finishes are in excellent condition.",
      "Au 50e niveau de One Madison, cette résidence occupe la totalité du plateau. L'étage n'a jamais été divisé et ses finitions sur mesure sont en excellent état."
    ),
    l(
      "The plan is organized around a central elevator hall. The living and dining space commands the south and east exposures, three bedrooms are distributed across the west and east wings, and the terraces open from the main living area.",
      "Le plan s'organise autour d'un palier d'ascenseur central. Le séjour et la salle à manger occupent les expositions sud et est, trois chambres se répartissent entre les ailes ouest et est, et les terrasses s'ouvrent depuis le séjour."
    ),
  ],
  roomsTitle: l("Room by room — official square footage", "Pièce par pièce — surfaces officielles"),
  rooms: [
    { room: l("Kitchen & living room", "Cuisine et séjour"), sqft: "708", sqm: "65.8" },
    { room: l("Primary bedroom", "Chambre principale"), sqft: "291", sqm: "27.0" },
    { room: l("East bedroom", "Chambre est"), sqft: "200", sqm: "18.6" },
    { room: l("West bedroom", "Chambre ouest"), sqft: "164", sqm: "15.4" },
    { room: l("Elevator hall", "Palier d'ascenseur"), sqft: "127", sqm: "11.8" },
    { room: l("West hall", "Dégagement ouest"), sqft: "112", sqm: "10.4" },
    { room: l("East hall", "Dégagement est"), sqft: "45", sqm: "4.2" },
  ],
  terraces: [
    { room: l("South terrace", "Terrasse sud"), sqft: "~337", sqm: "~31.3" },
    { room: l("East terrace", "Terrasse est"), sqft: "~144", sqm: "~13.4" },
  ],
  totalInterior: { sqft: "1,647", sqm: "153.1" },
  terraceNote: l(
    "Terrace surfaces are estimated from the architectural plans. Official certification on request.",
    "Les surfaces des terrasses sont estimées d'après les plans d'architecte. Certification officielle sur demande."
  ),
  planTitle: l("Floor plan — 50th level", "Plan du 50e niveau"),
  plan: M("plan_floor50_polygons.webp"),
  finishesTitle: l("Finishes", "Finitions"),
  finishes: [
    l("Wide-plank solid oak, 8 in / 20.3 cm", "Chêne massif en larges lames, 20,3 cm"),
    l("11 ft / 3.35 m ceilings in the main living space", "Hauteur sous plafond de 3,35 m dans le séjour"),
    l("Bronze-tinted floor-to-ceiling curtain wall by CetraRuddy", "Mur-rideau toute hauteur teinté bronze, signé CetraRuddy"),
    l("Gaggenau appliances, Sub-Zero refrigeration, Louro Preto rosewood cabinetry", "Électroménager Gaggenau, froid Sub-Zero, ébénisterie en palissandre Louro Preto"),
    l("Calacatta marble, custom fixtures", "Marbre Calacatta, robinetterie sur mesure"),
    l("Raised floors — acoustic isolation between levels", "Planchers techniques — isolation acoustique entre niveaux"),
  ],
};

// ── 02 Views ─────────────────────────────────────────────────
export const views = {
  number: l("02 — Views & Terraces", "02 — Vues et terrasses"),
  title: l("360° Unobstructed", "360° sans obstacle"),
  subtitle: l(
    "Madison Avenue begins at the foot of the building and runs straight north for 9.7 km. From the 50th floor, you look up the entire avenue.",
    "Madison Avenue commence au pied de l'immeuble et file en ligne droite vers le nord sur 9,7 km. Depuis le 50e étage, on regarde l'avenue entière en enfilade."
  ),
  directions: [
    { dir: l("North", "Nord"), icon: "↑", items: [
      l("Madison Avenue — 9.7 km straight axis", "Madison Avenue — axe rectiligne de 9,7 km"),
      l("Met Life Tower campanile (adjacent)", "Campanile de la Met Life Tower (voisin)"),
      l("Madison Square Park directly below", "Madison Square Park juste en dessous"),
      l("Empire State Building · Midtown", "Empire State Building · Midtown"),
    ] },
    { dir: l("South", "Sud"), icon: "↓", items: [
      l("Lower Manhattan skyline", "Skyline de Lower Manhattan"),
      l("One World Trade Center", "One World Trade Center"),
      l("Statue of Liberty — on clear days", "Statue de la Liberté — par temps clair"),
    ] },
    { dir: l("East", "Est"), icon: "→", items: [
      l("East River", "East River"),
      l("Brooklyn & Queens skyline", "Brooklyn et Queens"),
      l("Williamsburg Bridge", "Williamsburg Bridge"),
      l("Gramercy & Murray Hill", "Gramercy et Murray Hill"),
    ] },
    { dir: l("West", "Ouest"), icon: "←", items: [
      l("Flatiron Building (immediately adjacent)", "Flatiron Building (immédiatement voisin)"),
      l("Hudson River · Hudson Yards", "Hudson · Hudson Yards"),
      l("New Jersey Palisades", "Falaises du New Jersey"),
      l("Chelsea & West Village", "Chelsea et West Village"),
    ] },
  ],
  axisTitle: l("At the head of Madison Avenue", "À la tête de Madison Avenue"),
  axisText: [
    l(
      "Madison Avenue starts at 23rd Street, at Madison Square, and runs in a straight line for 9.7 km (6 miles) to 142nd Street in Harlem. One Madison stands at its southern end, so the whole avenue lies in the axis of the view.",
      "Madison Avenue naît sur la 23e rue, à Madison Square, et file en ligne droite sur 9,7 km jusqu'à la 142e rue, à Harlem. One Madison se dresse à son extrémité sud : toute l'avenue est dans l'axe de la vue."
    ),
    l(
      "In Manhattan, the only other great avenue closed by a building is Park Avenue, ended by Grand Central and the MetLife Building, which are offices. Here, the building is a residence.",
      "À Manhattan, la seule autre grande avenue fermée par un immeuble est Park Avenue, arrêtée par Grand Central et le MetLife Building, qui sont des bureaux. Ici, l'immeuble est une résidence."
    ),
    l(
      "The view is protected for generations: Madison Square Park prevents any building opposite, and the surrounding blocks lie in historic districts (Ladies' Mile, Madison Square North, Gramercy Park).",
      "La vue est protégée pour des générations : Madison Square Park interdit tout vis-à-vis, et les îlots voisins sont classés (Ladies' Mile, Madison Square North, Gramercy Park)."
    ),
  ],
  axisImage: { src: M("lhoest_night_madison_avenue.webp"), caption: l("Madison Avenue at night, looking north from Floor 50", "Madison Avenue la nuit, vers le nord depuis le 50e étage") },
  nadirImage: { src: M("lhoest_nadir_intersection.webp"), caption: l("From the terrace — looking straight down", "Depuis la terrasse — vue plongeante") },
  riversTitle: l("Both rivers", "Les deux fleuves"),
  riversText: l(
    "Floor 50 looks onto the Hudson River to the west and the East River to the east, a duality few Manhattan residences can claim. On clear days the Statue of Liberty appears on the southern horizon.",
    "Le 50e étage donne à la fois sur l'Hudson à l'ouest et sur l'East River à l'est, une dualité que peu de résidences de Manhattan offrent. Par temps clair, la Statue de la Liberté se dessine à l'horizon sud."
  ),
  terracesTitle: l("Two open-air terraces — over 260° without glass", "Deux terrasses à l'air libre — plus de 260° sans vitre"),
  terracesText: l(
    "Unlike most towers, where glazing frames the view, the south and east terraces offer open-air panoramas over more than 260°: no glass, no reflections, only the skyline, both rivers and the Met Life campanile at eye level.",
    "Contrairement à la plupart des tours, où le vitrage encadre la vue, les terrasses sud et est offrent des panoramas en plein air sur plus de 260° : pas de vitre, pas de reflet, seulement la skyline, les deux fleuves et le campanile Met Life à hauteur des yeux."
  ),
  terraceFigures: [
    { v: "~31.3 m²", l: l("South terrace", "Terrasse sud") },
    { v: "~13.4 m²", l: l("East terrace", "Terrasse est") },
    { v: "~44.7 m²", l: l("Total outdoor", "Total extérieur") },
  ],
  panorama: [
    { src: M("view360_01_metlife_night.webp"), dir: l("North", "Nord"), caption: l("Met Life campanile at eye level · Madison Avenue · Empire State Building", "Campanile Met Life à hauteur des yeux · Madison Avenue · Empire State Building") },
    { src: M("view360_02_east_river.webp"), dir: l("East", "Est"), caption: l("East River · Stuyvesant Town · Queens & Brooklyn", "East River · Stuyvesant Town · Queens et Brooklyn") },
    { src: M("view360_03_lower_manhattan.webp"), dir: l("South", "Sud"), caption: l("Lower Manhattan · One World Trade Center · Hudson River", "Lower Manhattan · One World Trade Center · Hudson") },
    { src: M("view360_04_hudson_cruise.webp"), dir: l("West", "Ouest"), caption: l("Hudson River · an ocean liner leaving · Chelsea waterfront", "Hudson · un paquebot au départ · quais de Chelsea") },
  ],
};

// ── 03 Building ──────────────────────────────────────────────
export const building = {
  number: l("03 — The Building", "03 — L'immeuble"),
  title: "One Madison",
  subtitle: l(
    "60 stories. 621 feet. Designed by CetraRuddy, interiors by Yabu Pushelberg.",
    "60 étages. 189 mètres. Architecture CetraRuddy, intérieurs Yabu Pushelberg."
  ),
  image: { src: M("lhoest_day_metlife_empire.webp"), caption: l("Metropolitan Life Tower (1909) and Empire State Building from Floor 50 — photo: Lhoest", "Metropolitan Life Tower (1909) et Empire State Building depuis le 50e — photo : Lhoest") },
  paras: [
    l(
      "One Madison rises 621 feet (189 m) over 60 stories at the southern end of Madison Avenue. Its 12:1 height-to-width ratio places it among the slenderest towers in the world.",
      "One Madison s'élève à 189 m sur 60 étages, à l'extrémité sud de Madison Avenue. Son rapport hauteur-largeur de 12 pour 1 la place parmi les tours les plus élancées du monde."
    ),
    l(
      "The New York Times architecture critic Nicolai Ouroussoff called it “a dazzling addition to a street that includes two of the city's most celebrated skyscrapers: Pierre LeBrun's 1909 Metropolitan Life Tower and Daniel Burnham's 1903 Flatiron Building.”",
      "Le critique d'architecture du New York Times Nicolai Ouroussoff y a vu « un ajout éblouissant à une rue qui compte deux des gratte-ciel les plus célèbres de la ville : la Metropolitan Life Tower de Pierre LeBrun (1909) et le Flatiron Building de Daniel Burnham (1903) »."
    ),
  ],
  specs: [
    { l: l("Address", "Adresse"), v: "23 East 22nd Street, New York, NY 10010" },
    { l: l("Height", "Hauteur"), v: "621 ft / 189 m" },
    { l: l("Floors", "Étages"), v: "60" },
    { l: l("Architect", "Architecte"), v: "CetraRuddy" },
    { l: l("Interiors", "Intérieurs"), v: "Yabu Pushelberg" },
    { l: l("Developer", "Promoteur"), v: "Related Companies" },
    { l: l("Structure", "Structure"), v: "Reinforced concrete, tuned liquid damper" },
    { l: l("Slenderness", "Élancement"), v: "12 : 1" },
  ],
  clubTitle: l("The One Club — 10,000 sq ft of private amenities", "Le One Club — 930 m² de services privés"),
  club: [
    l("50-ft indoor lap pool", "Piscine intérieure de 15 m"),
    l("Spa with glass-enclosed steam room over the park", "Spa et hammam vitré face au parc"),
    l("Fitness center & yoga studio", "Salle de sport et studio de yoga"),
    l("Screening room", "Salle de projection"),
    l("Private dining room & catering kitchen", "Salle à manger privée et cuisine traiteur"),
    l("Parlor with billiards", "Salon et billard"),
    l("Children's playroom", "Salle de jeux pour enfants"),
    l("Full-time doorman & concierge", "Portier et concierge permanents"),
  ],
};

// ── 04 Location ──────────────────────────────────────────────
export const location = {
  number: l("04 — Location", "04 — Le quartier"),
  title: l("The Crossroads of Manhattan", "Le carrefour de Manhattan"),
  subtitle: l(
    "Where the Flatiron District, NoMad, Gramercy and Chelsea meet, between two of New York's great landmarks.",
    "À la rencontre du Flatiron District, de NoMad, de Gramercy et de Chelsea, entre deux grands monuments de New York."
  ),
  para: l(
    "Madison Square Park lies directly below, with its art installations and the original Shake Shack. The 1903 Flatiron Building and the 1909 Met Life Tower, whose clock faces the south terrace at eye level, are immediately adjacent.",
    "Madison Square Park s'étend juste en dessous, avec ses installations d'art et le Shake Shack d'origine. Le Flatiron Building (1903) et la Met Life Tower (1909), dont l'horloge fait face à la terrasse à hauteur des yeux, sont immédiatement voisins."
  ),
  places: [
    { place: "Madison Square Park", dist: l("Directly below", "Juste en dessous"), note: l("Park, art installations", "Parc, installations d'art") },
    { place: "Flatiron Building", dist: l("Adjacent", "Voisin"), note: l("Daniel Burnham, 1903", "Daniel Burnham, 1903") },
    { place: "Met Life Tower", dist: l("Adjacent", "Voisin"), note: l("Pierre LeBrun, 1909", "Pierre LeBrun, 1909") },
    { place: "23rd St — N · R · W", dist: l("At the corner", "Au coin de la rue"), note: l("Subway", "Métro") },
    { place: "Union Square", dist: "1 km", note: l("Greenmarket, transit hub", "Marché, nœud de transports") },
    { place: "Chelsea / High Line", dist: "1.3 km", note: l("Galleries, parks", "Galeries, parcs") },
    { place: "Fifth Avenue shopping", dist: "1.6 km", note: l("Bergdorf, Saks, MoMA", "Bergdorf, Saks, MoMA") },
    { place: "JFK Airport", dist: l("~30 min by car", "~30 min en voiture"), note: l("Off-peak", "Hors heures de pointe") },
  ],
  mapTitle: l("Map", "Carte"),
  mapLink: "https://www.openstreetmap.org/?mlat=40.7406&mlon=-73.9880#map=17/40.7406/-73.9880",
};

// ── Dining ───────────────────────────────────────────────────
// Photos are the restaurants' own Instagram posts, shown through the official embed (credited, no copy).
// Distances: walking estimates from 23 E 22nd St. Michelin: 2025 New York guide (2026 guide due 14 Dec 2026).
type Resto = { name: string; badge: L; tag: L; desc: L; dist: number; addr: string; site?: string; ig?: string; fb?: string; book?: string; posts: string[] };
const P = (c: string) => `https://www.instagram.com/p/${c}/`;
const R = (c: string) => `https://www.instagram.com/reel/${c}/`;
export const dining = {
  number: l("Dining", "Les tables"),
  title: l("Five Michelin-starred tables within 300 m", "Cinq tables étoilées à moins de 300 m"),
  subtitle: l(
    "Seven Michelin stars within 300 m of the front door, and more than a dozen notable tables within 550 m, all on foot.",
    "Sept étoiles Michelin à moins de 300 m de la porte, et plus d'une dizaine d'autres belles tables à moins de 550 m, toutes à pied."
  ),
  starred: [
    { name: "Eleven Madison Park", badge: l("3 Michelin stars", "3 étoiles Michelin"), tag: l("Tasting menu", "Menu dégustation"), dist: 200, addr: "11 Madison Ave",
      desc: l("Daniel Humm's seasonal tasting menu, facing the park; it can be served fully plant-based.", "Le menu dégustation de saison de Daniel Humm, face au parc ; il peut être entièrement végétal."),
      site: "https://www.elevenmadisonpark.com", ig: "https://www.instagram.com/elevenmadisonpark/", book: "https://resy.com/cities/new-york-ny/venues/eleven-madison-park", posts: [P("De4FVpyFy_V"), P("De-oZ0AEbsQ")] },
    { name: "Jua", badge: l("1 Michelin star", "1 étoile Michelin"), tag: l("Korean, wood fire", "Coréen, feu de bois"), dist: 50, addr: "36 E 22nd St",
      desc: l("Hoyoung Kim's wood-fired Korean tasting menu, across the street.", "Le menu dégustation coréen au feu de bois de Hoyoung Kim, de l'autre côté de la rue."),
      site: "https://www.juanyc.com", ig: "https://www.instagram.com/jua.nyc/", posts: [P("Dd9Sas_ofDX"), P("DdoiNI3IDaY")] },
    { name: "Gramercy Tavern", badge: l("1 Michelin star", "1 étoile Michelin"), tag: l("Seasonal American", "Américain de saison"), dist: 200, addr: "42 E 20th St",
      desc: l("Danny Meyer's institution since 1994, chef Michael Anthony; nine James Beard Awards.", "L'institution de Danny Meyer depuis 1994, chef Michael Anthony ; neuf James Beard Awards."),
      site: "https://www.gramercytavern.com", ig: "https://www.instagram.com/gramercytavern/", fb: "https://www.facebook.com/GramercyTavern", posts: [P("Dd4ldSGmYDK"), P("DduaSvJGet_")] },
    { name: "Rezdôra", badge: l("1 Michelin star", "1 étoile Michelin"), tag: l("Emilia-Romagna", "Émilie-Romagne"), dist: 200, addr: "27 E 20th St",
      desc: l("Stefano Secchi's fresh pasta from Emilia-Romagna, rolled every morning.", "Les pâtes fraîches d'Émilie-Romagne de Stefano Secchi, abaissées chaque matin."),
      site: "https://www.rezdora.nyc", ig: "https://www.instagram.com/rezdoranyc/", posts: [P("DcObmGQjtUv"), P("Daxsb1JDlx4")] },
    { name: "COTE", badge: l("1 Michelin star", "1 étoile Michelin"), tag: l("Korean steakhouse", "Steakhouse coréen"), dist: 280, addr: "16 W 22nd St",
      desc: l("Korean steakhouse with its own dry-aging room and tabletop grills.", "Steakhouse coréen avec sa propre salle de maturation et des grils à table."),
      site: "https://www.cotekoreansteakhouse.com", ig: "https://www.instagram.com/cote_nyc/", posts: [] },
  ] as Resto[],
  eataly: {
    title: "Eataly Flatiron", dist: 250, addr: "200 Fifth Ave",
    intro: l("The Italian market at the foot of the Flatiron, with three tables worth the visit:", "Le marché italien au pied du Flatiron, avec trois tables qui valent le détour :"),
    picks: [
      { n: "AMALFI Rooftop", d: l("A covered rooftop fourteen floors up, Amalfi-coast menu, open in winter.", "Un toit couvert à quatorze étages, carte de la côte amalfitaine, ouvert l'hiver.") },
      { n: "Il Pesce", d: l("Crudo and oysters opened to order.", "Crudo et huîtres ouvertes à la commande.") },
      { n: "Bar Milano", d: l("A mid-century Milanese bar and restaurant.", "Un bar-restaurant milanais des années cinquante.") },
    ],
    site: "https://www.eataly.com/us_en/stores/nyc-flatiron", ig: "https://www.instagram.com/eatalynewyorkcity/", fb: "https://www.facebook.com/EatalyNYCFlatiron",
    posts: [P("De8LIlpjQd8"), R("DfAChFWi7vC")],
  },
  more: [
    { name: "Cosme", badge: l("Michelin Guide", "Guide Michelin"), tag: l("Modern Mexican", "Mexicain contemporain"), dist: 100, addr: "35 E 21st St",
      desc: l("Enrique Olvera's modern Mexican: duck carnitas and the husk meringue.", "Le Mexique contemporain d'Enrique Olvera : carnitas de canard et meringue au maïs."),
      site: "https://www.cosmenyc.com", ig: "https://www.instagram.com/cosmenyc/", posts: [P("DctjWcIOAnt"), P("DbBxmN-FgvL")] },
    { name: "The Clocktower", badge: l("Michelin Guide", "Guide Michelin"), tag: l("Inside the clock tower", "Dans la tour de l'horloge"), dist: 200, addr: "5 Madison Ave",
      desc: l("Stephen Starr and Jason Atherton's British brasserie on the second floor of the clock tower: beef Wellington, billiards room.", "La brasserie britannique de Stephen Starr et Jason Atherton au deuxième étage de la tour de l'horloge : bœuf Wellington, salle de billard."),
      site: "https://www.theclocktowernyc.com", ig: "https://www.instagram.com/clocktowernyc/", fb: "https://www.facebook.com/TheClocktowerNYC", posts: [P("DeCwt1Agd7C"), P("Ddlyt4CE4d_")] },
    { name: "La Tête d'Or by Daniel", badge: l("Michelin Guide", "Guide Michelin"), tag: l("Daniel Boulud's steakhouse", "Le steakhouse de Daniel Boulud"), dist: 280, addr: "318 Park Ave S",
      desc: l("Boulud's first steakhouse, American with French sauces, and its wagyu prime rib trolley.", "Le premier steakhouse de Boulud, américain aux sauces françaises, et son chariot de côte de wagyu."),
      site: "https://www.latetedorbydaniel.com", ig: "https://www.instagram.com/latetedorbydaniel/", posts: [P("DcjpqdnG2ho"), P("DekBwUdGwS5")] },
    { name: "Hawksmoor NYC", badge: l("Steakhouse", "Steakhouse"), tag: l("London steakhouse", "Steakhouse londonien"), dist: 280, addr: "109 E 22nd St",
      desc: l("The London steakhouse in the vaulted hall of the landmarked United Charities Building.", "Le steakhouse londonien dans la salle voûtée du United Charities Building, immeuble classé."),
      site: "https://www.hawksmoornyc.com", ig: "https://www.instagram.com/hawksmoornyc/", fb: "https://www.facebook.com/HawksmoorNYC", book: "https://www.opentable.com/r/hawksmoor-new-york", posts: [P("DeXNFg2DJck")] },
    { name: "BLACKBARN", badge: l("NoMad", "NoMad"), tag: l("Farm to table", "De la ferme à la table"), dist: 400, addr: "19 E 26th St",
      desc: l("Chef-owned farm-to-table cooking and dry-aged steaks in a barnwood room.", "Cuisine de la ferme à la table et bœuf maturé, dans un décor de bois de grange."),
      site: "https://www.blackbarnrestaurant.com", ig: "https://www.instagram.com/blackbarnrestaurant/", fb: "https://www.facebook.com/blackbarnrestaurant", posts: [P("De4xSrwmN6e"), P("De945wAmPct")] },
    { name: "Upland", badge: l("Michelin Guide", "Guide Michelin"), tag: l("California-Mediterranean", "Californien-méditerranéen"), dist: 450, addr: "345 Park Ave S",
      desc: l("Justin Smillie's cooking for Stephen Starr: pizzas, pastas, the burger.", "La cuisine de Justin Smillie pour Stephen Starr : pizzas, pâtes, le burger."),
      site: "https://www.uplandnyc.com", ig: "https://www.instagram.com/upland_nyc/", fb: "https://www.facebook.com/UplandNYC", posts: [P("DeAFAZ2ARWS"), P("DeuiTS2AUT-")] },
    { name: "ilili", badge: l("NoMad", "NoMad"), tag: l("Modern Lebanese", "Libanais contemporain"), dist: 550, addr: "236 Fifth Ave",
      desc: l("Philippe Massoud's modern Lebanese cooking: duck shawarma, mezze to share.", "La cuisine libanaise contemporaine de Philippe Massoud : shawarma de canard, mezzés à partager."),
      site: "https://www.ililirestaurants.com/location/ilili-nyc", ig: "https://www.instagram.com/ililirestaurants/", fb: "https://www.facebook.com/ililinyc", book: "https://www.opentable.com/ilili", posts: [P("Der12G9mx-n"), P("DclZYaNRP5L")] },
    { name: "Shake Shack", badge: l("The original", "L'original"), tag: l("In the park", "Dans le parc"), dist: 150, addr: "Madison Square Park",
      desc: l("The original kiosk, in the park since 2004, where the chain began.", "Le kiosque d'origine, dans le parc depuis 2004, là où la chaîne est née."),
      site: "https://shakeshack.com", posts: [] },
  ] as Resto[],
  street: {
    title: l("Life on foot", "La vie à pied"),
    text: l(
      "Below the building, Broadway has become a string of pedestrian plazas: tables under yellow umbrellas, a lunch in the sun at the foot of the Flatiron, the park across the street. Here one walks to dinner.",
      "Au pied de l'immeuble, Broadway est devenu une suite de places piétonnes : des tables sous les parasols jaunes, un déjeuner au soleil au pied du Flatiron, le parc de l'autre côté de la rue. Ici, on va dîner à pied."
    ),
    photos: [M("street_terrace_masked.webp"), M("street_plaza_umbrellas.webp"), M("street_broadway_plaza.webp")],
  },
  potter: {
    eyebrow: l("935 Broadway · 150 m", "935 Broadway · 150 m"),
    title: l("A neighbourhood with charm, in every sense", "Un quartier qui a du charme, au sens propre"),
    text: l(
      "When Warner Bros. looked for a home for Harry Potter New York, it chose the corner of Broadway and 22nd Street, at the foot of the Flatiron. Opened in June 2021 on three floors, it was billed as the largest Harry Potter store in the world. Brands choose the places where people walk; this one chose ours.",
      "Quand Warner Bros. a cherché où installer Harry Potter New York, elle a choisi l'angle de Broadway et de la 22e rue, au pied du Flatiron. Ouvert en juin 2021 sur trois étages, il a été présenté comme le plus grand magasin Harry Potter au monde. Les enseignes choisissent les lieux où l'on passe ; celle-ci a choisi le nôtre."
    ),
    site: "https://www.harrypotterstore.com", ig: "https://www.instagram.com/harrypottershop/",
  },
  note: l(
    "Michelin distinctions from the 2025 New York guide; the 2026 guide is due in December 2026. Distances are walking estimates. Photos are the restaurants' own Instagram posts, shown through Instagram's embed; all establishments are independent of One Madison.",
    "Distinctions du Guide Michelin New York 2025 ; le guide 2026 est attendu en décembre 2026. Distances à pied, estimées. Les photos sont les publications Instagram des restaurants eux-mêmes, affichées par l'intégration officielle d'Instagram ; tous les établissements sont indépendants de One Madison."
  ),
};

// ── Gallery ──────────────────────────────────────────────────
export const gallery = {
  eyebrow: l("Visual documentation", "Documentation visuelle"),
  title: l("Photo Gallery", "Galerie photo"),
  photosTab: l("Photos", "Photos"),
  videoTab: l("Slideshow · 90 s", "Diaporama · 90 s"),
  video: M("slideshow-90s.mp4"),
  poster: M("slideshow-poster.jpg"),
  photos: [
    { f: "IMG_2229.webp", c: l("360° night panorama — Empire State, Met Life campanile, Madison Square Park", "Panorama nocturne à 360° — Empire State, campanile Met Life, Madison Square Park") },
    { f: "01.webp", c: l("North — Met Life Tower and the Madison Avenue axis", "Nord — Met Life Tower et l'axe de Madison Avenue") },
    { f: "02.webp", c: l("East — East River at golden hour", "Est — East River à l'heure dorée") },
    { f: "03.webp", c: l("South — Lower Manhattan, One World Trade", "Sud — Lower Manhattan, One World Trade") },
    { f: "04.webp", c: l("West — Hudson River", "Ouest — Hudson") },
    { f: "05.webp", c: l("North terrace — Empire State Building", "Terrasse nord — Empire State Building") },
    { f: "salonbbb.webp", c: l("Living room — the campanile in view", "Séjour — le campanile en vue") },
    { f: "dining_metlife_sunset.webp", c: l("Dining room — Met Life Tower at sunset", "Salle à manger — Met Life Tower au coucher du soleil") },
    { f: "bedroom_empire_state_night.webp", c: l("Primary bedroom — Empire State Building at night", "Chambre principale — Empire State Building la nuit") },
    { f: "office_panorama_west_north.webp", c: l("Office — west and north, Hudson River to Midtown", "Bureau — ouest et nord, de l'Hudson à Midtown") },
    { f: "night_view_window.webp", c: l("Corner glazing at night — Lower Manhattan and Hudson", "Angle vitré la nuit — Lower Manhattan et Hudson") },
    { f: "IMG_2219.webp", c: l("Empire State Building at night", "Empire State Building la nuit") },
    { f: "IMG_2123.webp", c: l("Sunset over the Hudson — Flatiron Building in the foreground", "Coucher de soleil sur l'Hudson — Flatiron Building au premier plan") },
    { f: "IMG_1984.webp", c: l("West — Hudson River and Hudson Yards at golden hour", "Ouest — Hudson et Hudson Yards à l'heure dorée") },
    { f: "IMG_2060.webp", c: l("Hudson Yards at dusk", "Hudson Yards au crépuscule") },
    { f: "IMG_2218.webp", c: l("Hudson Yards at night", "Hudson Yards la nuit") },
    { f: "IMG_22251.webp", c: l("South Manhattan at night — looking straight down", "Sud de Manhattan la nuit — vue plongeante") },
    { f: "IMG_2306.webp", c: l("Manhattan at dusk — One World Trade in the distance", "Manhattan au crépuscule — One World Trade au loin") },
    { f: "161127_Lhoest_002.webp", c: l("Madison Avenue axis — photo: Lhoest", "Axe de Madison Avenue — photo : Lhoest") },
    { f: "161127_Lhoest_003.webp", c: l("Met Life Tower — photo: Lhoest", "Met Life Tower — photo : Lhoest") },
    { f: "161127_Lhoest_029.webp", c: l("South terrace at night — photo: Lhoest", "Terrasse sud la nuit — photo : Lhoest") },
    { f: "PhotoMadisoneveninglight.webp", c: l("Evening light — Met Life campanile", "Lumière du soir — campanile Met Life") },
    { f: "lhoest_terrace_night_south.webp", c: l("South terrace — Lower Manhattan, both rivers — photo: Lhoest", "Terrasse sud — Lower Manhattan, les deux fleuves — photo : Lhoest") },
    { f: "interior_south_night_view.webp", c: l("Corner bedroom — south and west at night", "Chambre d'angle — sud et ouest la nuit") },
    { f: "IMG_7407.webp", c: l("Floor 50", "50e étage") },
    { f: "IMG_8351.webp", c: l("Floor 50", "50e étage") },
    { f: "IMG_7626.webp", c: l("Floor 50", "50e étage") },
    { f: "IMG_7800.webp", c: l("Floor 50 — terrace", "50e étage — terrasse") },
    { f: "IMG_2307.webp", c: l("Floor 50 — panoramic view", "50e étage — vue panoramique") },
    { f: "IMG_8247.webp", c: l("Floor 50 — the campanile", "50e étage — le campanile") },
    { f: "IMG_8093.webp", c: l("Floor 50 — night", "50e étage — la nuit") },
    { f: "IMG_8093b.webp", c: l("Floor 50 — night", "50e étage — la nuit") },
    { f: "IMG_1982.webp", c: l("Floor 50 — Hudson Yards", "50e étage — Hudson Yards") },
    { f: "IMG_7628.webp", c: l("Floor 50 — living", "50e étage — séjour") },
    { f: "IMG_8286.webp", c: l("Floor 50 — terrace", "50e étage — terrasse") },
    { f: "IMG_8292.webp", c: l("Floor 50 — sunset", "50e étage — coucher de soleil") },
    { f: "IMG_7370.webp", c: l("Floor 50", "50e étage") },
    { f: "IMG_7810.webp", c: l("Floor 50 — Met Life Tower and the park", "50e étage — Met Life Tower et le parc") },
    { f: "IMG_7627.webp", c: l("Floor 50 — interior at night", "50e étage — intérieur la nuit") },
    { f: "IMG_7367.webp", c: l("Floor 50 — terrace view", "50e étage — vue depuis la terrasse") },
    { f: "IMG_7811.webp", c: l("Floor 50 — terrace", "50e étage — terrasse") },
    { f: "IMG_2216.webp", c: l("Floor 50 — night panorama", "50e étage — panorama nocturne") },
    { f: "IMG_8291.webp", c: l("Floor 50 — sunset", "50e étage — coucher de soleil") },
    { f: "SCR-20260625-mscx.webp", c: l("One Madison from the street", "One Madison depuis la rue") },
    { f: "SCR-20260625-mswi.webp", c: l("One Madison", "One Madison") },
    { f: "D11B3EF6-EF45-4CB1-8F37-4F3997BAA2FB.webp", c: l("View from Floor 50", "Vue depuis le 50e étage") },
    { f: "4585307E-FE35-4A9B-8D1F-44476B9B5661.webp", c: l("Floor 50 — panoramic", "50e étage — panoramique") },
  ],
};

// ── 05 Residents ─────────────────────────────────────────────
export const residents = {
  number: l("05 — Notable Residents", "05 — Résidents notables"),
  title: l("A Register of Distinction", "Un registre de distinction"),
  subtitle: l(
    "One Madison has drawn prominent figures from media, sport and culture.",
    "One Madison a attiré des personnalités des médias, du sport et de la culture."
  ),
  people: [
    { name: "Rupert Murdoch", role: l("Founder, News Corp", "Fondateur de News Corp"), note: l("Acquired the top floors, including the triplex penthouse, in 2014.", "A acquis les derniers étages, dont le penthouse en triplex, en 2014.") },
    { name: "Tom Brady & Gisele Bündchen", role: l("NFL champion & model", "Champion NFL et mannequin"), note: l("Bought a residence on the 47th floor in 2013.", "Ont acheté une résidence au 47e étage en 2013.") },
    { name: "Peter Buffett", role: l("Composer, son of Warren Buffett", "Compositeur, fils de Warren Buffett"), note: l("Former resident.", "Ancien résident.") },
    { name: "Fredrik Eklund", role: l("Broker, Million Dollar Listing", "Agent, Million Dollar Listing"), note: l("Former resident.", "Ancien résident.") },
  ],
};

// ── 06 Acquisition ───────────────────────────────────────────
export const terms = {
  number: l("06 — Acquisition", "06 — Acquisition"),
  title: l("Terms", "Conditions"),
  subtitle: l("A condominium: exclusivity with transactional flexibility.", "Une copropriété (condominium) : exclusivité et souplesse de transaction."),
  paras: [
    l(
      "One Madison is a condominium, not a co-operative. For international buyers this matters: the board holds a right of first refusal but does not run a co-op style approval of the purchaser.",
      "One Madison est un condominium, et non une coopérative. Pour un acheteur international, c'est déterminant : le conseil dispose d'un droit de préemption, sans la procédure d'agrément d'une coopérative."
    ),
    l(
      "The residence is currently leased. Viewings are by appointment.",
      "La résidence est actuellement louée. Visites sur rendez-vous."
    ),
  ],
  priceLabel: l("Asking price", "Prix demandé"),
  ppsfLabel: l("per sq ft interior", "par pi² intérieur"),
  rows: [
    { l: l("Ownership", "Régime"), v: l("Condominium", "Condominium") },
    { l: l("Minimum down payment", "Apport minimum"), v: l("10%", "10 %") },
    { l: l("Maximum financing", "Financement maximum"), v: l("90%", "90 %") },
    { l: l("Common charges", "Charges communes"), v: l("$6,457 / month", "6 457 $ / mois") },
    { l: l("Real estate taxes", "Taxe foncière"), v: l("$6,405 / month", "6 405 $ / mois") },
    { l: l("Pied-à-terre", "Pied-à-terre"), v: l("Permitted", "Autorisé") },
    { l: l("Status", "Situation"), v: l("Leased — viewings by appointment", "Louée — visites sur rendez-vous") },
  ],
};

// ── 07 Contact ───────────────────────────────────────────────
export const contact = {
  number: l("07 — Contact", "07 — Contact"),
  title: l("Request a Private Viewing", "Demander une visite privée"),
  text: l(
    "This offering is presented to selected clients and their advisors. Viewings are arranged by appointment through the listing broker.",
    "Cette offre est présentée à des clients sélectionnés et à leurs conseillers. Les visites sont organisées sur rendez-vous par l'agent de la vente."
  ),
  broker: { name: "Michael C. Graves", firm: "Douglas Elliman Real Estate", role: l("Listing broker", "Agent de la vente") },
  details: [
    { l: l("Property", "Bien"), v: "One Madison — Residence 50A" },
    { l: l("Address", "Adresse"), v: "23 East 22nd Street, New York, NY 10010" },
  ],
  footer: l("Confidential — for invited clients only", "Confidentiel — réservé aux clients invités"),
};
