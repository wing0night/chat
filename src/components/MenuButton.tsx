import { useState, useEffect, useRef } from 'react';
import CharacterSelector from './ModelSelector';

interface Character {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  greeting: string;
}

interface MenuButtonProps {
  onCharacterSelect: (character: Character) => void;
  selectedCharacterId: string;
}

export default function MenuButton({ onCharacterSelect, selectedCharacterId }: MenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCharacterMenuOpen, setIsCharacterMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsCharacterMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsCharacterMenuOpen(false);
    }
  };

  const toggleCharacterMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCharacterMenuOpen(!isCharacterMenuOpen);
  };

  const handleCharacterSelect = (character: Character) => {
    onCharacterSelect(character);
    setIsMenuOpen(false);
    setIsCharacterMenuOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <button
            onClick={toggleCharacterMenu}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Change Character
          </button>
        </div>
      )}

      {isCharacterMenuOpen && (
        <div className="absolute left-48 top-0 mt-2">
          <CharacterSelector 
            onCharacterSelect={handleCharacterSelect} 
            selectedCharacterId={selectedCharacterId} 
          />
        </div>
      )}
    </div>
  );
}