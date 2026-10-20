import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaBath, FaToilet, FaPlayCircle, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Listing() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/get/${id}`);
        setListing(await res.json());
      } catch (e) { console.error(e); }
      setLoading(false);
      try {
        const r = await fetch(`/api/listing/increment-view/${id}`, { method: "POST" });
        if (r.ok) { const { views } = await r.json(); setListing((prev) => (prev ? { ...prev, views } : prev)); }
      } catch (err) {}
    };
    fetchListing();
  }, [id]);

  if (loading) return <p className="p-8 text-gray-500">Loading…</p>;
  if (!listing || listing.message) return <p className="p-8 text-red-600">Listing not found.</p>;

  const images = listing.images || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {/* Image Gallery */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="relative bg-black">
          {images.length > 0 ? (
            <>
              <img src={images[currentImg]} alt={listing.title} className="w-full max-h-[550px] object-contain mx-auto" />
              {images.length > 1 && (
                <>
                  <button onClick={() => setCurrentImg((p) => (p - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 font-bold">‹</button>
                  <button onClick={() => setCurrentImg((p) => (p + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 font-bold">›</button>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">{currentImg + 1} / {images.length}</span>
                </>
              )}
            </>
          ) : <p className="text-white text-center py-20">No image</p>}
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto bg-gray-50 border-t">
            {images.map((img, i) => (
              <img key={i} src={img} onClick={() => setCurrentImg(i)} alt="thumb" className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${i === currentImg ? "border-[#7a2530]" : "border-transparent"}`} />
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded ${listing.type === "rent" ? "bg-[#7a2530] text-white" : "bg-gray-800 text-white"}`}>
                {listing.type === "rent" ? "FOR RENT" : "FOR SALE"}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded capitalize bg-gray-100 text-gray-800">{listing.status}</span>
              <span className="ml-auto text-sm text-gray-500">👁 {listing.views ?? 0} views</span>
            </div>

            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <p className="text-gray-600 mb-4 flex items-center gap-1"><FaMapMarkerAlt /> {listing.location}</p>
            
            <p className="text-3xl font-bold text-[#7a2530] mb-6">
              ${Number(listing.price).toLocaleString()}
              {listing.type === "rent" && <span className="text-sm text-gray-500 font-normal"> /month</span>}
            </p>

            {/* Property Specs Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="border rounded-lg p-3 flex flex-col items-center text-center">
                <FaBed className="text-[#7a2530] text-2xl mb-1" />
                <p className="font-bold text-lg">{listing.bedrooms || 0}</p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
              <div className="border rounded-lg p-3 flex flex-col items-center text-center">
                <FaBath className="text-[#7a2530] text-2xl mb-1" />
                <p className="font-bold text-lg">{listing.bathrooms || 0}</p>
                <p className="text-xs text-gray-500">Bathrooms</p>
              </div>
              <div className="border rounded-lg p-3 flex flex-col items-center text-center">
                <FaToilet className="text-[#7a2530] text-2xl mb-1" />
                <p className="font-bold text-lg">{listing.toilets || 0}</p>
                <p className="text-xs text-gray-500">Toilets</p>
              </div>
            </div>

            <h2 className="font-bold text-xl mb-2">About this property</h2>
            <p className="whitespace-pre-wrap text-gray-700 mb-8">{listing.description}</p>

            {/* Amenities */}
            {listing.amenities?.length > 0 && (
              <div className="mb-4">
                <h2 className="font-bold text-xl mb-3">Features and amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {listing.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-green-600 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Contact Agent Sidebar) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Contact Agent</h3>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-[#7a2530] text-white rounded-full flex items-center justify-center text-xl font-bold">
                AP
              </div>
              <div>
                <p className="font-bold text-gray-900">Auvrenta Property Group</p>
                <p className="text-sm text-gray-500">Verified Agent</p>
              </div>
            </div>

            <div className="space-y-3">
              <a href="tel:+18459775854" className="w-full flex items-center justify-center gap-2 bg-[#7a2530] hover:bg-[#5e1c25] text-white py-3 rounded-lg font-semibold transition">
                <FaPhoneAlt /> Call Agent
              </a>
              
              <a href="mailto:info@auvrentapropertygroup.com?subject=Inquiry about: {listing.title}" className="w-full flex items-center justify-center gap-2 border-2 border-[#7a2530] text-[#7a2530] hover:bg-gray-50 py-3 rounded-lg font-semibold transition">
                <FaEnvelope /> Email Agent
              </a>

              {listing.videoUrl && (
                <a href={listing.videoUrl} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition mt-2">
                  <FaPlayCircle /> Watch Video
                </a>
              )}
            </div>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              Reference: #{listing._id.slice(-6).toUpperCase()}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
