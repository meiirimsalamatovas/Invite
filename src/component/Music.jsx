// import { useState } from "react";
// import { BsPause, BsPlay } from "react-icons/bs";


// export default function Music() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

//   const toggleMusic = () => {
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="music-container">
//       <button onClick={toggleMusic} className="music-button">
//         {isPlaying ? <BsPause size={40} className="icon" /> : <BsPlay size={40} className="icon" />}
//       </button>

//       {/* Текст по кругу */}
//       <svg className="circle-text">
//         <defs>
//           <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
//         </defs>
//         <text>
//           <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
//             Музыканы қосу үшін батырманы басыңыз
//           </textPath>
//         </text>
//       </svg>
//     </div>
//   );
// }


import { useState, useRef } from "react";
import { BsPause, BsPlay } from "react-icons/bs";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/Invite/audio.mp3"));


  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Ошибка воспроизведения:", err));
    }
    setIsPlaying(!isPlaying);
  };
  

  return (
    <div className="music-container">
      {/* SVG с текстом */}
      <svg className="circle-text" viewBox="0 0 100 100">
        <defs>
          <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text>
          <textPath xlinkHref="#circlePath">
            Музыканы қосу үшін батырманы басыңыз
          </textPath>
        </text>
      </svg>

      {/* Кнопка управления музыкой */}
      <button onClick={toggleMusic} className="music-button">
        {isPlaying ? <BsPause size={40} className="icon" /> : <BsPlay size={40} className="icon" />}
      </button>
    </div>
  );
}
