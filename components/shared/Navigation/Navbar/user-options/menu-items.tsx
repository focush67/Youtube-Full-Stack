"use client";

interface MenuIconProps {
  logo: React.ReactNode;
  label: string;
  onClick?: () => void;
  rounded?: boolean;
}
const MenuItems: React.FC<MenuIconProps> = ({
  logo,
  label,
  onClick,
  rounded = false,
}) => {
  return (
    <div
      className={`flex items-center hover:bg-neutral-700 p-3 cursor-pointer ${
        rounded && "rounded-lg"
      }`}
      onClick={onClick}
    >
      {logo}
      {label}
    </div>
  );
};

export default MenuItems;
