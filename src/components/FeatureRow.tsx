import Image from "next/image";
const FeatureRow = ({
  title,
  description,
  image,
  side = "right",
}: {
  title: string;
  description: string;
  image: string;
  side?: "left" | "right";
}): JSX.Element => {
  return (
    <div
      className={`w-full flex p-6 mx-auto flex-col-reverse gap-y-6 ${
        side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-x-6`}
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-y-6">
        <h4 className="text-3xl font-semibold text-center">{title}</h4>
        <p className="text-lg text-muted-foreground max-w-prose text-center px-4 lg:px-12">
          {description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image src={image} width={500} height={500} alt={title} />
      </div>
    </div>
  );
};

export default FeatureRow;
