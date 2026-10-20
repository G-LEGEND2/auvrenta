import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem.jsx";

const HERO_IMAGES = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
  "/hero-5.jpg",
  "/hero-6.jpg",
];

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("all");
  const [slide, setSlide] = useState(0);

  // Auto-rotate hero every 5s
  useEffect(() => {
    const t = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const q = tab === "all" ? "" : `type=${tab}&`;
        const res = await fetch(`/api/listing/get?${q}limit=6`);
        const data = await res.json();
        setListings(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchListings();
  }, [tab]);

  return (
    <div>
      {/* Hero with 6 crossfading images */}
      <section className="hero-slider">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img}
            className={`hero-slide ${i === slide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-content max-w-6xl mx-auto px-4 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Auvrenta Property Group
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95 drop-shadow">
            Your Trusted Property Partner in Chicago
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              to="/search"
              className="bg-[#7a2530] hover:bg-[#5e1c25] text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              Browse Listings
            </Link>
            <Link
              to="/search?type=rent"
              className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white/20 font-semibold"
            >
              For Rent
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs + grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="text-2xl font-bold">Featured Listings</h2>
          <div className="flex gap-2">
            {["all", "sale", "rent"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                  tab === t
                    ? "bg-[#7a2530] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t === "all" ? "All" : `For ${t}`}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : listings.length === 0 ? (
          <p className="text-gray-500">No listings yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l) => (
              <ListingItem key={l._id} listing={l} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link to="/search" className="text-[#7a2530] font-semibold hover:underline">
            View all listings →
          </Link>
        </div>
      </section>
    </div>
  );
}
