import Image from "next/image";
import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  secondImageSrc?: string;
  secondImageAlt?: string;
  videoSrc?: string;
  videoCaption?: string;
  tweetUrl?: string;
  children: ReactNode;
}

export default function FaithBlock({
  title,
  imageSrc,
  imageAlt,
  secondImageSrc,
  secondImageAlt,
  videoSrc,
  videoCaption,
  tweetUrl,
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
          {imageSrc && imageAlt && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={260}
              style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            />
          )}
          {secondImageSrc && secondImageAlt && (
            <Image
              src={secondImageSrc}
              alt={secondImageAlt}
              width={400}
              height={260}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                marginTop: "2.5rem",
                paddingTop: "0.5rem",
              }}
            />
          )}
          {tweetUrl && (() => {
            const tweetId = tweetUrl.split("/").pop()?.split("?")[0] ?? "";
            return (
              <iframe
                src={`https://platform.twitter.com/embed/Tweet.html?id=${tweetId}&theme=dark&dnt=true`}
                width="100%"
                height="340"
                scrolling="no"
                frameBorder="0"
                allowTransparency
                style={{ borderRadius: "12px", border: "none", display: "block" }}
                title="Embedded tweet"
              />
            );
          })()}
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
                  marginTop: "2.5rem",
                }}
              />
            </div>
          )}
          {videoCaption && (
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.75, fontStyle: "italic", lineHeight: 1.5 }}>
              {videoCaption}
            </p>
          )}
        </div>
        <div className="faith-block-text">{children}</div>
      </div>
    </div>
  );
}
