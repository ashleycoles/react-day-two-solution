import Trainer from "../Trainer";
import "./trainersOverview.css"

export default function TrainersOverview() {
    return (
        <section className="trainersOverview">
            <Trainer 
                img="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5bcf/live/f697fab0-8f22-11ef-89ae-5575c76d98e6.jpg.webp"
                alt="trainer"
                name="Cuthbert"
                intro="What a guy"
                />
            <Trainer 
                img="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5bcf/live/f697fab0-8f22-11ef-89ae-5575c76d98e6.jpg.webp"
                alt="trainer"
                name="Guthbert"
                intro="What a dude"
                />
            <Trainer 
                img="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5bcf/live/f697fab0-8f22-11ef-89ae-5575c76d98e6.jpg.webp"
                alt="trainer"
                name="Luthbert"
                intro="What a fella"
                />
        </section>
    )
}