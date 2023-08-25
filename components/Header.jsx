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
    <div className="w-full h-24 flex items-center justify-between border-2 border-blue-500">
      {/* left */}
      <div className="flex items-center justify-start">
        <div className="hidden md:block p-3 md:ml-5 w-24 h-12 mr-14">
          <Image src="/logo.svg" alt="logo" width={120} height={75} />
        </div>

        {MENU_LIST.map((item, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-5">
              <Link href={item.href}>{item.text}</Link>
            </div>
          </div>
        ))}
      </div>
      {/* right */}
      <div className="w-52 h-12 flex items-center justify-between md:mr-5">
        <Link href="/login">Login</Link>
        <div className="w-28 h-9 bg-green-700 hover:bg-green-500 rounded-full flex items-center justify-center text-white">
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
