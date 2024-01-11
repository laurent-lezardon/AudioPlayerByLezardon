import { createCoverPicture } from "../utils/AudioPlayerUtils";
import { useState } from "react";

export default function SongTags({ songFile, closeModal }) {
  const jsmediatags = window.jsmediatags;
  const [songTags, setSongTags] = useState(undefined);

  // utilisation de jsmediatags pour lire les tags. Le lien vers le script est dans l'entête HTML
  jsmediatags.read(songFile, {
    onSuccess: function (tag) {
      if (!songTags) {
        setSongTags({
          title: tag.tags.title ? tag.tags.title : "not set",
          artist: tag.tags.artist ? tag.tags.artist : "not set",
          album: tag.tags.album ? tag.tags.album : "not set",
          year: tag.tags.year ? tag.tags.year : "not set",
          track: tag.tags.track ? tag.tags.track : "not set",
          picture: tag.tags.picture
            ? createCoverPicture(tag.tags.picture)
            : "not set",
        });
      }
    },
    onError: function (error) {
      console.log(error);
    },
  });
  // style={{ background: `url(${songsDataBase[0].cover})` }}
  console.log("songTags", songTags);
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 w-full h-full bg-lime-950/95 flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full p-2 sm:min-w-[500px] sm:max-w-[600px] relative rounded sm:p-7 bg-lime-950/10"
      >
        <h2 className="my-4 text-lime-200">The Tags we ve found :</h2>
        <p className=" mb-4 text-lg bg-lime-500/40 text-lime-200 py-1 text-center rounded-full ">
          file : {songFile.name}{" "}
        </p>

        {songTags && (
          <>
            <div className="p-4 border border-lime-700 bg-lime-100/60 grid grid-cols-2 mb-4 rounded">
              <p className="even:font-bold text-lime-900">Title</p>
              <p className="even:font-bold text-lime-900"> {songTags.title}</p>
              <p className="even:font-bold text-lime-900">Artist</p>
              <p className="even:font-bold text-lime-900"> {songTags.artist}</p>
              <p className="even:font-bold text-lime-900">Album</p>
              <p className="even:font-bold text-lime-900"> {songTags.album}</p>
              <p className="even:font-bold text-lime-900">Track</p>
              <p className="even:font-bold text-lime-900"> {songTags.track}</p>
              <p className="even:font-bold text-lime-900">Year</p>
              <p className="even:font-bold text-lime-900"> {songTags.year}</p>
            </div>
            <div
              className="w-[300px] h-[300px] mb-4 bg-cover mx-auto "
              style={{ backgroundImage: `url(${songTags.picture})` }}
            ></div>
          </>
        )}

        <button
          onClick={closeModal}
          className=" absolute right-2 top-2 w-8 h-8 bg-red-600 rounded text-center font-semibold   text-slate-100"
        >
          X
        </button>
      </div>
    </div>
  );
}
