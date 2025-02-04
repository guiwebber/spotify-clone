'use client'
// components/Footer.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeHigh, faVolumeMute, faRandom, faChevronLeft, faChevronRight, faRepeat, faMicrophone, faList, faDesktop, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Footer() {
  const [progress, setProgress] = useState(50);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setVolume(isMuted ? 70 : 0);
  };

  return (
    <footer className="p-2 bg-transparent flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/album1.png" className="w-20 h-20 rounded-md m-2" />
        <div className="p-2">
          <a className="font-bold hover:underline cursor-pointer">Nome da música</a>
          <div className="text-sm text-zinc-400 flex items-center">
            <a href="#" className="hover:underline mr-2">Video clipe</a>
            <span>•</span>
            <a href="#" className="hover:underline ml-2">Nome da banda</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-zinc-400">
        <div className="flex">
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faRandom} width={20} className="h-auto" /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faChevronLeft} width={20} className="h-auto" /></button>
          <button className="w-12 h-12 rounded-full m-2 bg-zinc-50"><FontAwesomeIcon icon={faPause} width={20} className="h-auto" color="black" /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faChevronRight} width={20} className="h-auto" /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faRepeat} width={20} className="h-auto" /></button>
        </div>
        <div className="flex items-center w-full">
          <p className="mx-4">00:00</p>
          <div className="relative w-64 h-1 bg-gray-600 rounded-lg">
            <div className="absolute top-0 left-0 h-1 bg-zinc-400 rounded-lg" style={{ width: `${progress}%` }}></div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute w-full h-1 opacity-0 cursor-pointer"
            />
          </div>
          <p className="mx-4">10:00</p>
        </div>
      </div>
      <div className="flex items-center text-zinc-400">
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faMicrophone} width={20} className="h-auto" /></button>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faList} width={20} className="h-auto" /></button>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faDesktop} width={20} className="h-auto" /></button>
        <button className="mx-2 hover:text-zinc-50" onClick={toggleMute}>
          <FontAwesomeIcon icon={isMuted || volume === 0 ? faVolumeMute : faVolumeHigh} width={20} className="h-auto" />
        </button>
        <div className="relative w-24 h-1 bg-gray-600 rounded-lg">
          <div className="absolute top-0 left-0 h-1 bg-zinc-400 rounded-lg" style={{ width: `${volume}%` }}></div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="absolute w-full h-1 opacity-0 cursor-pointer"
          />
        </div>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faExpand} width={20} className="h-auto" /></button>
      </div>
    </footer>
  );
}
