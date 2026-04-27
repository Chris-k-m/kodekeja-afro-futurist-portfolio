import { useEffect, useRef, useState } from "react";

/** Wraps children with a scroll-reveal effect using IntersectionObserver. */
const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    // @ts-expect-error - dynamic tag
    <As
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "in-view" : ""} ${className}`}
    >
      {children}
    </As>
  );
};

export default Reveal;
