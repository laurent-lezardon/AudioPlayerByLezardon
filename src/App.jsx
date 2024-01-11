import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addSongsDataBase } from "./features/songsSlice";
import SimplePlayer from "./Components/SimplePlayer";
import Playlist from "./Components/Playlist";
import AudioControlPannel from "./Components/layouts/audioControlsPannel/audioControlPannel";
import { FileUploader } from "./Components/FileUploader";
import Reload from "./Components/Reload";

function App() {
  const songsSlice = useSelector((store) => store.songsSlice);
  const dispatch = useDispatch();
  const songDatas = [];

  const handleFile = (files) => {
    for (const file of files) {
      songDatas.push({
        file,
        id: nanoid(5),
      });
    }
    dispatch(addSongsDataBase(songDatas));
  };

  return (
    <>
      <header className="fixed top-0 left-0 py-2 bg-lime-950  w-full text-center border-t   ">
        <h1 className="text-slate-100 text-4xl mb-4">AudioPlayer</h1>
        <span className="text-[orangered]  ">By Lezardon</span>
      </header>
      <div className="w-screen min-h-screen py-24 bg-lime-950 px-2 sm:pt-28 pb-48  ">
        {/* Reload Button */}
        {songsSlice.songs && <Reload />}
        {!songsSlice.songs && <FileUploader handleFile={handleFile} />}
        {/*Audio v4*/}
        <SimplePlayer />
        {/* Affichage de la playlist */}
        {songsSlice.songs && <Playlist />}
      </div>
      <AudioControlPannel />
    </>
  );
}

export default App;
