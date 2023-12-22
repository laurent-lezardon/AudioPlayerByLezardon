import { useSelector } from "react-redux";
import PlayPauseButton from "./PlayPauseButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import ProgressBar from "./ProgressBar";
import ShuffleButton from "./ShuffleButton";
import PlaylistModeButton from "./PlaylistModeButton";

export default function AudioControlPannel() {
  const songsSlice = useSelector((store) => store.songsSlice);

  console.log("AudioControlPannel sonsSlice : ", songsSlice);
  const currentSongObj = songsSlice.songs?.find(
    (song) => song.id === songsSlice.currentId
  );
  console.log("currentSongObj", currentSongObj);
  const currentSongsIndex = songsSlice.songs?.findIndex(
    (song) => song.id === songsSlice.currentId
  );
  const currentSongNumber = currentSongsIndex + 1;
  const songsLength = songsSlice.songs?.length;
  console.log("currentSongNumber", currentSongNumber);
  return (
    <div className="fixed w-full  bottom-0  bg-lime-100/65 border border-lime-900 p-2 sm:p-4 hover:bg-lime-100/95 ">
      <div className="flex mx-2 mb-2 justify-between text-xs sm:text-base font-bold">
        <p className="text-lime-950">
          {currentSongObj && currentSongObj.file.name}
        </p>
        <p className="text-lime-950">
          {currentSongObj && `${currentSongNumber}/${songsLength}`}
        </p>
      </div>
      <div className="flex gap-8 justify-center p-2 sm:p-4 items-center bg-lime-600/30 border border-lime-600 rounded-full mx-0 mb-2 sm:mb-4">
        {/* <input
          type="range"
          onChange={(e) => console.log(e.target.value)}
          value={songsSlice.volume}
        /> */}
        <PlaylistModeButton />
        <PreviousButton index={currentSongsIndex} songsLength={songsLength} />
        <PlayPauseButton />
        <NextButton index={currentSongsIndex} songsLength={songsLength} />
        <ShuffleButton />
      </div>
      <ProgressBar index={currentSongsIndex} songsLength={songsLength} />
    </div>
  );
}
