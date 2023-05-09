/** @format */
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Rdev() {
  return (
    <div className=" px-14 py-6 bg-black  md:flex  lg:items-center sm:justify-between">
      <span className="text-sm text-white sm:text-center">
        © 2023 <a href="">Rdev</a>. All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-6 justify-center md:mt-0">
        <a href="#" className="text-gray-400 hover:text-white ">
          <AiOutlineInstagram />
          <span className="sr-only">Instagram page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <AiOutlineTwitter />
        </a>
        <span className="sr-only">Twitter</span>
        <a href="#" className="text-gray-400 hover:text-white">
          <AiOutlineGithub />
        </a>
        <span className="sr-only">Github</span>
      </div>
    </div>
  );
}
