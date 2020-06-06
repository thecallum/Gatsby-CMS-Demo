import React from "react";

const Image = ({ props = {} }) => {
  const imageURL = props.hasOwnProperty("imageURL") ? props.imageURL.value : "";

  const defaultImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6amprHx8f39/fOzs7j4+P7+/uYmJjT09OlpaXv7+/29va6urq1tbWvr6/AwMDn5+fd3d2xsbGqqqp20Q+8AAACjklEQVR4nO3b6XLCIBSG4QQ0qzHG5f5vtY1byEaiZMY5Z97nX1ukwydSOKFRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq7av9hqrs1+P5wjG3mzKHX4/oY5mNt2V2vx7SxzJDBv8ZmA0/wokRmsGG3ZEBGbTIQH4GVVJfm3NYd8IzKKz5Z+ugvxKyMyiemyVzCulOdAb7917JFgHdic6g6PaLt4DuRGfQdBmE7BvJQHgGSZdBGdCd6AwO7zP0wiAy7ywRnYHzYfAOssnzxvNj2RlER9umYGJvHeho/DsI4RlEl1Nsyp13Fjw2Up5hSs+g/crf+LVo2HSuhYIMFpTvdbOaaaE+g27ZNNeZJtozuDgl6LmRKs+g6lWg7XShQXkGt34VfnpHrTuD3eBBhKmnWqnOIB09j5qsM2jOYD/xOMpO7Cg1ZXAejO80+Uhu/Do9GVSltVd3zUsmIzDH0SvVZJCV7cnIKamdZx5Oj5cENRkc7++6aZw2M0aXDbRk8Kqy28vzG/V8BsP6q5IMDt2p4HEySjzXNMygoKIkg7LL4F4sOXhvqrwny4OODJwC8+NkVM4H4EyWJxUZXHrvuk2fC6Qng96SoCGDajji6Z1BLwR30BoyuA2HvOLKVu5U1hRkMDwcruMco+VnkObfROAW28Vn8PVdRZO8uhCfwfXr+5rvypr0DJb/BHhkrz5EZzB3OFzlVVmTnUG2sB9c8DxGy85g/nC4cibcj9GiMyiC7/Dfr25IzsB/OFw3EdrKmuAMsvh+QTNMXojO4JBuQnQGm5GaQZxsp5aaQfhS0JH4/0zRBothT9B15x8577aVLP9KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDuD7d6G0PBTSbxAAAAAElFTkSuQmCC";

  const src = imageURL === "" ? defaultImage : imageURL;

  return (
    <div>
      <img
        style={{
          width: "100%",
          margin: "30px 0",
          display: "block",
        }}
        src={src}
      />
    </div>
  );
};

export default Image;

export const schema = {
  name: "Image",
  props: {
    imageURL: {
      label: "Path to image",
      value: "https://laravel.com/img/logomark.min.svg",
    },
  },
};
