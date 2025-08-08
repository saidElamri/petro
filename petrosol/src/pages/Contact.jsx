export default function Contact() {
  return (
    <main className="container-custom pt-24 pb-16 min-h-screen">
      <section className="max-w-3xl mx-auto bg-surface rounded-xl shadow-card p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-primary">
          Contactez-nous
        </h2>
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nom"
            aria-label="Nom"
            className="w-full p-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
            required
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="w-full p-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
            required
          />
          <textarea
            placeholder="Message"
            aria-label="Message"
            rows={5}
            className="w-full p-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full text-lg"
            aria-label="Envoyer le message"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}
