import Image from "next/image";
import Link from "next/link";

export const MENU_LIST = [
  { text: "home", href: "/" },
  { text: "Featuring", href: "/featuring" },
  { text: "Pricing", href: "/pricing" },
  { text: "Resources", href: "/resources" },
];

const Header = () => {
  return (
    <div className="hidden lg:flex w-full h-24 items-center justify-between">
      {/* left */}
      <div className="flex items-center justify-start">
        <div className="hidden md:block p-3 md:ml-5 w-24 h-12 mr-14">
          <Image src="/logo.svg" alt="logo" width={120} height={75} />
        </div>
        {MENU_LIST.map((item, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-5 py-3">
              <Link href={item.href}>{item.text}</Link>
            </div>
          </div>
        ))}
      </div>
      {/* right */}
      <div className="hidden lg:flex items-center justify-between font-bold md:mr-6 space-x-6">
        <Link
          className="text-grayishViolet hover:text-veryDarkViolet py-3"
          href="/login"
        >
          Login
        </Link>
        <div className=" text-white bg-cyan hover:bg-cyanLight rounded-full flex items-center justify-center px-8 py-3">
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
