import { useState } from "react";
import "./VideoWithText.css";

export default function VideoWithText({
  videoSrc,
  thumbnailUrl,
  title,
  description,
  link,
  linkText,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="videoWithTextContainer">
      <div className="videoLeftContainer">
        <div>
          <div className="redSphere"></div>
        <div className="videoTitleContainer">
          <h2 className="videoWithTextTitle">{title}</h2>
          </div>
          </div>
      </div>
      <div className="videoTextRightContainer">
        <div className="videoWrapper">
          <video
            width="505"
            height="284"
            controls
            poster={thumbnailUrl}
            loading="lazy"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          {/* Ternário para mostrar o play apenas se não estiver tocando */}
          {!isPlaying && (
            <img
              src="/Assets/videoplayer.svg"
              alt="Play"
              className="playIcon"
            />
          )}
        </div>
        <div className="videoTextContent">
          <p className="videoWithTextDescription">{description}</p>
          <a href={link} className="videoWithTextLink">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
