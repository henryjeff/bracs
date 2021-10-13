import React from "react";

import EditIcon from "./Edit.svg";
import GoogleIcon from "./Google.svg";
import UserIcon from "./User.svg";
import MenuIcon from "./Menu.svg";
import KeyIcon from "./Key.svg";
import EyeIcon from "./Eye.svg";
import RatingIcon from "./Rating.svg";
import EyeCrossIcon from "./EyeCross.svg";
import CircleAddIcon from "./CircleAdd.svg";
import CircleCrossIcon from "./CircleCross.svg";

const icons = {
  key: KeyIcon,
  eye: EyeIcon,
  edit: EditIcon,
  menu: MenuIcon,
  user: UserIcon,
  rating: RatingIcon,
  google: GoogleIcon,
  eyeCross: EyeCrossIcon,
  circleAdd: CircleAddIcon,
  circleCross: CircleCrossIcon,
};

export type IconName = keyof typeof icons;

const getIconByName = (
  iconName: IconName
  // @ts-ignore
): React.FC<React.SVGAttributes<SVGElement>> => icons[iconName];

export default getIconByName;
