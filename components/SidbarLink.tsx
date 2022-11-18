import { useRouter } from "next/router";


function SidebarLink({ text, Icon, active }) {
  const router = useRouter();
  const urlRef = "/usr/user"+text;

  if (router.pathname == urlRef) {  active = true } else {active = false} ;

  return (
    <div
      className={`flex items-center text-gray-700 font-Montserrat justify-center xl:justify-start text-l space-x-3 hover:font-bold  hover:text-regen-lighblue`}
      onClick={() =>  router.push(urlRef)}
    >
      <Icon className={`h-5 ${active && "font-bold text-regen-lighblue"}`} 
       onClick={() =>  router.push(urlRef)} />
      <span className={`hidden  xl:inline ${active && "font-bold text-regen-lighblue"}`} > {text}</span>
    </div>
  );
}

export var active;
export default SidebarLink;