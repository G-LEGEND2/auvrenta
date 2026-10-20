export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#7a2530] mb-3">Auvrenta Property Group</h1>
        <p className="text-lg text-gray-600 font-medium">Your Trusted Property Partner in Chicago</p>
      </div>

      <section className="bg-white rounded-lg shadow p-6 md:p-8 mb-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
        <p>
          Welcome to <strong>Auvrenta Property Group</strong>, a Chicago-based real estate
          and property management company committed to helping buyers, sellers, landlords,
          and investors achieve their goals.
        </p>
        <p>
          Led by <strong>Shelton David Joseph</strong>, our team combines local market
          knowledge with a client-first approach. Whether you're searching for your next
          home, listing a property, or building a rental portfolio, we bring clarity,
          professionalism, and accountability to every transaction.
        </p>
        <p>
          We believe real estate is more than a transaction — it's a long-term investment
          in your future. Our mission is to make property ownership simple, transparent,
          and rewarding.
        </p>
        <p className="font-semibold text-[#7a2530] pt-2">
          Auvrenta Property Group — Your Trusted Property Partner in Chicago.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meet Our CEO</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/ceo.jpg"
            alt="Shelton David Joseph"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-[#7a2530]/20 shadow"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Shelton David Joseph</h3>
            <p className="text-[#7a2530] font-medium mb-3">Chief Executive Officer</p>
            <p className="text-gray-700">
              Shelton leads Auvrenta Property Group with a commitment to professionalism,
              integrity, and client satisfaction. His vision is to make property ownership
              accessible and stress-free for every client we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b"><td className="py-3 font-semibold w-1/3">Company</td><td className="py-3">Auvrenta Property Group</td></tr>
              <tr className="border-b"><td className="py-3 font-semibold">CEO</td><td className="py-3">Shelton David Joseph</td></tr>
              <tr className="border-b"><td className="py-3 font-semibold">Industry</td><td className="py-3">Real Estate &amp; Property Management</td></tr>
              <tr className="border-b"><td className="py-3 font-semibold">Phone</td><td className="py-3">+1 845-977-5854</td></tr>
              <tr className="border-b"><td className="py-3 font-semibold">Address</td><td className="py-3">515 N State St, Chicago, IL 60654</td></tr>
              <tr><td className="py-3 font-semibold">Email</td><td className="py-3">info@auvrentapropertygroup.com</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
