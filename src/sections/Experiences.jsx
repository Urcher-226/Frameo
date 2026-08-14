import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div
      id="work"
      className="relative c-space mt-25 md:mt-25"
    >
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
