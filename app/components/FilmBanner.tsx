import { Link } from "react-router-dom";
import type { Film } from "~/api/films";

type FilmBannerProps = {
  film: Film;
};

export default function FilmBanner({ film }: FilmBannerProps) {
  return (
    <div className="w-full h-96 lg:h-screen overflow-hidden relative bg-black">
      <div
        style={{ backgroundImage: `url(${film.movie_banner})` }}
        className="w-full h-full bg-center bg-cover absolute top-0 left-0 opacity-70"
      ></div>

      <div className="w-full h-full flex flex-col justify-between items-start p-8 relative">
        <Link
          to="/films"
          className="bg-white text-black py-2 px-4 rounded-full text-sm hover:bg-opacity-80 transition ease-in-out duration-300"
        >
          ← Go back
        </Link>

        <div className="flex flex-col items-start justify-center h-full">
          <h1 className="text-5xl font-bold text-white mb-4 leading-snug">
            {film.title}
          </h1>
          <h5 className="text-lg text-white opacity-80 max-w-lg">
            {film.original_title}
          </h5>
        </div>
      </div>
    </div>
  );
}
