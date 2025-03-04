export const players = {
  _id: 1,
  name: "Marco Verratti",
  fullname: "Marco Verratti",
  birth: {
    date: "05-11-1992",
    place: "Pescara",
    country: "Italy",
  },
  nationalities: "Italy",
  national_team: "Italy",
  weight: "60",
  height: "165",
  position: "Midfielder",
  number: "6",
  strong_foot: "Right",
  fee: [
    {
      arrival: "12",
      departure: "50",
    },
  ],
  period: [
    {
      started: "2012-07-18",
      ended: "2023-09-13",
    },
  ],
  matches: "380",
  goals: "11",
  assists: "55",
  previous_club: ["Delfino Pescara"],
  next_club: ["Al Arabi Sport Club"],
  trophies: [""],
  photo: "1.png",
  url: "https://psgapi.com/api/v1/player/1",
  createdAt: {
    date: "2022-08-19",
  },
  updatedAt: {
    date: "2022-08-19",
  },
};

export const coaches = {
  _id: {
    $oid: "62ffd0e2229c50b7ce59ec15",
  },
  id: 1,
  name: "Pierre Phelipon",
  fullname: "Pierre Phelipon",
  birth: {
    date: "1932-02-05",
    place: "Pescara",
    country: "France",
  },
  nationalities: "France",
  period: [
    {
      started: {
        date: "1970-08-01",
      },
      ended: {
        date: "1972-06-30",
      },
    },
  ],
  trophies: {},
  stats: {
    played: 10,
    won: 8,
    lost: 5,
    drawn: 2,
  },
  photo: "1.png",
  url: "http://psgapi.com/api/coach/1",
  createdAt: {
    date: "2022-08-19",
  },
  updatedAt: {
    date: "2022-08-19",
  },
  __v: 0,
};
