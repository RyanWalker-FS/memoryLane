import Link from "next/link";
import { IoWifi } from "react-icons/io5";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        BlogIfy
      </Link>
      <IoWifi className="text-2xl md:text-4xl" />
    </h2>
  );
};

export default Header;
