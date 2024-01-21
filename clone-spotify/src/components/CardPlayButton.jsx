import { usePlayerStore } from "@/store/playerStore";
import { Play } from "./Player";
import Pause from "@/icons/Pause.astro";

export function CardPlayButton({ id }) {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } = usePlayerStore(state => state)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <button onClick={handleClick} className="card-play-button rounded-full p-4 bg-green-500">
      {isPlaying ?
        <Pause width={16} height={16} color={'black'} /> :
        <Play width={16} height={16} color={'black'} />
      }
    </button>

  )
}
