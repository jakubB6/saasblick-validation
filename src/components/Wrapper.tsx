import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={cn("w-screen min-h-screen", className)}>{children}</div>
  );
};

export default Wrapper;
