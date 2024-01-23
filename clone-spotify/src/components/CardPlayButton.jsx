import { usePlayerStore } from "@/store/playerStore";
import { Play, Pause } from "./Player";

export function CardPlayButton({ id, size = 'small' }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
      })

  }
  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button onClick={handleClick} className="card-play-button rounded-full p-4 bg-green-500 hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlaylist ?
        <Pause className={iconClassName} color={'black'} /> :
        <Play className={iconClassName} color={'black'} />
      }
    </button>

  )
}
