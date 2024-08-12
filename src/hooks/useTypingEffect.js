import { useState, useEffect } from 'react';

const useTypingEffect = (text, minDelay = 2, maxDelay = 10) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    let currentIndex = 0;
    setDisplayedText(''); // Reset the displayed text for each new message

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, Math.random() * (maxDelay - minDelay) + minDelay); // Random delay between minDelay and maxDelay

    return () => clearInterval(interval);
  }, [text, minDelay, maxDelay]);

  return displayedText;
};

export default useTypingEffect;
