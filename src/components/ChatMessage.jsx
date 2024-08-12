import React from 'react';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useTypingEffect from '../hooks/useTypingEffect';

const ChatMessage = ({ chat, isUser }) => {
  // Use the typing effect hook for all messages
  const typedText = useTypingEffect(chat.text, 2, 4);
  const displayedText = isUser ? chat.text : typedText;

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
