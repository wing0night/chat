import Image from 'next/image';

interface AvatarProps {
  imageSrc: string;
  alt: string;
}

export default function Avatar({ imageSrc, alt }: AvatarProps) {
  return (
    <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}