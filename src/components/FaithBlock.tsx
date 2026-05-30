import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  videoSrc?: string;        // YouTube embed URL (or any iframe-friendly URL)
  videoFileSrc?: string;    // Direct video file (MP4/WebM). Plays inline via HTML5 <video>.
  videoPoster?: string;     // Optional poster image for the inline video
  videoCaption?: string;
  instagramSrc?: string;    // Instagram embed URL (.../reel/<ID>/embed/). If videoFileSrc is set,
                            // this becomes a "View original on Instagram" link instead of an iframe.
  tweetUrl?: string;
  children: ReactNode;
}

// Strip the trailing /embed/ from an Instagram embed URL so we can link to the public post.
function instagramPublicUrl(embedUrl: string): string {
  return embedUrl.replace(/\/embed\/?$/, "/");
}

export default function FaithBlock({
  title,
  videoSrc,
  videoFileSrc,
  videoPoster,
  videoCaption,
  instagramSrc,
  tweetUrl,
  children,
}: FaithBlockProps) {
  const hasMedia = Boolean(videoSrc || videoFileSrc || instagramSrc || tweetUrl);
  // If a direct video file is provided, that's the primary playback. The Instagram embed
  // iframe doesn't render in that case (because Instagram's embed forces a redirect to
  // their site on click). We turn the Instagram URL into a small "Watch on Instagram"
  // link below the inline player instead.
  const inlineVideoTakesOver = Boolean(videoFileSrc);

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
            {videoFileSrc && (
              <video
                src={videoFileSrc}
                poster={videoPoster}
                controls
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  flex: "1 1 0",
                  minHeight: "400px",
                  borderRadius: "12px",
                  background: "#000",
                  display: "block",
                  objectFit: "contain",
                }}
              >
                Your browser doesn&rsquo;t support inline video playback.
              </video>
            )}
            {videoSrc && !inlineVideoTakesOver && (
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
            {instagramSrc && !inlineVideoTakesOver && (
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
            {instagramSrc && inlineVideoTakesOver && (
              <a
                href={instagramPublicUrl(instagramSrc)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  padding: "0.4rem 0.75rem",
                  fontSize: "0.85rem",
                  color: "#fdba74",
                  textDecoration: "none",
                  border: "1px solid rgba(232,93,4,0.4)",
                  borderRadius: "4px",
                  alignSelf: "flex-start",
                }}
              >
                Watch the original on Instagram &rarr;
              </a>
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
