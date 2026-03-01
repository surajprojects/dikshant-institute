import { CardType } from "./cardType";

export interface CourseCardType extends Omit<CardType, "title"> {
  name: string;
  fullName: string;
}

export type CourseCardTypeList = CourseCardType[];
