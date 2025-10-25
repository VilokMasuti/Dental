import DentalHealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";

function ActivityOverview() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 font-[Harmattan] textbg ">
      <DentalHealthOverview />
      <NextAppointment />
    </div>
  );
}
export default ActivityOverview;
