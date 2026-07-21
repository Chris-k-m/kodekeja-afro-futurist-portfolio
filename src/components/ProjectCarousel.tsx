import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
  fit?: "cover" | "contain";
};

const ProjectCarousel = ({ images, intervalMs = 4000, fit = "cover" }: Props) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [paused, images.length, intervalMs]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-border bg-muted/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        if (start == null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
        setPaused(false);
      }}
    >
      {/* Slides */}
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={1280}
          height={800}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full glass gradient-border text-foreground/90 hover:text-primary hover:scale-110 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full glass gradient-border text-foreground/90 hover:text-primary hover:scale-110 transition-all"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
