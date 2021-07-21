const BRAND = [
  {
    "id": "acura",
    "title": "Acura",
  },
  {
    "id": "audi",
    "title": "Audi",
  },
  {
    "id": "bmw",
    "title": "BWM",
  },
];

const MODEL = {
  audi: [
    {
      "id": "r8",
      "title": "R8",
    },
    {
      "id": "rs5",
      "title": "RS 5",
    },
    {
      "id": "rs7",
      "title": "RS 7",
    },
  ],
  acura: [
    {
      "id": "nsx",
      "title": "NSX"
    },
    {
      "id": "tsx",
      "title": "TSX"
    },
    {
      "id": "mdx",
      "title": "MDX"
    },
  ],
  bmw: [
    {
      "id": "m3",
      "title": "M3"
    },
    {
      "id": "m5",
      "title": "M5"
    },
    {
      "id": "m6",
      "title": "M6"
    },
  ]
}

function fakeFetch(url) {
  const parsedUrl = new URL(url, this.location)

  switch (parsedUrl.pathname) {
    case "/api/brands":
      return Promise.resolve(BRAND)
    case "/api/models":
      return Promise.resolve(MODEL[parsedUrl.searchParams.get('brand')] || [])
    default:
      return Promise.resolve([])
  }
}