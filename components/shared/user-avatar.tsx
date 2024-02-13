import Image from "next/image";
import avatar from "../../public/images/avatar.png"
export enum UserAvatarSize {
  xs = 24,
  sm = 32,
  md = 40,
  lg = 128,
}

interface UserAvatarProps {
  className?: string;
  onClick?: () => void;
  size?: UserAvatarSize;
  imageSrc: string | null;
}
const UserAvatar: React.FC<UserAvatarProps> = ({
  className,
  onClick,
  size = UserAvatarSize.md,
  imageSrc,
}) => {
  return (
    <Image
      src={imageSrc || avatar}
      alt="Avatar"
      className={`rounded-full aspect-square object-contain ${
        onClick && `cursor-pointer`
      } ${className}`}
      height={size}
      width={size}
      onClick={onClick}
    />
  );
};

export default UserAvatar;
