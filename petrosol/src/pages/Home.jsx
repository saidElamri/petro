export default function Home() {
  return (
    <main className="container-custom pt-28 pb-16 min-h-screen flex flex-col justify-center">
      <section className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-primary leading-tight">
          Gestion des stocks & distribution
        </h1>
        <p className="text-lg text-muted mb-6 leading-relaxed">
          Nous avons créé des solutions qui aident les stations privées et institutionnelles
          à gérer leur distribution et à suivre l'état de leurs stocks. Ces systèmes aident
          à prévenir les fuites et les fraudes.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          Nous nous engageons à maintenir et à améliorer la fiabilité, la productivité
          et l’efficacité de votre entreprise. Nous vous proposons des solutions complètes
          d’alimentation, d’automatisme et de contrôle, ainsi que des solutions d’entretien.
        </p>
      </section>
    </main>
  );
}
