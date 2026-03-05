'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const Typewriter = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
