export interface IOwnersAvatar {
  avatar_url: string;
}

export interface IRepository {
  full_name: string;
  description: string;
  language: string;
  owner: IOwnersAvatar;
}

export interface IRepositoriesList extends Array<IRepository> {}