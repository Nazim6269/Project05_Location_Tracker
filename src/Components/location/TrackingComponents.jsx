import useDetailsInfo from "../../hooks/useDetailsInfo"
import useGeoLocation from "../../hooks/useGeoLocation"
import LiveTracker from "../LiveTracker"
import Alerts from "./Alerts"
import AnalyticStats from "./AnalyticStats"
import MapComponent from "./Map"
import Timeline from "./TimeLine"
import Zone from "./Zone"
const darkMode=true

//Tracking Components
const TrackingComponents = () => {
 const {position,error}=useGeoLocation()
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
   <div className={`${darkMode 
    ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white" 
    : "bg-gray-100 text-gray-900"} 
    min-h-screen p-8 transition-colors duration-500`}>
        {/* Map component */}
 <div className="grid grid-cols-[1fr_2fr] gap-1 mb-8"> 
  <LiveTracker />
  <MapComponent lat={position.lat} lng={position.lng} zone={info.city} />
</div>

{/* Zone component */}
 <div className="mb-8"> <Zone
    zoneName="Sector A"
    location="Tokyo"
    status="Safe"
    speed={65}
    signal={82}
    progress={72}
  /></div>
{/* Alert component */}
  <div className="mb-8"><Alerts
    alerts={[
      { level: "Critical", text: "Zone breach detected", time: "11:30" },
      { level: "Warning", text: "Speed limit exceeded", time: "11:05" },
      { level: "Info", text: "Location updated", time: "10:55" },
    ]}
  /></div>
 
{/* AnalyticStats component */}
  <div className="lg:col-span-3 mb-8">
    <AnalyticStats />
  </div>
{/* Time line component */}
  <div><Timeline /></div>
</div>

  )
}

export default TrackingComponents