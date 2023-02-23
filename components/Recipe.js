/** @format */

export default function Recipe({ title, cuisineType, image, ingredients }) {
  return (
    <div className="flex justify-center p-10">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <img className="rounded-t-lg w-full" src={image} alt="" />

        <div className="p-6 items-center">
          <h5 className="mb-2 text-xl pl-8 font-medium items-center leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base pl-16 text-neutral-600 dark:text-neutral-200">
            {cuisineType}
          </p>
          <ol className="text-sm">
            {ingredients.map((ingredient) => (
              <li>*{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
