function getColor(count) {
  if (count === 0) return "#ebedf0";
  if (count <= 2) return "#9be9a8";
  if (count <= 4) return "#40c463";
  return "#216e39";
}

export default function ActivityHeatmap({ data }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 14px)", gap: "4px" }}>
      {data.map((day) => (
        <div
          key={day.date}
          title={`${day.date}: ${day.count} activities`}
          style={{
            width: "14px",
            height: "14px",
            backgroundColor: getColor(day.count),
          }}
        />
      ))}
    </div>
  );
}
