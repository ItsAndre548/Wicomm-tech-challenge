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
    <div class="videoWithTextContainer">
      <div class="videoLeftContainer">
        <div>
          <div class="redSphere"></div>
        <div class="videoTitleContainer">
          <h2 class="videoWithTextTitle">{title}</h2>
          </div>
          </div>
      </div>
      <div class="videoTextRightContainer">
        <div class="videoWrapper">
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
              class="playIcon"
            />
          )}
        </div>
        <div class="videoTextContent">
          <p class="videoWithTextDescription">{description}</p>
          <a href={link} class="videoWithTextLink">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
