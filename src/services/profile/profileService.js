export async function getUserProfile() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    id: '1',
    name: 'Diana',
    email: 'diana@email.com',
    age: 24,
    schoolYear: '4to año',
    preferredSchedule: 'Noche (20-22hs)',
    subjects: ['Matemática', 'Física', 'Historia'],
    stats: {
      currentStreak: 5,
      bestStreak: 12,
      completedChallenges: 31,
      unlockedAchievements: 4,
    }
  }
}

export async function updateSubjects(subjects) {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { subjects }
}