import { CardType } from "./cardType";

export interface TimingCardType extends CardType {
  timing: string;
  className?: string;
}

export type TimingCardTypeList = TimingCardType[];
