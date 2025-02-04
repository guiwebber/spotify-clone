
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import SidebarPlaylistCard from "./SidebarPlaylistCard";

export default function Sidebar() {
  return (
    <aside className="w-96 bg-zinc-900 rounded-2xl p-5 flex flex-col">
      <div className="flex justify-between items-center text-zinc-400">
        <button className="flex items-center transition-all hover:text-zinc-50">
          <FontAwesomeIcon icon={faList} width={25} className="mx-2" />
          <p className="font-bold text-lg">Sua biblioteca</p>
        </button>
        <div className="flex space-x-4">
          <button className="w-12 h-12 flex justify-center items-center rounded-full transition-all hover:bg-zinc-800 hover:text-zinc-50">
            <FontAwesomeIcon icon={faPlus} width={20} />
          </button>
          <button className="w-12 h-12 flex justify-center items-center rounded-full transition-all hover:bg-zinc-800 hover:text-zinc-50">
            <FontAwesomeIcon icon={faArrowRight} width={20} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full text-zinc-400 mt-5">
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:text-zinc-50 hover:bg-zinc-700">
          <FontAwesomeIcon icon={faSearch} width={20} />
        </button>
        <p className="text-zinc-400 font-semibold hover:text-zinc-50 hover:scale-105 cursor-pointer">Recentes</p>
      </div>
      <div className="mt-10 space-y-4">
        <SidebarPlaylistCard title="RAP/TRAP 2025" author="Gui Webber" />
        <SidebarPlaylistCard title="TO SING" author="Gui Webber" />
      </div>
    </aside>
  );
}
