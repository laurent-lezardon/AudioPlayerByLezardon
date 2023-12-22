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
      <div className="min-h-screen bg-lime-950 p-2 sm:p-10  ">
        <header className="text-center mb-4">
          <h1 className="text-slate-100 text-4xl mb-2">AudioPlayer</h1>
          <span className="text-[orangered]">By Lezardon</span>
        </header>
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
