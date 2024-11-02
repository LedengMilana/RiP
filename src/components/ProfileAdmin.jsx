import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileAdmin() {
  const [uuid, setUuid] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUuidAndChats = async () => {
      try {
        const uuidResponse = await axios.get('http://0.0.0.0:8000/api/ws_token/');
        setUuid(uuidResponse.data.uuid);

        const chatsResponse = await axios.get('http://0.0.0.0:8000/api/v1/chats_list');
        setChats(chatsResponse.data.chats);
      } catch (error) {
        console.error('Ошибка при получении uuid или списка комнат:', error);
      }
    };

    fetchUuidAndChats();
  }, []);

  useEffect(() => {
    if (uuid && selectedChatId) {
      const socket = new WebSocket(`ws://localhost:8000/ws/chat/${selectedChatId}/?uuid=${uuid}`);
      setWs(socket);

      socket.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, messageData]);
      };

      socket.onclose = () => console.log('WebSocket закрыт');
    }
  }, [uuid, selectedChatId]);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
    setMessages([]);
  };

  const sendMessage = () => {
    if (ws && message.trim()) {
      ws.send(JSON.stringify({ message }));
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Чат администрирования</h2>
      <div className="chat-list">
        {chats.map((chat) => (
          <button key={chat.chat_name} onClick={() => handleSelectChat(chat.chat_name)}>
            Комната {chat.chat_name} {chat.support_read ? ' (Прочитано)' : ''}
          </button>
        ))}
      </div>
      {selectedChatId && (
        <>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <p key={index}>{msg.message}</p>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="Введите сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Отправить</button>
          </div>
        </>
      )}
    </div>
  );
}
