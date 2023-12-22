import { useDispatch } from "react-redux";
import { deleteSongs } from "../features/songsSlice";
// import reloadIcon from "../assets/refresh.svg";

export default function Reload() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(deleteSongs())}
      className="text-base px-1 fixed top-6 right-4 bg-[orangered] z-10 rounded"
    >
      Reload
      {/* <img className="w-5" src={reloadIcon} alt="" /> */}
    </div>
  );
}
