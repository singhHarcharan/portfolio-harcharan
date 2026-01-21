import { useState, useEffect } from 'react';

export const useTypingEffect = (
  text: string,
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseTime: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(0);

  useEffect(() => {
    const words = Array.isArray(text) ? text : [text];
    const currentWord = words[currentIndex % words.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (pause > 0) {
      const timeout = setTimeout(() => setPause(pause - 1), speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % words.length);
          setPause(1);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setPause(pauseTime / speed);
          setIsDeleting(true);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, pause, text, typingSpeed, deletingSpeed, pauseTime]);

  return { displayText };
};

export default useTypingEffect;
