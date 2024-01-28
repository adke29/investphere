import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Button({ title, icon, link }: { title: string; icon: any; link: string }) {
  return (
    <div className={"py-3"}>
      <Link href={link} className={"text-left p-3 rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-700" }>
        <FontAwesomeIcon icon={icon} />
        <span className="pl-5">{title}</span>
      </Link>
    </div>
  );
}
