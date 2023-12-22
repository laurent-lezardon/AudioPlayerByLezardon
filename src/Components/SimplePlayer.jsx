import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import {
  setUpProgressDatas,
  updateProgressDatas,
} from "../features/progressSlice";

export default function SimplePlayer() {
  const songsSlice = useSelector((store) => store.songsSlice);
  const dispatch = useDispatch();
  //console.log("Simple Player sonsSlice : ", songsSlice);
  const handleLoadData = (e) => {
    if (songsSlice.songs) {
      console.log("file upload in the audio component");
      dispatch(
        setUpProgressDatas({
          currentTime: e.target.currentTime,
          totalDuration: e.target.duration,
        })
      );
      URL.revokeObjectURL(
        songsSlice.songs.find((song) => song.id === songsSlice.currentId).file
      );
    }
  };
  const handleTimeUpdate = (e) => {
    dispatch(updateProgressDatas(e.target.currentTime));
  };
  const audioRef = useRef();
  useEffect(() => {
    if (songsSlice.currentId && songsSlice.play) {
      audioRef.current.play();
    } else {
      console.log("audio --> Pause");
      audioRef.current.pause();
    }
  }, [songsSlice.play, songsSlice.currentId]);
  return (
    <div className="max-w-4xl ">
      <audio
        src={
          songsSlice.songs &&
          URL.createObjectURL(
            songsSlice.songs.find((song) => song.id === songsSlice.currentId)
              .file
          )
        }
        ref={audioRef}
        // controls
        id="audio-player"
        onLoadedData={(e) => handleLoadData(e)}
        onTimeUpdate={(e) => handleTimeUpdate(e)}
      ></audio>
    </div>
  );
}
