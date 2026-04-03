import Image from "next/image";
import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  tweetUrl?: string;
  children: ReactNode;
}

export default function FaithBlock({
  title,
  imageSrc,
  imageAlt,
  videoSrc,
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
          {imageSrc && imageAlt && tweetUrl && (
            <a href={tweetUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={260}
                style={{ width: "100%", height: "auto", borderRadius: "6px", display: "block" }}
              />
            </a>
          )}
          {imageSrc && imageAlt && !tweetUrl && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={260}
              style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            />
          )}
          {tweetUrl && !imageSrc && (() => {
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
                  marginTop: "1.5rem",
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
