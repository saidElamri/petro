export default function Solutions() {
  const solutions = [
    {
      title: "Gestion de la distribution",
      desc: "Suivi en temps réel des livraisons et des mouvements.",
    },
    {
      title: "Suivi des stocks",
      desc: "Visualisation des niveaux de stock pour chaque station.",
    },
    {
      title: "Prévention des fuites et fraudes",
      desc: "Système d’alerte pour anomalies détectées.",
    },
    {
      title: "Maintenance & automatisme",
      desc: "Solutions d’entretien et automatisation des processus.",
    },
  ];

  return (
    <main className="container-custom pt-28 pb-16 min-h-screen">
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-primary text-center">
          Nos Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map(({ title, desc }, idx) => (
            <article
              key={idx}
              className="bg-surface rounded-xl shadow-card p-6 transition hover:shadow-lg border border-muted"
              tabIndex={0}
              aria-label={title}
            >
              <h3 className="font-semibold text-2xl mb-3 text-secondary">
                {title}
              </h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
