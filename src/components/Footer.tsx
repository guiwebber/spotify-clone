
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeHigh, faRandom, faChevronLeft, faChevronRight, faRepeat, faMicrophone, faList, faDesktop, faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
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
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faRandom} width={25} /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faChevronLeft} width={25} /></button>
          <button className="w-12 h-12 rounded-full m-2 bg-zinc-50"><FontAwesomeIcon icon={faPause} width={25} color="black" /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faChevronRight} width={25} /></button>
          <button className="m-2 hover:text-zinc-50"><FontAwesomeIcon icon={faRepeat} width={25} /></button>
        </div>
        <div className="flex">
          <p className="mx-4">00:00</p>
          <p className="mx-4 hover:text-zinc-50 cursor-pointer">BARRA DE PROGRESSO DA MUSICA</p>
          <p className="mx-4">10:00</p>
        </div>
      </div>
      <div className="flex items-center text-zinc-400">
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faMicrophone} width={20} /></button>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faList} width={25} /></button>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faDesktop} width={25} /></button>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faVolumeHigh} width={25} /></button>
        <p className="hover:text-zinc-50 cursor-pointer">BARRA DE VOLUME</p>
        <button className="mx-2 hover:text-zinc-50"><FontAwesomeIcon icon={faExpand} width={24} /></button>
      </div>
    </footer>
  );
}