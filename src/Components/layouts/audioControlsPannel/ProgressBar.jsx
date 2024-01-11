import { useSelector, useDispatch } from "react-redux";
import { nextSong } from "../../../features/songsSlice";
import {
  displaySongTime,
  progressBarPercent,
} from "../../../utils/AudioPlayerUtils";

export default function ProgressBar({ index, songsLength }) {
  const dispatch = useDispatch();
  const handleProgressClick = (e) => {
    const player = document.getElementById("audio-player");
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const x = e.clientX - rect.left;
    player.currentTime = (x / width) * progressSlice.totalDuration;
  };
  const progressSlice = useSelector((store) => store.progressSlice);
  // console.log("progressSlice", progressSlice);
  const percentDone = progressBarPercent(
    progressSlice.current,
    progressSlice.totalDuration
  );
  // console.log("percentDone", percentDone);
  if (
    progressSlice.current === progressSlice.totalDuration &&
    progressSlice.totalDuration > 0 &&
    !progressSlice.playlistMode
  ) {
    if (index < songsLength - 1) {
      dispatch(nextSong(index + 1));
    }
  }

  return (
    <div className="mx-2 max-w-[800px] flex gap-2 items-center sm:mx-auto">
      <span className="text-xs sm:text-base font-bold">
        {displaySongTime(progressSlice.totalDuration)}
      </span>
      <div
        id="progress-bar"
        className="grow  border border-lime-600 min-w-[150px] h-2 sm:h-3 rounded cursor-pointer"
        onClick={handleProgressClick}
      >
        <div className="bg-lime-200  h-full  rounded">
          <div
            className={`bg-lime-700 rounded-l origin-left h-full pointer-events-none `}
            style={{ width: `${percentDone ? percentDone : 0}%` }}
          ></div>
        </div>
      </div>

      <span className="text-xs sm:text-base font-bold">
        {displaySongTime(progressSlice.current)}
      </span>
    </div>
  );
}
