export const fetchCharacterList = async () => {
  try {
    const response = await fetch('https://api.disneyapi.dev/character');
    if (!response.ok) throw new Error('Failed to get charter list');
    return await response.json();
  } catch (error) {
    throw error
  }
}
