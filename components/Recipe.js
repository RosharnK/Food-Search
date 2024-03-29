/** @format */

export default function Recipe({ title, cuisineType, image, ingredients }) {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded-lg  shadow-lg dark:bg-neutral-700 transition duration-300 ease-in-out hover:scale-110">
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
