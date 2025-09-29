import Image from "next/image";

export default function PropertyImage({ imageUrl, alt }) {
  return (
    <div className="lg:col-span-1">
      <Image
        src={imageUrl}
        alt={alt}
        className="w-full h-fit object-cover rounded-lg"
        width={1200}
        height={500}
      />
    </div>
  );
}
