/** @format */
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Recipe from "@/components/Recipe";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export default function dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      route.push("/auth/login");
    }
  }, [user]);

  const APP_ID = "8913e6ba";
  const APP_KEY = "8542b403f8b49816d79915dbe1d2c913";
  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="bg-black w-screen h-full">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 p-6 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              value={search}
              onChange={updateSearch}
              className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-white bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-white focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                cursor="Pointer"
                className="h-5 w-5 border-t-slate-100"
                onClick={getSearch}
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          {recipe.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              cuisineType={recipe.recipe.cuisineType}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
