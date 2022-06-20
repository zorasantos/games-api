interface ICreateGameDTO {
  id?: string;
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

export { ICreateGameDTO };
