export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Contact Auvrenta Property Group</h1>
      <p className="text-gray-600 mb-8">
        Have a question about a property or our services? Reach out — we'll get back to you.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Get in Touch</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Phone:</strong><br /><a href="tel:+18459775854" className="text-[#7a2530] hover:underline">+1 845-977-5854</a></li>
            <li><strong>Email:</strong><br /><a href="mailto:info@auvrentapropertygroup.com" className="text-[#7a2530] hover:underline">info@auvrentapropertygroup.com</a></li>
            <li><strong>Office:</strong><br />515 N State St,<br />Chicago, IL 60654</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Business Hours</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>10:00 AM – 4:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
