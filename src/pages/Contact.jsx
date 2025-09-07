export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">Contact</h2>
      <p className="text-secondary text-center mb-10 text-lg">
        Feel free to reach out for collaborations, commissions, or any inquiries.
      </p>

      <form
        action="https://formspree.io/f/mvgbvdvq" 
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_redirect" value="/thank-you" />

        <div>
          <label htmlFor="name" className="block mb-2 text-secondary">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-secondary border border-gray-700 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-secondary">Email</label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            className="w-full p-3 rounded-lg bg-secondary border border-gray-700 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-secondary">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-secondary border border-gray-700 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-accent text-dark font-heading rounded-lg hover:bg-highlight transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
