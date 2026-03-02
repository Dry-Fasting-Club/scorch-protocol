"use client";

/**
 * VideoPlayer.tsx
 * Native HTML5 video player with custom dark-themed controls.
 * Receives a pre-signed R2 URL as `src` — passed from a Server Component.
 */

import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  src: string;
  title: string;
  poster?: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src, title, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const seekRef = useRef<HTMLInputElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide controls after 3 s during playback
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (playing) {
      hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, [playing]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (v.buffered.length > 0) {
      setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setDuration(v.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.currentTime = val;
    setCurrentTime(val);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.volume = val;
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement?.parentElement;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
      setFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setFullscreen(false);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="video-player"
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
      data-controls={showControls || !playing ? "visible" : "hidden"}
    >
      <div className="video-player-inner">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="video-player-video"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
          playsInline
        />

        <div className="video-player-controls">
          {/* Seek bar */}
          <div className="vp-seek-track">
            {/* Buffered fill */}
            <div className="vp-buffered" style={{ width: `${buffered}%` }} />
            {/* Progress fill */}
            <div className="vp-progress" style={{ width: `${progress}%` }} />
            <input
              ref={seekRef}
              type="range"
              className="vp-seek-input"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Seek"
            />
          </div>

          <div className="vp-bottom-row">
            {/* Play/Pause */}
            <button
              className="vp-btn vp-play"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                // Pause icon
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="3" y="2" width="4" height="12" rx="1" />
                  <rect x="9" y="2" width="4" height="12" rx="1" />
                </svg>
              ) : (
                // Play icon
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              )}
            </button>

            {/* Time */}
            <span className="vp-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Title (truncated) */}
            <span className="vp-title">{title}</span>

            {/* Volume */}
            <div className="vp-volume-wrap">
              <button className="vp-btn" onClick={toggleMute} aria-label="Toggle mute">
                {muted || volume === 0 ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2L4 6H1v4h3l4 4V2zm5 3l-4 4m0-4l4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2L4 6H1v4h3l4 4V2z" />
                    <path d="M11 5c1 1 1 5 0 6M13 3c2 2 2 8 0 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                className="vp-volume-input"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
              />
            </div>

            {/* Fullscreen */}
            <button
              className="vp-btn vp-fullscreen"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
            >
              {fullscreen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5 1v4H1M11 1v4h4M5 15v-4H1M11 15v-4h4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1 5V1h4M15 5V1h-4M1 11v4h4M15 11v4h-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
