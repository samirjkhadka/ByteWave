import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { smallSphere, stars } from "../assets";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            width={255}
            height={255}
            alt="Sphere"
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
            <img
              src={stars}
              width={950}
              height={400}
              alt="Stars"
              className="w-full"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
