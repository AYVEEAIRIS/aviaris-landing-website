/* -------------------------------------------------------------------------- */
/* ----------------------------- app/mission/page.jsx ------------------------ */
/* -------------------------------------------------------------------------- */
"use client";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      <form
        action="https://formspree.io/f/xjggklra"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Comments or Questions</label>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Send Message
        </button>
        <input type="hidden" name="_redirect" value="localhost:3000/contact/thank-you" />
      </form>
    </div>
  );
}
