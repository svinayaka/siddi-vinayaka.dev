import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <Image
          src="/my-photo.jpg"
          alt="Siddi Vinayaka"
          width={40}
          height={40}
          className="rounded-full object-cover border border-gray-200"
        />
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
          Siddi Vinayaka
        </Link>
      </div>
    </header>
  );
}
