import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section cross className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} Byte Wave. All rights reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a href="" key={item} className="">
              <img
                src={item.iconUrl}
                alt={item.title}
                width={16}
                height={16}
                className=""
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
