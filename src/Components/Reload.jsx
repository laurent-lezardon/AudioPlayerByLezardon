import { useDispatch } from "react-redux";
import { deleteSongs, stopPlay } from "../features/songsSlice";
// import reloadIcon from "../assets/refresh.svg";

export default function Reload() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(deleteSongs());
        dispatch(stopPlay());
      }}
      className="text-base px-1 fixed top-8 right-4 sm:text-lg sm:px-2 sm:right-[20%] bg-[orangered] lg:right-[30%] z-10 rounded border border-orange-400 hover:bg-orange-700"
    >
      Reload
      {/* <img className="w-5" src={reloadIcon} alt="" /> */}
    </div>
  );
}
