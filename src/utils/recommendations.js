export function generateRecommendations(data) {
  const recs = [];

  // ---------- DSA ----------
  const weakDsa = data.dsaTopics.filter(
    (t) => (t.solved / t.total) * 100 < 50
  );

  if (weakDsa.length > 0) {
    recs.push("Improve weak DSA topics (focus on basics first)");
  }

  // ---------- CORE SUBJECTS ----------
  const weakCore = data.coreSubjects.filter(
    (s) => s.status === "NOT_STARTED" || s.status === "LEARNING"
  );

  if (weakCore.length > 0) {
    recs.push("Strengthen core CS subjects before interviews");
  }

  // ---------- MOCKS ----------
  if (data.mocks.length >= 2) {
    const trend = data.mocks[data.mocks.length - 1] - data.mocks[0];
    if (trend < 0) {
      recs.push("Mock performance is declining — revise before taking more mocks");
    }
  }

  // ---------- CONSISTENCY ----------
  if (data.activeDaysLast30 < 15) {
    recs.push("Increase daily consistency (minimum 5 days/week)");
  }

  if (recs.length === 0) {
    recs.push("You are on track — maintain consistency and revise regularly");
  }

  return recs;
}
