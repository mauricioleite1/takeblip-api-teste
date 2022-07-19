export interface IAvatar {
  avatar_url: string;
}

export interface IRepository {
  full_name: string;
  description: string;
  language: string;
  owner: IAvatar;
}

export interface IRepositoriesList extends Array<IRepository> {}