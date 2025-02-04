
import MainPlaylistCard from "./MainPlaylistCard";

export default function MainContent() {
  return (
    <main className="flex-1 bg-zinc-900 rounded-2xl p-5">
      <div className="flex gap-4 mb-4">
        <button className="px-5 py-2 bg-zinc-50 text-zinc-950 font-medium rounded-full transition-all hover:bg-zinc-600/80">Tudo</button>
        <button className="px-5 py-2 bg-zinc-700 font-medium rounded-full transition-all hover:bg-zinc-600/80">Música</button>
        <button className="px-5 py-2 bg-zinc-700 font-medium rounded-full transition-all hover:bg-zinc-600/80">Podcasts</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MainPlaylistCard title="Nome da Playlist" author="Gui Webber" />
        <MainPlaylistCard title="Nome da Playlist" author="Gui Webber" />
      </div>
    </main>
  );
}
