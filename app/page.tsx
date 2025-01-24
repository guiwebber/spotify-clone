import "./globals.css";
import me from "/image/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faSearch,
  faCompass,
  faDownload,
  faBell,
  faPlus,
  faChevronRight,
  faChevronLeft,
  faPause,
  faPlay,
  faRandom,
  faRepeat,
  faDesktop,
  faList,
  faMicrophone,
  faVolumeHigh,
  faExpand,
  faWindowMaximize,
  faWindowRestore,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="bg-black h-screen text-zinc-50 flex flex-col">
      <header className="py-3 px-5 bg-transparent flex justify-between align-middle">
        <button className="flex">
          <FontAwesomeIcon icon={faSpotify} width={38} />
        </button>

        <div className="flex ml-40 w-2/6 items-center ">
          <button className=" bg-zinc-800 w-14 h-12 rounded-full  mr-5">
            <FontAwesomeIcon
              className="m-auto pl-0.5"
              icon={faHome}
              width={25}
            />
          </button>
          <div className="bg-zinc-800 rounded-full w-full h-12 flex relative">
            <button className="p-1 pl-3 absolute top-2.5">
              <FontAwesomeIcon icon={faSearch} width={20} />
            </button>
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              className=" bg-transparent w-full h-12 rounded-full font-medium pb-1 pl-10"
            />
            <button className="pl-2 absolute top-3.5 right-3 border-zinc-500/40 border-l-2">
              <FontAwesomeIcon icon={faCompass} width={22} />
            </button>
          </div>
        </div>

        <div className="flex h-auto justify-end align-middle items-center  text-zinc-300/90 ">
          <button className="flex justify-center align-middle hover:text-zinc-50 transition-all">
            <FontAwesomeIcon icon={faDownload} width={20} className="m-1 " />
            <a href="#" className="m-auto mx-2  font-bold ">
              Instalar aplicativo
            </a>
          </button>
          <button className="mx-10 hover:text-zinc-50 transition-all">
            <FontAwesomeIcon icon={faBell} width={20} className="m-1" />
          </button>
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-zinc-800">
            <img
              src="/images/image.png "
              alt=""
              className="  w-9 h-9 rounded-full"
            />
          </div>
        </div>
      </header>
      <div className=" flex flex-1 gap-4 ">
        <aside className="w-96 bg-zinc-900 rounded-2xl p-5">
          <div className="flex justify-between text-zinc-400">
            <button className="flex m-2 transition-all hover:text-zinc-50">
              <FontAwesomeIcon icon={faList} width={25} className="mx-2" />
              <p className="mx-2 font-bold text-lg">Sua biblioteca</p>
            </button>
            <div className="flex ">
              <button className="mr-4 w-12 h-12 flex justify-center items-center rounded-full transition-all hover:bg-zinc-800 hover:text-zinc-50">
                <FontAwesomeIcon icon={faPlus} width={20} className="m-1" />
              </button>
              <button className="mr-4 w-12 h-12 flex justify-center items-center rounded-full transition-all hover:bg-zinc-800 hover:text-zinc-50">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width={20}
                  className="m-1"
                />
              </button>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="px-5 py-2 bg-zinc-700 font-bold rounded-full transition-all hover:bg-zinc-600/80"
            >
              Playlists
            </a>
          </div>

          <div className="mt-10 flex justify-between w-auto text-zinc-400">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:text-zinc-50 hover:bg-zinc-700">
              <FontAwesomeIcon icon={faSearch} width={20} />
            </button>
            <a
              href="#"
              className="flex items-center font-semibold transition-all hover:text-zinc-50 hover:scale-105"
            >
              Recentes{" "}
              <FontAwesomeIcon className="mx-2" icon={faList} width={20} />
            </a>
          </div>
          <div className="mt-10">
            <div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/2e1.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/2e2.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/2e3.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/2e4.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">RAP/TRAP 2025</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/1e1.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/1e2.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/1e3.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/1e4.jpg "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">TO SING</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className=" flex-1 bg-zinc-900 rounded-2xl p-5">
          <div className="flex">
            <div className="mt-10 mr-4">
              <a
                href="#"
                className="px-5 py-2 bg-zinc-50 text-zinc-950 font-medium rounded-full transition-all hover:bg-zinc-600/80"
              >
                Tudo
              </a>
            </div>{" "}
            <div className="mt-10 mr-4">
              <a
                href="#"
                className="px-5 py-2 bg-zinc-700 font-medium rounded-full transition-all hover:bg-zinc-600/80"
              >
                Música
              </a>
            </div>{" "}
            <div className="mt-10 mr-4">
              <a
                href="#"
                className="px-5 py-2 bg-zinc-700 font-medium rounded-full transition-all hover:bg-zinc-600/80"
              >
                Podcasts
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-10">
            
          <div className="flex my-5 bg-zinc-700 w-fit rounded-xl ">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>
              <div className="flex my-5 bg-zinc-700 w-fit rounded-xl">
                <div className="flex flex-wrap w-16 h-16">
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-tr-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-bl-xl"
                  />
                  <img
                    src="/images/album1.png "
                    alt=""
                    className="  w-8 h-8 rounded-br-xl"
                  />
                </div>
                <div className="mx-4">
                  <h4 className="font-semibold text-xl">Nome da playlist</h4>
                  <div className="flex text-zinc-400 font-medium">
                    <p className="mr-1"> Playlist </p>
                    <p className="mr-1"> • </p>
                    <p className="mr-1"> Gui Webber </p>
                  </div>
                </div>
              </div>

          </div>
        </main>
      </div>
      <footer className="p-2  bg-transparent flex justify-between">
        <div className="flex items-center">
          {" "}
          <img
            src="/images/album1.png "
            alt=""
            className="  w-20 h-20 rounded-md m-2"
          />
          <div className=" p-2 ">
            <a className="font-bold hover:underline cursor-pointer">
              Nome da música
            </a>

            <div>
              <a
                href="#"
                className="mr-2 text-sm text-zinc-400 hover:underline"
              >
                Video clipe
              </a>
              <a href="" className="text-zinc-400">
                •{" "}
              </a>
              <a
                href="#"
                className="mr-2 text-sm text-zinc-400 hover:underline"
              >
                Nome da banda
              </a>
            </div>
          </div>
          <div className="mx-2">
            <a
              href="#"
              className=" text-zinc-400 hover:text-zinc-50 transition-all"
            >
              <FontAwesomeIcon icon={faPlus} width={15} />
            </a>
          </div>
        </div>

        <div className="mr-10 flex flex-col items-center text-zinc-400">
          <div className="flex">
            <button className="m-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faRandom}
                width={25}
              />
            </button>
            <button className="m-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faChevronLeft}
                width={25}
              />
            </button>
            <button className="w-12 h-12 rounded-full m-2 bg-zinc-50 ">
              <FontAwesomeIcon
                className="m-auto p-0.5"
                icon={faPause}
                width={25}
                color="black"
              />
            </button>
            <button className="m-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faChevronRight}
                width={25}
              />
            </button>
            <button className="m-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faRepeat}
                width={25}
              />
            </button>
          </div>
          <div className="flex">
            <p className="mx-4">00:00</p>
            <p className="mx-4 hover:text-zinc-50 cursor-pointer">
              BARRA DE PROGRESSO DA MUSICA
            </p>
            <p className="mx-4">10:00</p>
          </div>
        </div>

        <div className="w-auto flex items-center text-zinc-400">
          <div>
            <button className=" mx-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faWindowMaximize}
                width={25}
              />
            </button>
            <button className=" mx-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faMicrophone}
                width={20}
              />
            </button>
            <button className=" mx-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faList}
                width={25}
              />
            </button>
            <button className=" mx-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faDesktop}
                width={25}
              />
            </button>
          </div>
          <div className="flex">
            <button className="mx-2 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5 hover:text-zinc-50"
                icon={faVolumeHigh}
                width={25}
              />
            </button>
            <p className="hover:text-zinc-50 cursor-pointer">barra de volume</p>
          </div>
          <div className="mx-2 ">
            <button className="mx-1 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faWindowRestore}
                width={24}
              />
            </button>
            <button className="mx-1 hover:text-zinc-50">
              <FontAwesomeIcon
                className="m-auto pl-0.5"
                icon={faExpand}
                width={24}
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
