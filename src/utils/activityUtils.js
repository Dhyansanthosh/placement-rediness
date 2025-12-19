

export function calculateActiveDays(activityData) {
  return activityData.filter(day => day.count > 0).length;
}
