
import { useState, useEffect } from "react"


function App() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('https://podcast-api.netlify.app/')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setPodcasts(data.podcasts)
      } catch (err) {
        console.error('Error fetching podcasts:', err)
        setError('Failed to load podcasts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPodcasts()
  }, [])

  if (loading) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>🎙️ Podcast App</h1>
        </header>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading podcasts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>🎙️ Podcast App</h1>
        </header>
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!podcasts || podcasts.length === 0) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>🎙️ Podcast App</h1>
        </header>
        <div className="empty-container">
          <p>No podcasts found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎙️ Podcast App</h1>
      </header>
      <PodcastGrid podcasts={podcasts} />
    </div>
  )
}

export default App 