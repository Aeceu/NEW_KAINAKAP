import { useState, useRef, useEffect } from "react";
import { useAccessibility } from "../context/AccessibilityContext";

const speechObject = () => {
  const { narration } = useAccessibility();
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const speechRef = useRef(null);

  const handleMouseEnter = (text) => {
    if(narration === 'true'){
      setIsHovered(true);
      speechRef.current = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speechRef.current);
    }
  };

  const handleFocus = (text) => {
    if(narration === 'true'){
      setIsFocused(true);
      speechRef.current = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speechRef.current);
    }
  };

  const speakItem = (text) => {
    speechRef.current = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speechRef.current);
  }

  const handleBlur = () => {
    setIsFocused(false);
    if (speechRef.current) {
      window.speechSynthesis.cancel();
      speechRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (speechRef.current) {
      window.speechSynthesis.cancel();
      speechRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup function to cancel speech if component unmounts
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isFocused,
    isHovered,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
    speakItem
  };
};

export default speechObject;
