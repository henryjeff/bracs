import React from "react";

import EditIcon from "./Edit.svg";
import MenuIcon from "./Menu.svg";
import CircleAddIcon from "./CircleAdd.svg";

const icons = {
  edit: EditIcon,
  menu: MenuIcon,
  circleAdd: CircleAddIcon,
};

export type IconName = keyof typeof icons;

const getIconByName = (
  iconName: IconName
  // @ts-ignore
): React.FC<React.SVGAttributes<SVGElement>> => icons[iconName];

export default getIconByName;
