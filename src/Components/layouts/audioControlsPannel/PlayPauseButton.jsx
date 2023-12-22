import play from "../../../assets/play-icon.svg";
import pause from "../../../assets/pause-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayPause } from "../../../features/songsSlice";

export default function PlayPauseButton() {
  const songsSlice = useSelector((store) => store.songsSlice);
  const progressSlice = useSelector((store) => store.progressSlice);
  console.log("progressSlice.current", progressSlice.current);
  const dispatch = useDispatch();
  return (
    <button
      className="w-24 flex justify-center h-10 rounded-full bg-lime-200 border border-lime-700"
      onClick={() => dispatch(togglePlayPause())}
    >
      <img className=" " src={songsSlice.play ? pause : play} />
    </button>
  );
}
