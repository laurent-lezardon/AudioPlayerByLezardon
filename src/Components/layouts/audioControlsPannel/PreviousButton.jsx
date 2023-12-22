import nextIcon from "../../../assets/prev-icon.svg";
import { useDispatch } from "react-redux";
import { nextSong } from "../../../features/songsSlice";

export default function NextButton({ index, songsLength }) {
  const dispatch = useDispatch();
  const handleNext = () => {
    if (songsLength) {
      const nextIndex = index === 0 ? songsLength - 1 : index - 1;

      dispatch(nextSong(nextIndex));
    }
  };
  return (
    <button
      onClick={handleNext}
      className="w-9 h-9 shrink-0 rounded-full bg-lime-800 flex justify-center items-center hover:bg-lime-950 "
    >
      <img className=" w-6" src={nextIcon} alt="" />
    </button>
  );
}
