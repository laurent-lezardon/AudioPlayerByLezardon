/**
 * Codage de l'url a partir d'un tag "picture" d'un fichier mp3
 * @param {{data,format}} picture objet du tag ID3
 * @returns {String} url de l'image au format base64
 */
// L’encodage des images en base64 transforme un fichier image (binaire) en suite de caractères.
// src='data:image/png;base64, <!-- base64 data -->' />

export const createCoverPicture = (picture) => {
  const data = picture.data;
  const format = picture.format;
  let base64String = "";
  for (let i = 0; i < data.length; i++) {
    base64String += String.fromCharCode(data[i]);
  }
  const coverUrl = `data:${format};base64,${window.btoa(base64String)}`;
  //console.log("coverUrl", coverUrl);
  return coverUrl;
};

// Formatage minutes:secondes
export const displaySongTime = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds =
    Math.floor(duration) % 60 < 10
      ? "0" + (Math.floor(duration) % 60)
      : Math.floor(duration) % 60;

  return `${minutes}:${seconds}`;
};

export const progressBarPercent = (elapseTime, duration) => {
  return Math.floor((100 * elapseTime) / duration);
};

// Melanger un tableau

export const basicShuffle = (array) =>
  array
    .map((x) => [Math.random(), x])
    .sort((x, y) => x[0] - y[0])
    .map((x) => x[1]);
