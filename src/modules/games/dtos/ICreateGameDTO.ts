interface ICreateGameDTO {
  id?: string;
  nome: string;
  nomeCriador: string;
  genero: string;
  plataforma: string;
  estudio: string;
  dataLancamento: Date;
}

export { ICreateGameDTO };
