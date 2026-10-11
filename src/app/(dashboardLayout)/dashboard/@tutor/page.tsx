import { TutorRootPage } from "@/components/Dashboard/Tutor/TutorRootPage";
import { ErrorDisplay } from "@/components/GlobalComponent/ErrorDisplay"
import { tutorService } from "@/services/tutor.service"

export default  async function TutorPage(){
    const {data,error}=await tutorService.getTutorProfile()
    if(error||!data){
        return <ErrorDisplay error={error} data={data}/>;

    }
    console.log(error)
    const {tutorProfiles}=data;
    return(
        <div>
            <TutorRootPage userData={data} tutorProfile={tutorProfiles} />
        </div>
    );

}