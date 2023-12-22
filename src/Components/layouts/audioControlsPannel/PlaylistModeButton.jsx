import { useSelector, useDispatch } from "react-redux";
import { togglePlaylistMode } from "../../../features/progressSlice";
import playlistIcon from "../../../assets/playlist.svg";
import songIcon from "../../../assets/song.svg";

export default function PlaylistModeButton() {
  const progressSlice = useSelector((store) => store.progressSlice);
  // console.log("PlaylistModeButton progressSlice", progressSlice);
  const dispatch = useDispatch();

  const handlePlaylistMode = () => {
    console.log("click !");
    console.log(dispatch(togglePlaylistMode()));
  };

  return (
    <button
      onClick={handlePlaylistMode}
      className="w-9 h-9 shrink-0 rounded-full bg-lime-300 border border-lime-700 flex justify-center items-center hover:bg-lime-600 text-lime-100 "
    >
      {progressSlice.playlistMode ? (
        <img className="w-6" src={songIcon} />
      ) : (
        <img className="w-6" src={playlistIcon} />
      )}
    </button>
  );
}
