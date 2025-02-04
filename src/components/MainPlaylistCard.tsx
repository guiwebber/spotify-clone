
export default function MainPlaylistCard({ title, author }: { title: string; author: string }) {
    return (
      <div className="flex flex-col items-center p-4 bg-zinc-700 rounded-xl hover:bg-zinc-600 transition-all">
        <img src="/images/album1.png" className="w-32 h-32 rounded-lg mb-3" />
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-zinc-400 text-sm">Playlist • {author}</p>
      </div>
    );
  }