import { IconName } from "../iconsData";

export interface CardType {
  icon: IconName;
  title: string;
  description: string;
}

export type CardTypeList = CardType[];
