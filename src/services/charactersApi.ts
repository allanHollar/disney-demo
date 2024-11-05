interface Character {
  _id: string;
  name: string;
  films: string[];
  imageUrl: string;
}

interface CharacterApiResponse {
  data: Character[];
}

export const fetchCharacterList = async (): Promise<CharacterApiResponse> => {
  const response = await fetch("https://api.disneyapi.dev/character");
  const data = await response.json();
  return data;
};
