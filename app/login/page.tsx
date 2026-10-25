const T = {
  en: {
    eyebrow: "Confidential — Private Offering",
    title: "One Madison",
    sub: "Floor 50 · 23 East 22nd Street, New York",
    label: "Access code",
    button: "Enter",
    help: "This presentation is reserved for invited clients and their advisors.",
    error: "This code is not correct. Check it and try again.",
    config: "Access is not configured yet. Please contact the owner.",
    other: "Français",
  },
  fr: {
    eyebrow: "Confidentiel — Offre privée",
    title: "One Madison",
    sub: "50e étage · 23 East 22nd Street, New York",
    label: "Code d'accès",
    button: "Entrer",
    help: "Cette présentation est réservée aux clients invités et à leurs conseillers.",
    error: "Ce code n'est pas correct. Vérifiez-le et réessayez.",
    config: "L'accès n'est pas encore configuré. Merci de contacter le propriétaire.",
    other: "English",
  },
};

export default function Login({ searchParams }: { searchParams: { error?: string; lang?: string } }) {
  const lang = searchParams.lang === "fr" ? "fr" : "en";
  const t = T[lang];
  const err = searchParams.error === "config" ? t.config : searchParams.error ? t.error : null;
  return (
    <main className="login">
      <div className="login-card">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="login-title">{t.title}</h1>
        <p className="login-sub">{t.sub}</p>
        <div className="rule" />
        <form method="post" action="/api/login" className="login-form">
          <input type="hidden" name="lang" value={lang} />
          <label htmlFor="password">{t.label}</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required autoFocus />
          {err && <p className="login-error" role="alert">{err}</p>}
          <button type="submit">{t.button}</button>
        </form>
        <p className="login-help">{t.help}</p>
        <a className="login-lang" href={`/login?lang=${lang === "en" ? "fr" : "en"}`}>{t.other}</a>
      </div>
    </main>
  );
}
