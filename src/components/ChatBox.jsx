import React, { useState, useEffect, useRef } from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import ChatMessage from './ChatMessage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ChatBox = () => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isAtBottom, setIsAtBottom] = useState(true);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/messages');
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    useEffect(() => {
        if (currentMessageIndex < messages.length) {
            const timer = setTimeout(() => {
                setChats((prevChats) => [
                    ...prevChats,
                    messages[currentMessageIndex],
                ]);
                setCurrentMessageIndex((prevIndex) => prevIndex + 1);
                // Automatically scroll to bottom if the user is already at the bottom
                if (isAtBottom) {
                    scrollToBottom();
                }
            }, 1000); // Adjust the delay as needed

            return () => clearTimeout(timer);
        }
    }, [currentMessageIndex, messages, isAtBottom]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }else {
            console.log('chatContainerRef current not available')
        }
    };

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isUserAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            setIsAtBottom(isUserAtBottom);
        }
    };

    return (
        <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
            <Paper
                ref={chatContainerRef}
                onScroll={handleScroll}
                elevation={3}
                sx={{
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto', // Ensures scrollbars appear as needed
                    padding: 2,
                    borderRadius: 2,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        width: '0px', /* Chrome, Safari, Opera */
                    },
                }}
            >
                {chats.map((chat, index) => (
                    <ChatMessage
                        key={index}
                        chat={chat}
                        isUser={chat.role === 'user'}
                    />
                ))}
            </Paper>

            {!isAtBottom && (
                <IconButton
                    onClick={scrollToBottom}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        bottom: 16,
                        backgroundColor: theme => theme.palette.background.paper,
                        boxShadow: theme => theme.shadows[2],
                    }}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
            )}
        </Box>
    );
};

export default ChatBox;
