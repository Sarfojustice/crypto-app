import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook to fetch live crypto prices from CoinGecko
 * and the USD→GHS exchange rate.
 * Auto-refreshes every 60 seconds.
 */
export default function useCryptoData(perPage = 20) {
  const [coins, setCoins] = useState([])
  const [ghsRate, setGhsRate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const [cryptoRes, rateRes] = await Promise.all([
        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&price_change_percentage=24h`
        ),
        fetch('https://open.er-api.com/v6/latest/USD'),
      ])

      if (!cryptoRes.ok || !rateRes.ok) throw new Error('API error')

      const cryptoData = await cryptoRes.json()
      const rateData = await rateRes.json()

      setCoins(cryptoData)
      setGhsRate(rateData.rates.GHS)
      setLoading(false)
      setError(false)
    } catch {
      setError(true)
      setLoading(false)
    }
  }, [perPage])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [fetchData])

  return { coins, ghsRate, loading, error, refetch: fetchData }
}
