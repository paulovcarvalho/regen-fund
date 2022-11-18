import  ProjectLCI  from "../../components/ProjectLCI";
import  ProjectTaskDashboard  from "../../components/ProjectTaskDashboard";
import  ProjectHead  from "../../components/ProjectHead";
import  Tab  from "../../components/Tab";


export default function ProjectPublic() {
  return (
    <div className="pt-20 absolute m-10">
      <div className="flex-row flex gap-1">
        <div className="Flex"> 
        < ProjectHead   />
        </div>
        <div className="flex flex-col"> 
            <ProjectLCI/>
            <ProjectTaskDashboard/>
        </div>
      </div>
      <div className="mt-5">
        <Tab/>
      </div>
    </div>
  );
}
