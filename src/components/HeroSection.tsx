import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import ScrollToButton from "./ScrollToButton";

const HeroSection = (): JSX.Element => {
  return (
    <main className="flex flex-grow pt-12 lg:pt-24 relative flex-col gap-y-6">
      <div className="w-full h-min flex justify-center items-center flex-col p-6 gap-y-6">
        <h2 className="text-5xl font-bold max-w-prose text-center tracking-wide">
          Tool to make your{"\n"}
          <span className="text-primary">SaaS</span> managment easier
        </h2>
        <p className="text-xl text-muted-foreground max-w-prose text-center">
          Simplify your workflow, stay informed with real-time alerts, and let
          your users help shape your product.
        </p>
        <ScrollToButton
          value="Join The Waiting List &rarr;"
          scrollToId="#waiting"
          variant={"default"}
        />
      </div>
      <div className="w-full flex flex-grow justify-end items-center flex-col p-12 gap-y-6">
        <h3 className="text-2xl font-semibold text-center max-w-prose">
          Are you a small SaaS business or an indie hacker looking to streamline
          your app management?
        </h3>
        <p className="text-lg text-muted-foreground max-w-prose text-center">
          SaaSBlick is here to simplify your workflow, keep your website running
          smoothly, and ensure your users&apos; voices are heard.
        </p>
        <div className="w-full flex items-center justify-center">
          <ScrollToButton
            value="See Features"
            scrollToId="#features"
            variant={"link"}
            icon={<ArrowDown className="h-4 w-4" />}
            className="gap-x-1"
          />
        </div>
      </div>
      <div className="absolute top-0 z-[-2] h-full w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    </main>
  );
};

export default HeroSection;
