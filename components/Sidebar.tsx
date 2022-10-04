
import {
  UserCircleIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  UsersIcon,
  ChartPieIcon,

} from "@heroicons/react/24/solid"

import SidebarLink, {active} from "./SidbarLink"
import { useAuth } from '../context/AuthContext'

function Sidebar() {
    const { user } = useAuth()
    // Menu section
  return (
    <div className="ms:visible sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="space-y-8 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Profile" Icon={UserCircleIcon} active={'yes'} />
                <SidebarLink text="Project" Icon={RocketLaunchIcon}  active={'no'}/>
                <SidebarLink text="Team" Icon={UsersIcon}  active={'no'}/>
                <SidebarLink text="Communit" Icon={UserGroupIcon}  active={'no'}/>
                <SidebarLink text="LCI" Icon={ChartPieIcon}  active={'no'}/>
            </div>
    </div>
  )
}
export default Sidebar;