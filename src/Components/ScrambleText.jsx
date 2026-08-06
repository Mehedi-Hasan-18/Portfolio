import { useEffect, useMemo, useRef, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_{}[]/";

const ScrambleText = ({
  texts,
  text,
  interval = 2000,
  duration = 700,
  loop = false,
  className = "",
}) => {
  const values = useMemo(
    () => (texts?.length ? texts : [text ?? ""]),
    [text, texts],
  );
  const [displayText, setDisplayText] = useState(values[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    const target = values[activeIndex];
    const startedAt = performance.now();

    const scramble = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const revealed = Math.floor(progress * target.length);

      setDisplayText(
        target
          .split("")
          .map((character, index) => {
            if (character === " ") return " ";
            if (index < revealed) return character;
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join(""),
      );

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(scramble);
      } else {
        setDisplayText(target);
      }
    };

    frameRef.current = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(frameRef.current);
  }, [activeIndex, duration, values]);

  useEffect(() => {
    if (!loop || values.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % values.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, loop, values.length]);

  return (
    <span className={className} aria-label={values[activeIndex]}>
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
};

export default ScrambleText;
