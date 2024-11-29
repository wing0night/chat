import { useState } from 'react';

interface Character {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  greeting: string;
}

interface CharacterSelectorProps {
  onCharacterSelect: (character: Character) => void;
  selectedCharacterId: string;
}

const availableCharacters: Character[] = [
  {
    id: 'sherlock',
    name: 'Sherlock Holmes',
    description: 'The world\'s greatest detective',
    avatarUrl: 'https://github.com/wing0night/chat/blob/master/src/images/1.png',
    greeting: "Elementary, my dear friend. What mystery shall we solve today?"
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    description: 'Theoretical physicist and genius',
    avatarUrl: 'https://github.com/wing0night/chat/blob/master/src/images/2.png',
    greeting: "Everything is relative! What would you like to learn about?"
  },
  {
    id: 'shakespeare',
    name: 'William Shakespeare',
    description: 'The immortal bard',
    avatarUrl: 'https://github.com/wing0night/chat/blob/master/src/images/3.png',
    greeting: "To chat or not to chat, that is the question!"
  }
];

export default function CharacterSelector({ onCharacterSelect, selectedCharacterId }: CharacterSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-72">
      <h3 className="text-lg font-semibold mb-3">Select Character</h3>
      <div className="space-y-3">
        {availableCharacters.map((character) => (
          <button
            key={character.id}
            onClick={() => onCharacterSelect(character)}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              selectedCharacterId === character.id
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">{character.name}</div>
            <div className="text-sm text-gray-500">{character.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}