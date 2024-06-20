import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import SaaSBlickLogo from "../../public/android-chrome-512x512.png";
import ScrollToButton from "./ScrollToButton";
const Header = (): JSX.Element => {
  return (
    <header className="w-full h-min py-4 px-2 lg:py-6 lg:px-6 flex items-center justify-center">
      <nav className="w-full lg:w-1/2 flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex flex-row gap-x-2">
          <Image
            src={SaaSBlickLogo}
            width={512}
            height={512}
            alt="Image of Unicorn"
            className="w-8 h-8 object-contain"
          />
          SaaSBlick
        </h1>
        <ScrollToButton
          value="Join The Waiting List &rarr;"
          scrollToId="#waiting"
          variant={"default"}
        />
      </nav>
    </header>
  );
};

export default Header;
