import { useState, useCallback } from "react";

export default function useHover() {
  const [isHovering, setIsHovering] = useState(false);

  const onHover = useCallback(() => {
    setIsHovering(true);
  }, []);

  const onLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return { isHovering, onHover, onLeave };
}
