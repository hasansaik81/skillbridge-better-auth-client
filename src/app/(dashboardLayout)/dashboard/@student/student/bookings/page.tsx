import { getStudentProfile } from "@/actions/student.action"
import { DashboardBookingClient } from "@/components/Dashboard/Student/DashboardBookingsClient";
import { ErrorDisplay } from "@/components/GlobalComponent/ErrorDisplay";

export default async function StudentBookingsPage(){
    const {data:student,error}=await getStudentProfile();
    if(error || !student){
        return <ErrorDisplay error ={error} data={student}/>
    }

     return <DashboardBookingClient student={student}  /> ;
    }