interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div
        className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-blue-500 text-white'
        }`}
      >
        {message}
      </div>
    </div>
  );
}