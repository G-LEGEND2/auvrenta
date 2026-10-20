import { Link } from "react-router-dom";
import { FaCamera, FaBed, FaBath, FaToilet } from "react-icons/fa";

const statusColors = {
  available: "bg-green-100 text-green-800",
  sold: "bg-red-100 text-red-800",
  rented: "bg-orange-100 text-orange-800",
  unavailable: "bg-gray-200 text-gray-700",
};

export default function ListingItem({ listing }) {
  const img = listing.images?.[0] || "";
  const typeBadge = listing.type === "rent" ? "bg-[#7a2530] text-white" : "bg-gray-800 text-white";
  const faded = listing.status === "sold" || listing.status === "rented" || listing.status === "unavailable";

  return (
    <Link
      to={`/listing/${listing._id}`}
      className={`bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col ${faded ? "opacity-60 grayscale-[40%]" : ""}`}
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        {img ? (
          <img src={img} alt={listing.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}

        {/* Top Badges */}
        <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${typeBadge}`}>
          {listing.type === "rent" ? "FOR RENT" : "FOR SALE"}
        </span>
        <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded capitalize ${statusColors[listing.status] || ""}`}>
          {listing.status}
        </span>

        {/* Photo Count Badge (Bottom Left) */}
        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <FaCamera /> {listing.images?.length || 0}
        </span>

        {/* Views Badge (Bottom Right) */}
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
          👁 {listing.views ?? 0}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">📍 {listing.location}</p>
        
        <p className="text-[#7a2530] font-bold mt-1 mb-2">
          ${Number(listing.price).toLocaleString()}
          {listing.type === "rent" && <span className="text-xs text-gray-500 font-normal"> /month</span>}
        </p>

        {/* Property Details Icons */}
        <div className="flex items-center gap-3 text-gray-600 text-sm mt-auto pt-3 border-t">
          <div className="flex items-center gap-1" title="Bedrooms"><FaBed /> {listing.bedrooms || 0}</div>
          <div className="flex items-center gap-1" title="Bathrooms"><FaBath /> {listing.bathrooms || 0}</div>
          <div className="flex items-center gap-1" title="Toilets"><FaToilet /> {listing.toilets || 0}</div>
        </div>
      </div>
    </Link>
  );
}
