import { useRouter } from "next/router";

function SidebarLink({ Icon, text, active }) {
  const router = useRouter();

  return (
    <div
      className={`flex items-center text-gray-700 justify-center xl:justify-start text-l space-x-3 hover:font-bold ${
        active && "font-bold"
      }`}
      onClick={() =>  active && router.push("/userpage"+{text})}
    >
      <Icon className="h-5 text-regen-blue" />
      <span className="hidden  xl:inline">{text}</span>
    </div>
  );
}
export var active;
export default SidebarLink ;