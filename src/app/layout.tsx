import './globals.css';

export const metadata = {
  title: 'Chat Bot Interface',
  description: 'A simple chat interface with an AI bot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}