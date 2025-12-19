export function calculateReadinessScore(data) {
  const {
    dsaTopics,
    coreSubjects,
    mocks,
    activeDaysLast30,
  } = data;

  // ---------- DSA (40) ----------
  const dsaAvg =
    dsaTopics.reduce(
      (sum, t) => sum + (t.solved / t.total) * 100,
      0
    ) / dsaTopics.length;

  const dsaScore = (dsaAvg / 100) * 40;

  // ---------- CORE SUBJECTS (25) ----------
  const statusMap = {
    NOT_STARTED: 0,
    LEARNING: 40,
    REVISING: 70,
    CONFIDENT: 100,
  };

  const coreAvg =
    coreSubjects.reduce(
      (sum, s) => sum + statusMap[s.status],
      0
    ) / coreSubjects.length;

  const coreScore = (coreAvg / 100) * 25;

  // ---------- MOCKS (20) ----------
  const mockAvg =
    mocks.reduce((sum, m) => sum + m, 0) / mocks.length;

  const trend = mocks[mocks.length - 1] - mocks[0];
  const mockFinal = Math.min(100, mockAvg + trend * 0.5);
  const mockScore = (mockFinal / 100) * 20;

  // ---------- CONSISTENCY (15) ----------
  const consistencyPct = (activeDaysLast30 / 30) * 100;
  const consistencyScore = (consistencyPct / 100) * 15;

  // ---------- FINAL ----------
  const total =
    dsaScore + coreScore + mockScore + consistencyScore;

  return Math.round(total);
}
