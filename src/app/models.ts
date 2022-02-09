export interface Collegue {
  pseudo: string;
  score: number;
  photoUrl: string;
};

/* export const unCollegue: Collegue = {
  pseudo: "un pseudo",
  score: 1000,
  photoUrl: "https://randomuser.me/api/portraits/lego/0.jpg"
}; */

export enum Vote {
  AIMER,
  DETESTER
}
