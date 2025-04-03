export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const SIGNED_IN_USER =
  "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const TRAKT_CLIENT_ID = process.env.REACT_APP_TRAKT_CLIENT_ID;

export const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const API_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": TRAKT_CLIENT_ID,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_small.jpg";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const MOVIES_CATEGORIES = [
  {name: 'Most Watched', url: 'watched/weekly'},
  {name: 'Trending', url: 'trending'},
  {name: 'Popular', url: 'popular'},
  {name: 'Favorited', url: 'favorited/weekly'}
]
