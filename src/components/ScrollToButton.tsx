"use client";
import Link from "next/link";
import { Button } from "./ui/button";

const ScrollToButton = ({
  value,
  scrollToId,
  variant,
  icon,
  className,
}: {
  value: string;
  scrollToId: string;
  variant: "link" | "default";
  icon?: React.ReactNode;
  className?: string;
}) => {
  const scrollTo = () => {
    const element = document.getElementById(scrollToId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link href={`${scrollToId}`}>
      <Button variant={variant} onClick={scrollTo} className={className}>
        {value}
        {icon}
      </Button>
    </Link>
  );
};

export default ScrollToButton;
