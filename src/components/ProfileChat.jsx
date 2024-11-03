import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileChat() {
  const [uuid, setUuid] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUuidAndRoomId = async () => {
      try {
				const accessToken = localStorage.getItem('access_token');
        const uuidResponse = await axios.get('http://0.0.0.0:8000/api/ws_token/', {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${accessToken}`
					},
				});
        setUuid(uuidResponse.data.uuid);

        const roomResponse = await axios.get('http://0.0.0.0:8000/api/v1/support_chat', {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${accessToken}`
					},
				});
        setRoomId(roomResponse.data.room_name);
      } catch (error) {
        console.error('Ошибка при получении uuid или roomId:', error);
      }
    };

    fetchUuidAndRoomId();
  }, []);

  useEffect(() => {
    if (uuid && roomId) {
      const socket = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/?uuid=${uuid}`);
      setWs(socket);

      socket.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, messageData].reverse());
				console.log(messages);
      };

      socket.onclose = () => console.log('WebSocket закрыт');
    }
  }, [uuid, roomId]);

  const sendMessage = () => {
    if (ws && message.trim()) {
      ws.send(JSON.stringify({ message }));
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Чат с техподдержкой</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <p className='for-message' key={index}>{msg.message}</p>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Введите сообщение"
					className='inp-for-common inp-for-chat'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className='btn-for-next btn-for-chat' onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}
