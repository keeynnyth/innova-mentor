const MOCK_RESPONSES = [
  '¡Gracias por contarme! Cada día que estudiás cuenta 💪',
  'Entiendo cómo te sentís. ¿Querés que repasemos algo juntos?',
  '¡Vas muy bien! No te rindas 🌟',
]

export async function sendMessageToMentor(message, userId) {
  // Cuando backend esté listo, reemplazá esto por:
  // const response = await fetch('/api/mentor/message', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ message, userId })
  // })
  // const data = await response.json()
  // return data.reply

  // Mock por ahora
  await new Promise(resolve => setTimeout(resolve, 800))
  return MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
}

export async function getMentorGreeting(userId) {
  // Cuando backend esté listo:
  // const response = await fetch(`/api/mentor/greeting/${userId}`)
  // const data = await response.json()
  // return data.message

  await new Promise(resolve => setTimeout(resolve, 300))
  return '¡Hola! ¿Listo para estudiar hoy? 💪'
}