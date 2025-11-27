import renderObject from "../hooks/renderObject";
import useDetailsInfo from "../hooks/useDetailsInfo";
import useGeoLocation from "../hooks/useGeoLocation";



export default function LiveTracker() {
const { position, error } = useGeoLocation();
const {info}=useDetailsInfo()

  if (error)
    return (
      <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-5 text-red-400 shadow-md">
        ⚠️ {error}
      </div>
    );

  if (!position)
    return (
      <div className="rounded-xl bg-gradient-to-br from-neutral-950 via-gray-900 to-neutral-950 
text-gray-200 p-5 shadow-2xl border border-gray-600/20 animate-pulse 
tracking-widest uppercase">
  📡 Fetching live location...
</div>
    );

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 w-[380px] 
    dark:bg-gray-900 dark:border-gray-700  shadow-2xl shadow-gray-300/50 dark:shadow-black/70
    border border-gray-700/30 backdrop-blur-xl ">

  {/* Glow Effect */}
  <div className="absolute -top-20 -right-20 w-48 h-48 bg-gray-700/20 blur-3xl rounded-full"></div>

  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <div className="w-3 h-3 bg-teal-700 rounded-full animate-pulse"></div>
    <h3 className="text-blue-600 dark:text-teal-400 font-semibold tracking-widest text-sm uppercase">
      Live Tracking
    </h3>
  </div>

  {/* Location Info */}
  <div className="space-y-2 text-sm">
  {renderObject(info)}
</div>
</div>
  );
}
