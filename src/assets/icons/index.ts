import React from "react";

import EditIcon from "./Edit.svg";
import UserIcon from "./User.svg";
import MenuIcon from "./Menu.svg";
import KeyIcon from "./Key.svg";
import EyeIcon from "./Eye.svg";
import EyeCrossIcon from "./EyeCross.svg";
import CircleAddIcon from "./CircleAdd.svg";
import CircleCrossIcon from "./CircleCross.svg";

const icons = {
  edit: EditIcon,
  menu: MenuIcon,
  user: UserIcon,
  key: KeyIcon,
  eye: EyeIcon,
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
