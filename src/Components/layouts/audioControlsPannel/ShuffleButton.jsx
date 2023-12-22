import { useSelector, useDispatch } from "react-redux";
import { addSongsDataBase } from "../../../features/songsSlice";
import { basicShuffle } from "../../../utils/AudioPlayerUtils";
import shuffle from "../../../assets/shuffle.svg";

export default function ShuffleButton() {
  const songsSlice = useSelector((store) => store.songsSlice);
  const dispatch = useDispatch();
  const handleShuffle = () => {
    if (songsSlice.songs) {
      const shuffledSongsList = basicShuffle(songsSlice.songs);
      dispatch(addSongsDataBase(shuffledSongsList));
    }
  };
  return (
    <button
      onClick={() => console.log(handleShuffle())}
      className="w-9 h-9 shrink-0  rounded-full bg-lime-300 border border-lime-700 flex justify-center items-center hover:bg-lime-600 text-lime-100 "
    >
      <img className="w-6 " src={shuffle} alt="" />
    </button>
  );
}
