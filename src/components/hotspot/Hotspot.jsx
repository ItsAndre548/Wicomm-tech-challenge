import './Hotspot.css';

export default function Hotspot({ hotspotItem }) {
  const estiloPosicionamento = {
    top: hotspotItem.top,
    left: hotspotItem.left,
  };

  return (
   <div className="hotspotContainer" style={estiloPosicionamento}>
  <div className="hotspotItem">
    <span>{hotspotItem.buttonLetter}</span>
    <div className="hotspotTextContainer">
      <p className="hotspotTitle">{hotspotItem.title}</p>
      <div dangerouslySetInnerHTML={{ __html: hotspotItem.description }} />
      <a href={hotspotItem.link}>{hotspotItem.linkText}</a>
    </div>
  </div>
</div>

  );
}
