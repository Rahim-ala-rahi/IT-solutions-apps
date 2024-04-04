import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const blog = useLoaderData();
  const { _id, title, description } = blog || {};

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    const updateBlog = {
      title,
      description,
    };
    console.log(updateBlog);

    fetch(`${import.meta.env.VITE_API_URL}/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Data is Updated",
            showConfirmButton: false,
            timer: 3500,
          });
        }
      });
  };
  return (
    <>
      <div className="w-[90%] mx-auto">
        <form onSubmit={handleForm} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Add blog title here"
              name="title"
              defaultValue={title}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              cols="30"
              rows="8"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Blog Description"
              name="description"
              defaultValue={description}
            ></textarea>
          </div>

          <br />
          <div className="form-control w-48 mx-auto">
            <label className="input-group input-group-vertical">
              <input
                type="submit"
                className="input input-bordered border border-blue-400 p-2 rounded-lg hover:bg-green-200"
                value="Update-Now"
                required
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateBlog;
