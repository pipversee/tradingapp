const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY

export const fetchIndianStockNews = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=indian%20stocks&lang=en&country=in&max=10&page=${pageParam}&apikey=${API_KEY}`
  )

  if(!res.ok) {
    throw new Error("Failed to fetch news")
  }

  return res.json();
}
