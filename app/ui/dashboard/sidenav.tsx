import Menu from "@/app/ui/dashboard/menu";
import { faHouse, faRotateRight, faBuilding, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const menus = [
  {
    title: "Home",
    icon: faHouse,
    link: "/dashboard",
  },
  {
    title: "Activity",
    icon: faRotateRight,
    link: "/dashboard/activity",
  },
  {
    title: "Provider",
    icon: faBuilding,
    link: "/dashboard/provider",
  },
];

export default function Sidenav() {
  return (
    <nav className="flex flex-col justify-between p-5 bg-gray-800 rounded-lg">
      <div>
        <img src="/logo.png" alt="logo" className="w-20" />
        <div className="pt-7 text-gray-400">
          {menus.map((menu) => {
            return <Menu key={menu.title} title={menu.title} icon={menu.icon} link={menu.link} />;
          })}
        </div>
      </div>
      <div>
        <Menu key="logout" title="Logout" icon={faArrowRightFromBracket} link="/logout" />
      </div>
    </nav>
  );
}
