import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ChatMessage = ({ chat, isUser }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {

    let currentIndex = 0;
    let currentText = '';

    const typeNextCharacter = () => {

      if(isUser){
        setDisplayedText(chat.text);
        setTimeout(typeNextCharacter,4);
      }
      else if (currentIndex < chat.text.length) {
        currentText += chat.text[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
        setTimeout(typeNextCharacter, 4); // Adjust speed as needed
      }
    };

    typeNextCharacter(); // Start typing effect when the component mounts

    // Cleanup when component unmounts or re-renders
    return () => {
      setDisplayedText('');
      clearTimeout(typeNextCharacter);
    };
  }, [chat.text, isUser]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: isUser ? '70%' : '98%',
          px: 2,
          backgroundColor: isUser ? 'rgb(244,244,244)' : 'transparent',
          borderRadius: 3,
        }}
      >
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {displayedText}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default ChatMessage;
