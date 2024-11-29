'use client';

import { useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import MenuButton from '@/components/MenuButton';
import Avatar from '@/components/Avatar';

interface Message {
  text: string;
  isBot: boolean;
}

interface Character {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  greeting: string;
}

export default function Home() {
  const [currentCharacter, setCurrentCharacter] = useState<Character>({
    id: 'sherlock',
    name: 'Sherlock Holmes',
    description: 'The world\'s greatest detective',
    avatarUrl: 'https://github.com/wing0night/chat/blob/master/src/images/1.png',
    greeting: "Elementary, my dear friend. What mystery shall we solve today?"
  });

  const [messages, setMessages] = useState<Message[]>([
    { text: currentCharacter.greeting, isBot: true }
  ]);

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          text: `As ${currentCharacter.name}, I must say... that's an interesting point!`, 
          isBot: true 
        }
      ]);
    }, 1000);
  };

  const handleCharacterSelect = (character: Character) => {
    setCurrentCharacter(character);
    setMessages(prev => [
      ...prev,
      { 
        text: character.greeting, 
        isBot: true 
      }
    ]);
  };

  return (
    <main className="min-h-screen p-4 flex flex-col">
      <div className="absolute top-4 left-4 z-10">
        <MenuButton 
          onCharacterSelect={handleCharacterSelect} 
          selectedCharacterId={currentCharacter.id} 
        />
      </div>

      <div className="flex flex-col items-center justify-start pt-8 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Avatar 
            imageSrc={currentCharacter.avatarUrl} 
            alt={`${currentCharacter.name} Avatar`} 
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold">{currentCharacter.name}</h1>
            <p className="text-gray-600">{currentCharacter.description}</p>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 overflow-y-auto h-[300px]">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
          </div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </main>
  );
}