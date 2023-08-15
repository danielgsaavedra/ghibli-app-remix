export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  image: string;
  movie_banner: string;
  people: string[];
};

export async function getFilms(title?: string | null) {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  const films: Film[] = await response.json();
  return films.filter((film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  );
}

export async function getFilmById(filmId: string) {
  const response = await fetch(`https://ghibliapi.vercel.app/films/${filmId}`);
  const film: Film = await response.json();
  return film;
}
