interface InterestingVideoBlockProps {
  videoSrc?: string;        // YouTube embed URL (or any iframe-friendly URL)
  videoFileSrc?: string;    // Direct video file (MP4/WebM). Plays inline via HTML5 <video>.
  videoPoster?: string;     // Optional poster image for the inline video
  videoCaption?: string;
  instagramSrc?: string;    // Instagram embed URL (.../reel/<ID>/embed/). If videoFileSrc is set,
                            // this becomes a "View original on Instagram" link instead of an iframe.
  tweetUrl?: string;
}

function instagramPublicUrl(embedUrl: string): string {
  return embedUrl.replace(/\/embed\/?$/, "/");
}

export default function InterestingVideoBlock({
  videoSrc,
  videoFileSrc,
  videoPoster,
  videoCaption,
  instagramSrc,
  tweetUrl,
}: InterestingVideoBlockProps) {
  const inlineVideoTakesOver = Boolean(videoFileSrc);
  const hasMedia = Boolean(videoSrc || videoFileSrc || instagramSrc || tweetUrl);
  if (!hasMedia) return null;

  return (
    <div className="interesting-video-block">
      <div className="interesting-video-frame">
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
                minHeight: "400px",
                borderRadius: "10px",
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
              minHeight: "400px",
              borderRadius: "10px",
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
            title="Interesting video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              minHeight: "400px",
              borderRadius: "10px",
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
              minHeight: "560px",
              borderRadius: "10px",
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
            className="interesting-video-secondary-link"
          >
            Watch the original on Instagram &rarr;
          </a>
        )}
      </div>
      {videoCaption && (
        <p className="interesting-video-caption">{videoCaption}</p>
      )}
    </div>
  );
}
