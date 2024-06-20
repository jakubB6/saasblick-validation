"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import { toast } from "sonner";

const WaitingListSection = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [isSucess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const HandleJoin = async (email: string) => {
    const response = await useFetch(email);

    if (response) {
      setIsSuccess(response);
    }

    toast(
      `${
        isSucess ? "Something went wrong " : "You have joined the waiting list"
      }`,
      {
        description: `${
          isSucess
            ? "Please check your email and try again. "
            : "Thank you for joining our waiting list. We'll let you know when we're ready to go live."
        }`,
      }
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-6"></div>
      <div
        className="w-full h-min md:w-2/3 p-8 bg-muted flex gap-y-6 flex-col px-6 py-8 lg:py-12 items-center rounded-xl shadow-sm"
        id="#waiting"
      >
        <h2 className="text-primary text-xl font-bold">SaaSBlick</h2>
        <h3 className="text-3xl font-semibold text-center">
          Join Our Newsletter
        </h3>
        <p className="text-lg text-muted-foreground max-w-prose text-center px-6 lg:px-12 mx-auto">
          Get notified when we launch. We&apos;ll let you know when we&apos;re
          ready to go live.
        </p>
        <Input
          type="email"
          placeholder="Your email"
          className="w-full lg:w-1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="w-full lg:w-1/2" onClick={() => HandleJoin(email)}>
          Join the waiting list
        </Button>
      </div>
    </div>
  );
};

export default WaitingListSection;
