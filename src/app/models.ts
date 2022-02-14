export interface Collegue {
  pseudo: string;
  score: number;
  photo: string;
};

/* Utilisé dans le TP "#15 */
export interface CollegueForms {
  pseudo: string;
  nom: string;
  prenom: string;
  photo: string
};

/* export const unCollegue: Collegue = {
  pseudo: "un pseudo",
  score: 1000,
  photo: "https://randomuser.me/api/portraits/lego/0.jpg"
}; */

export enum Vote {
  AIMER,
  DETESTER
};

export const tableauColleguesFictifs = [
  {
    pseudo: "lego 0",
    score: 1000,
    photo: "https://randomuser.me/api/portraits/lego/0.jpg"
  },
  {
    pseudo: "lego 1",
    score: 520,
    photo: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  {
    pseudo: "lego 2",
    score: -528,
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  },
  {
    pseudo: "lego 3",
    score: 2,
    photo: "https://randomuser.me/api/portraits/lego/3.jpg"
  },
  {
    pseudo: "lego 4",
    score: -10,
    photo: "https://randomuser.me/api/portraits/lego/4.jpg"
  },
  {
    pseudo: "lego 5",
    score: 698,
    photo: "https://randomuser.me/api/portraits/lego/5.jpg"
  },
  {
    pseudo: "lego 6",
    score: 999,
    photo: "https://randomuser.me/api/portraits/lego/6.jpg"
  }
];
