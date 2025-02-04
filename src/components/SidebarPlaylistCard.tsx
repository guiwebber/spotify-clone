
export default function SidebarPlaylistCard({ title, author }: { title: string; author: string }) {
    return (
      <div className="flex my-5 p-3 rounded-xl bg-zinc-700">
        <img src="/images/album1.png" className="w-16 h-16 rounded-md" />
        <div className="ml-4">
          <h4 className="font-semibold text-xl">{title}</h4>
          <p className="text-zinc-400">Playlist • {author}</p>
        </div>
      </div>
    );
  }
  