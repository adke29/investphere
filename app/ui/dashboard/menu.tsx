"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ title, icon, link }: { title: string; icon: any; link: string }) {
  const pathname = usePathname();
  return (
    <div className="py-3">
      <Link href={link} className={"text-left p-2 pr-20 rounded-lg hover:bg-gray-600" + (link === pathname ? " text-white" : "")}>
        <FontAwesomeIcon icon={icon} />
        <span className="pl-5">{title}</span>
      </Link>
    </div>
  );
}
