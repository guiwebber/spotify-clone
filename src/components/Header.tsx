
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faDownload, faSearch, faCompass } from "@fortawesome/free-solid-svg-icons";


import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="py-3 px-5 bg-transparent flex justify-between items-center">
      <button><FontAwesomeIcon icon={faSpotify} width={35} className="h-auto" /></button>
      <div className="flex ml-40 w-2/6 items-center relative">
        <button className="absolute left-3">
          <FontAwesomeIcon icon={faSearch} width={20} className="h-auto" />
        </button>
        <input type="text" placeholder="O que você quer ouvir?" className="bg-zinc-800 w-full h-12 rounded-full font-medium pl-10 text-white" />
        <button className="absolute right-3 border-l-2 border-zinc-500/40 pl-2">
          <FontAwesomeIcon icon={faCompass} width={20} className="h-auto" />
        </button>
      </div>
      <div className="flex items-center text-zinc-300/90 space-x-6">
        <button className="hover:text-zinc-50 transition-all flex items-center">
          <FontAwesomeIcon icon={faDownload} width={20} className="h-auto" />
          <span className="ml-2 font-bold">Instalar aplicativo</span>
        </button>
        <button className="hover:text-zinc-50 transition-all">
          <FontAwesomeIcon icon={faBell} width={20} className="h-auto" />
        </button>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-zinc-800">
          <img src="/images/image.png" className="w-9 h-9 rounded-full" />
        </div>
      </div>
    </header>
  );
}
