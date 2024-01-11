import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useState } from "react";
import { selectSong } from "../features/songsSlice";
import SongTags from "./SongTags";

export default function Playlist() {
  const songsSlice = useSelector((store) => store.songsSlice);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [songFile, setSongFile] = useState(undefined);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-xl mx-auto border   bg-lime-100 rounded-2xl sm:max-w-4xl   ">
      <ul className="p-4 sm:gap-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {songsSlice.songs &&
          songsSlice.songs.map((song) => (
            <li
              className="flex justify-between text-base sm:text-lg cursor-pointer py-2 pl-4 pr-2 text-lime-950 font-semibold border-b border-r border-lime-400 bg-lime-50 mb-2 rounded-full hover:border-lime-700 "
              key={song.id}
              style={
                song.id === songsSlice.currentId
                  ? { background: "GreenYellow" }
                  : {}
              }
              onClick={() => dispatch(selectSong(song.id))}
            >
              <p className="text-ellipsis overflow-hidden text-nowrap  ">
                {song.file.name}
              </p>
              <button
                onClick={(e) => {
                  console.log("click", song.file);
                  e.stopPropagation();
                  setShowModal(true);
                  setSongFile(song.file);
                }}
                className="h-6 w-6 text-lime-900 ml-2 sm:h-9 sm:w-9 shrink-0 rounded-full bg-yellow-200 border border-lime-600 hover:bg-orange-300"
              >
                i
              </button>
            </li>
          ))}
        {showModal &&
          createPortal(
            <SongTags songFile={songFile} closeModal={closeModal} />,
            document.body
          )}
      </ul>
    </div>
  );
}
