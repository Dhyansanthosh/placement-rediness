import ActivityHeatmap from "../components/ActivityHeatmap";
import { activityData } from "../data/activityData";
export default function Activity() {

  return (
    <div>
      <h2>Activity Heatmap</h2>
      <ActivityHeatmap data={activityData} />
    </div>
  );
}
