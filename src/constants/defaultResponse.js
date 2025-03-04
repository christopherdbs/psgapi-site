export const defaultPlayersResponse = {
  id: 306,
  name: "Pauleta",
  fullname: "Pedro Miguel Carreiro Resendes",
  birth: {
    date: "1973-04-28T00:00:00.000Z",
    place: "Ponta Delgada",
    country: "Portugal",
  },
  nationalities: ["Portugal"],
  national_team: "Portugal",
  weight: 78,
  height: 180,
  position: ["Forward"],
  strong_foot: "",
  fee: [{ arrival: 11000000, departure: 0 }],
  period: [
    {
      started: "2003-07-10T00:00:00.000Z",
      ended: "2008-05-24T00:00:00.000Z",
    },
  ],
  number: [9],
  matches: 211,
  goals: 109,
  assists: 18,
  previous_club: ["Girondins de Bordeaux"],
  next_club: ["Retraite"],
  trophies: [
    {
      competition: "Coupe de France",
      date: "2004-05-29",
      url: "https://psgapi.com/api/v1/trophy/15",
    },
    {
      competition: "Coupe de France",
      date: "2006-04-29",
      url: "https://psgapi.com/api/v1/trophy/16",
    },
    {
      competition: "Coupe de la Ligue",
      date: "2008-03-29",
      url: "https://psgapi.com/api/v1/trophy/17",
    },
  ],
  photo: null,
  url: "http://localhost/api/players/306",
  createdAt: "2025-02-02T17:25:10.591Z",
  updatedAt: "2025-02-02T17:25:10.591Z",
};

export const defaultMatchesResponse = {
  id: 1,
  date: "1970-08-01T00:00:00.000Z",
  season: {
    date: "1970-1971",
    url: "https://psgapi.com/api/v1/season/1",
  },
  competition: "Friendly",
  round: null,
  venue: null,
  opponent: "Quevilly",
  is_home: true,
  players: [
    {
      name: "Camille Choquier",
      url: "http://localhost/api/players/9",
    },
    {
      name: "Jean Djorkaeff",
      url: "http://localhost/api/players/5",
    },
    {
      name: "Jean-Claude Bras",
      url: "http://localhost/api/players/6",
    },
  ],
  score: "1-3",
  position: null,
  url: "https://psgapi.com/api/v1/match/1",
  goals: [
    {
      minute: 30,
      scorer: {
        name: "Jean-Claude Bras",
        url: "http://localhost/api/players/6",
      },
      passer: null,
    },
  ],
  createdAt: "2025-02-02T16:40:12.332Z",
  updatedAt: "2025-02-02T16:40:12.332Z",
};

export const defaultCoachesResponse = {
  nationalities: [],
  id: 27,
  name: "Carlo Ancelotti",
  fullname: "Carlo Ancelotti",
  date_of_birth: "1959-06-10T00:00:00.000Z",
  country: "Italie",
  period: [
    {
      started: "2011-12-30T00:00:00.000Z",
      ended: "2013-06-25T00:00:00.000Z",
    },
  ],
  url: "http://psgapi.com/api/coach/27",
  createdAt: "2022-08-19T18:05:22.813Z",
  updatedAt: "2022-08-19T18:05:22.813Z",
  trophies: [
    {
      competition: "Ligue 1",
      date: "2013-05-12",
      url: "https://psgapi.com/api/v1/trophy/19",
    },
  ],
};

export const defaultPresidentsResponse = {
  id: 1,
  name: "Pierre-Etienne Guyot",
  fullname: "Pierre-Etienne Guyot",
  birth: {
    date: "1905-05-21",
    place: "Paris",
    country: "France",
    _id: "679bbb4b09c6955fdefe8074",
    id: "679bbb4b09c6955fdefe8074",
  },
  period: [
    {
      started: "1970-06-26",
      ended: "1971-06-04",
    },
  ],
  trophies: [
    {
      competition: "Division 2",
      date: "1971-05-15",
      url: "https://psgapi.com/api/v1/trophy/1",
    },
  ],
  photo: "",
  url: "https://psgapi.com/api/v1/president/1",
  createdAt: "2025-01-30T17:47:55.503Z",
  updatedAt: "2025-01-30T17:47:55.503Z",
};

export const defaultOwnersResponse = {
  name: "Paris Saint-Germain Association",
  country: "France",
  period: [
    {
      started: "1970-08-12",
      ended: "1991-06-12",
      ownership: "100%",
    },
    {
      started: "1991-06-12",
      ended: "1997-04-21",
      ownership: "51%",
    },
    {
      started: "1997-04-21",
      ended: "2001-06-21",
      ownership: "34%",
    },
  ],
  photo: "",
  url: "https://psgapi.com/api/v1/owner/1",
  createdAt: "2025-01-30T14:49:32.691Z",
  updatedAt: "2025-01-30T14:49:32.691Z",
};
export const defaultSeasonsResponse = {
  id: 1,
  date: "1970-1971",
  results: {
    league: {
      stats: {
        points: 45,
        played: 30,
        won: 17,
        lost: 2,
        drawn: 11,
        goals_for: 52,
        goals_against: 23,
        goal_difference: 29,
      },
      name: "Division 2 G. Centre",
      tier: 2,
      position: "1st",
    },
    coupe_de_france: {
      stats: {
        played: 3,
        won: 2,
        lost: 1,
        drawn: 0,
        goals_for: 3,
        goals_against: 2,
        goal_difference: 1,
      },
      round: "Round of 64",
    },
  },
  createdAt: "2023-07-07T13:20:51.838Z",
  updatedAt: "2025-01-30T12:33:02.929Z",
  url: "https://psgapi.com/api/v1/season/1",
};
export const defaultTrophiesResponse = {
  id: 1,
  season: [
    {
      _id: "64a811331f00d6da699dd0e8",
      date: "1970-1971",
      url: "https://psgapi.com/api/v1/season/1",
    },
  ],
  competition: "Division 2",
  domestic: true,
  date: "1971-05-15",
  url: "https://psgapi.com/api/v1/trophy/1",
  createdAt: "2025-01-30T12:33:55.378Z",
  updatedAt: "2025-01-30T12:33:55.378Z",
};
