import Wrapper from "./Wrapper";
import kanbanIllustration from "../app/assets/kanban-illustration.svg";
import websitewatchIllustration from "../app/assets/websitewatch-illustration.svg";
import featurerequestIllustration from "../app/assets/featurerequest-illustration.svg";
import FeatureRow from "./FeatureRow";

interface featuresInterface {
  title: string;
  description: string;
  image: string;
}

const features: featuresInterface[] = [
  {
    title: "Organize with Ease",
    description:
      "Streamline your tasks and projects with our intuitive Kanban boards. Visualize your workflow and stay productive effortlessly.",
    image: kanbanIllustration,
  },
  {
    title: "Stay Alert, Stay Informed",
    description:
      "Monitor your website 24/7 with our Website Watcher. Get instant notifications if your site goes down, ensuring you're always in the loop.",
    image: websitewatchIllustration,
  },
  {
    title: "Harness User Insight for Innovation",
    description:
      "Collect, evaluate, and implement user suggestions seamlessly with SaaSBlick. Let your community guide your product's evolution.",
    image: featurerequestIllustration,
  },
];

const FeatureSection = (): JSX.Element => {
  return (
    <Wrapper className="flex flex-col">
      <main
        className="w-full lg:w-2/3 h-full flex items-center flex-col gap-y-32 mx-auto py-24 px-6"
        id="#features"
      >
        {features.map((feature: featuresInterface, index: number) => (
          <FeatureRow
            title={feature.title}
            description={feature.description}
            image={feature.image}
            side={index % 2 === 0 ? "left" : "right"}
            key={index}
          />
        ))}
      </main>
    </Wrapper>
  );
};

export default FeatureSection;
