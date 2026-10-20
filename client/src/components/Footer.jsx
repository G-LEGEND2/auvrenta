export default function Footer() {
  return (
    <footer className="bg-[#1a1010] text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.jpg" alt="Auvrenta" className="h-10 w-10 rounded object-cover" />
            <h3 className="text-lg font-bold text-white">Auvrenta Property Group</h3>
          </div>
          <p className="text-sm text-gray-400">Your Trusted Property Partner in Chicago.</p>
        </div>

        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/search" className="hover:text-white">Browse Listings</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li><a href="tel:+18459775854" className="hover:text-white">+1 845-977-5854</a></li>
            <li><a href="mailto:info@auvrentapropertygroup.com" className="hover:text-white">info@auvrentapropertygroup.com</a></li>
            <li className="text-gray-400">515 N State St,<br />Chicago, IL 60654</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Auvrenta Property Group. All rights reserved.
      </div>
    </footer>
  );
}
