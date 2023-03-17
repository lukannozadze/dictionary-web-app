import { useEffect, useState } from "react";

const PlayerIcon = (props) => {
  const [audioPath, setAudioPath] = useState("");
  const [audioObj, setAudioObj] = useState({});
  useEffect(() => {
    if (Object.keys(props.wordObj).length !== 0) {
      if (props.wordObj[0].phonetics.length > 0) {
        props.wordObj[0].phonetics.forEach((el) => {
          if (el.audio !== "") {
            setAudioPath(el.audio);
          }
        });
      } else {
        setAudioPath(props.wordObj[0].phonetics[0]);
      }
    }
  }, [props.wordObj]);
  useEffect(() => {
    let audio = new Audio(audioPath);
    setAudioObj(audio);
  }, [audioPath]);
  const playAudio = () => {
    if (audioObj) {
      audioObj.play();
    }
  };
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={playAudio}
    >
      <circle opacity="0.25" cx="24" cy="24" r="24" fill="#A445ED" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 18V31L32 24.5L19 18Z"
        fill="#A445ED"
      />
    </svg>
  );
};

export default PlayerIcon;
