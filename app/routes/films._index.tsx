import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import type { Film } from "~/api/films";
import { getFilms } from "~/api/films";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Films | Ghibli App" },
    { name: "description", content: "Welcome to Films!" },
  ];
};

export default function Films() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="p-16 font-sans border border-cyan-900">
      <h3>Test</h3>
      <h1 className="text-5xl font-bold text-center">Studio Ghibli Films</h1>
      <Form reloadDocument method="get" className="flex justify-center py-5">
        <label htmlFor="search" className="font-bold">
          Search Films{" "}
          <input
            className="border-2 rounded py-2 px-3"
            type="text"
            name="title"
            placeholder="Type a title..."
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Search
        </button>
      </Form>
      <div className="grid grid-cols-4 gap-4  border border-red-950">
        {films.map((film) => (
          <Link
            key={film.id}
            title={film.title}
            to={film.id}
            className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
            prefetch="intent"
          >
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
