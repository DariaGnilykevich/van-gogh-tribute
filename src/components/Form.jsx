import BackgroundImage from "./BackgroundImg.jsx";
import Button from "./Button.jsx";
import { Rating, Star } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";

import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

export default function Form() {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit } = useForm();

  return (
    <BackgroundImage url="src/assets/Quinces-Lemons-Pears&Grapes.jpg">
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm bg-white/20 w-4/5 md:w-1/2 lg:w-2/5 h-auto rounded-lg flex flex-col mx-auto py-10 px-6"
        >
          <h2 className="uppercase text-3xl pb-6 mb-4 text-center border-b-2">
            Leave your review here
          </h2>
          <label className="mb-4 text-black font-bold">
            Name:
            <br />
            <input
              {...register("name")}
              type="text"
              className="w-full p-2 mt-1 rounded"
            />
          </label>
          <label className="mb-4 text-black font-bold">
            Email:
            <br />
            <input
              {...register("email")}
              type="email"
              className="w-full p-2 mt-1 rounded"
            />
          </label>
          <label className="mb-4 text-black font-bold">
            Review:
            <br />
            <textarea
              {...register("review")}
              className="w-full p-2 mt-1 rounded"
            ></textarea>
          </label>
          <label className="text-black font-bold">
            Rating:
            <br />
            <Rating
              {...register("rating")}
              value={rating}
              onChange={setRating}
              itemStyles={myStyles}
              className="w-2/5"
            />
          </label>
          <Button type="submit" name="Submit" styles="mt-4" />
        </form>
      </div>
    </BackgroundImage>
  );
}
