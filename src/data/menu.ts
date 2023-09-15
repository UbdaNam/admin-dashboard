import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiGroup, BiSolidChart } from "react-icons/bi";
import { BsCalendarDay } from "react-icons/bs";
import {
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineNewspaper,
} from "react-icons/hi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiNotePencilFill } from "react-icons/pi";
import { RiApps2Line, RiInboxUnarchiveLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface ListItem {
  id: number;
  title: string;
  url: string;
  icon: IconType;
}

interface Menu {
  id: number;
  title: string;
  listItems: ListItem[];
}

export const menu: Menu[] = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: LiaHomeSolid,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: BiGroup,
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: BiGroup,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: AiOutlineShoppingCart,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: HiOutlineClipboardList,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: HiOutlineNewspaper,
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: RiApps2Line,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: PiNotePencilFill,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: AiOutlineForm,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: BsCalendarDay,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: AiOutlineSetting,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: RiInboxUnarchiveLine,
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: BiSolidChart,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: HiOutlineDocumentText,
      },
    ],
  },
];
