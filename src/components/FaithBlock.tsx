import Image from "next/image";
import type { ReactNode } from "react";

interface FaithBlockProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

export default function FaithBlock({
  title,
  imageSrc,
  imageAlt,
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
        </div>
        <div className="faith-block-text">{children}</div>
      </div>
    </div>
  );
}
