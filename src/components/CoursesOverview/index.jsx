import Course from "../Course";
import "./CoursesOverview.css"

export default function CoursesOverview(){
    return (
        <section className="courses">
            <Course 
                title="SDE"
                duration="12 Weeks"
                inPerson="No"
                date="12/12/2025"
                />
            <Course 
                title="FST"
                duration="16 Weeks"
                inPerson="Yes"
                date="27/3/2023"
                />
            <Course 
                title="DSP"
                duration="18 Weeks"
                inPerson="No"
                date="12/12/2025"
                />
            <Course 
                title="CQS"
                duration="4 Weeks"
                inPerson="No"
                date="12/12/2045"
                />
        </section>
    )
}