const TypingEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, Math.random() * 150 + 50); // Random delay between 50ms and 200ms
  
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);
  
    return <span>{displayedText}</span>;
  };