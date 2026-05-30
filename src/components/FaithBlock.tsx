import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  videoSrc?: string;
  videoCaption?: string;
  instagramSrc?: string;
  tweetUrl?: string;
  children: ReactNode;
}

export default function FaithBlock({
  title,
  videoSrc,
  videoCaption,
  instagramSrc,
  tweetUrl,
  children,
}: FaithBlockProps) {
  const hasMedia = Boolean(videoSrc || instagramSrc || tweetUrl);

  return (
    <div className="faith-block">
      <div className="faith-block-header">
        <span className="faith-cross">✝</span>
        <h3 className="faith-block-title">{title}</h3>
      </div>
      <div className={`faith-block-body ${hasMedia ? "" : "faith-block-body--solo"}`}>
        {hasMedia && (
          <div className="faith-block-image-wrap">
            {tweetUrl && (() => {
              const tweetId = tweetUrl.split("/").pop()?.split("?")[0] ?? "";
              return (
                <iframe
                  src={`https://platform.twitter.com/embed/Tweet.html?id=${tweetId}&theme=dark&dnt=true`}
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency
                  style={{
                    width: "100%",
                    flex: "1 1 0",
                    minHeight: "400px",
                    borderRadius: "12px",
                    border: "none",
                    display: "block",
                  }}
                  title="Embedded tweet"
                />
              );
            })()}
            {videoSrc && (
              <iframe
                src={videoSrc}
                title="Faith video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  flex: "1 1 0",
                  minHeight: "400px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#000",
                  display: "block",
                }}
              />
            )}
            {instagramSrc && (
              <iframe
                src={instagramSrc}
                title="Instagram reel"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                style={{
                  width: "100%",
                  flex: "1 1 0",
                  minHeight: "560px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#000",
                  display: "block",
                }}
              />
            )}
            {videoCaption && (
              <p style={{ marginTop: "0.75rem", marginBottom: 0, fontSize: "0.85rem", opacity: 0.75, fontStyle: "italic", lineHeight: 1.5 }}>
                {videoCaption}
              </p>
            )}
          </div>
        )}
        <div className="faith-block-text">{children}</div>
      </div>
    </div>
  );
}
