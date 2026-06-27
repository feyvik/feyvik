/** @format */

import { useState, useEffect, useRef, useCallback } from "react";
import images1 from "../assets/kodecamp_team_logo.jpeg";
import images2 from "../assets/helixgade.png";
import images3 from "../assets/phreetech.jpeg";
import images4 from "../assets/sytmap.jpeg";
import styled from "styled-components";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Button = styled.button`
  transition: background 0.2s ease;
  padding: 0px;
`;

const files = [
  { images: images1, alt: "Slide 1" },
  { images: images2, alt: "Slide 2" },
  { images: images3, alt: "Slide 3" },
  { images: images4, alt: "Slide 4" },
];

const AUTOSCROLL_INTERVAL = 4000;

export default function ImageCarousel({ itemsPerView = 3, gap = 16 }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const animRef = useScrollAnimation();

  const maxIndex = Math.max(files.length - itemsPerView, 0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      goNext();
    }, AUTOSCROLL_INTERVAL);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, goNext]);

  const itemWidthPercent = 100 / itemsPerView;
  const translatePercent = current * itemWidthPercent;

  return (
    <div className="pb-20 pt-4 px-6" style={{ background: "rgba(39,151,250,0.04)" }}>
      <div ref={animRef} className="animate-on-scroll relative max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-3">
            Trusted By
          </p>
          <h2 className="leading-tight dark:text-white">
            Companies I Have Worked With
          </h2>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          <div
            className="flex items-center transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${translatePercent}%)`,
              gap: `${gap}px`,
            }}>
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-40 md:h-64"
                style={{
                  width: `calc(${itemWidthPercent}% - ${
                    (gap * (itemsPerView - 1)) / itemsPerView
                  }px)`,
                  flexShrink: 0,
                }}>
                <img
                  src={file.images}
                  alt={file.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <Button
              type="button"
              key={index}
              onClick={() => {
                if (intervalRef.current !== null) {
                  clearInterval(intervalRef.current);
                }
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-[#3d5afe]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
