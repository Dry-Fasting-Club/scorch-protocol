import Image from "next/image";
import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  children: ReactNode;
}

export default function FaithBlock({
  title,
  imageSrc,
  imageAlt,
  videoSrc,
  children,
}: FaithBlockProps) {
  return (
    <div className="faith-block">
      <div className="faith-block-header">
        <span className="faith-cross">✝</span>
        <h3 className="faith-block-title">{title}</h3>
      </div>
      <div className="faith-block-body">
        <div className="faith-block-image-wrap">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={260}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
          />
          {videoSrc && (
            <div className="faith-block-video-wrap">
              <iframe
                src={videoSrc}
                title="Faith video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: "6px",
                  border: "none",
                  marginTop: "0.75rem",
                }}
              />
            </div>
          )}
        </div>
        <div className="faith-block-text">{children}</div>
      </div>
    </div>
  );
}
