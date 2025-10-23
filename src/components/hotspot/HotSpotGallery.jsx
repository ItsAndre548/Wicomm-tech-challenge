import Hotspot from "./Hotspot";
import './Hotspot.css';

export default function HotspotGallery({ backgroundImage, hotspotItem }) {
  return (
    <div class="hotspotGallery">
      <img src={backgroundImage} alt={backgroundImage} width={1280} height={660} class="hotspotBackground" />
      {hotspotItem.map((item, index) => (
        <Hotspot Hotspot key={index} hotspotItem={{ ...item }} />
      ))}
    </div>
  );
}