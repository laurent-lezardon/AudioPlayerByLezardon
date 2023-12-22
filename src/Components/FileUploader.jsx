import { useRef } from "react";

export const FileUploader = ({ handleFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded);
  };
  return (
    <>
      <button
        className="bg-lime-300 h-[250px] w-[250px] border border-lime-900 rounded-full block mx-auto mt-20 hover:bg-lime-500 hover:border-4"
        onClick={handleClick}
      >
        Upload mp3 files !
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        multiple
        style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};
