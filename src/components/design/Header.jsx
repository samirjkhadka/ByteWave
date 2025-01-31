import { background } from "../../assets";

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]"></div>
      <img
        src={background}
        alt="background"
        className="w-full h-full object-cover"
        width={688}
        height={953}
      />
    </div>
  );
};
