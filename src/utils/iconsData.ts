import {
  Award,
  Eye,
  Goal,
  Users,
  Monitor,
  Laptop,
  GraduationCap,
  BookOpen,
  School,
  FileSpreadsheet,
  BookCheck,
  Sun,
  Sunset,
  Wrench,
  UserCheck,
  IndianRupee,
  Compass,
  CircleCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export type IconName =
  | "Goal"
  | "Users"
  | "Eye"
  | "Award"
  | "Monitor"
  | "Laptop"
  | "BookCheck"
  | "GraduationCap"
  | "BookOpen"
  | "School"
  | "FileSpreadsheet"
  | "Sun"
  | "Sunset"
  | "UserCheck"
  | "IndianRupee"
  | "Compass"
  | "CircleCheck"
  | "MapPin"
  | "Phone"
  | "Mail"
  | "Clock"
  | "Wrench";

export const iconsData = [
  { label: "Goal", icon: Goal },
  { label: "Eye", icon: Eye },
  { label: "Users", icon: Users },
  { label: "Award", icon: Award },
  { label: "Monitor", icon: Monitor },
  { label: "Laptop", icon: Laptop },
  { label: "BookCheck", icon: BookCheck },
  { label: "GraduationCap", icon: GraduationCap },
  { label: "BookOpen", icon: BookOpen },
  { label: "School", icon: School },
  { label: "FileSpreadsheet", icon: FileSpreadsheet },
  { label: "Sun", icon: Sun },
  { label: "Sunset", icon: Sunset },
  { label: "Wrench", icon: Wrench },
  { label: "UserCheck", icon: UserCheck },
  { label: "IndianRupee", icon: IndianRupee },
  { label: "Compass", icon: Compass },
  { label: "CircleCheck", icon: CircleCheck },
  { label: "MapPin", icon: MapPin },
  { label: "Phone", icon: Phone },
  { label: "Mail", icon: Mail },
  { label: "Clock", icon: Clock },
];

export const getIcon = (icon: IconName) => {
  for (let i = 0; i < iconsData.length; i++) {
    if (icon === iconsData[i].label) {
      const currentIcon = iconsData[i];
      return currentIcon;
    }
  }
};
