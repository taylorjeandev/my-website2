import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white">Contact</h2>
      <p className="mt-4 text-gray-400">
        Fill out the form below or connect on <a href="https://linkedin.com/in/taylorgjean" className="text-blue-400 font-semibold hover:text-blue-300">LinkedIn</a>.
      </p>
      <div className="mt-8 max-w-lg mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
