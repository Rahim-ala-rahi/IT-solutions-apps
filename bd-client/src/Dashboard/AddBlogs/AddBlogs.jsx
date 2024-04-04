import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { uploadImage } from "../../Api/utils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddBlogs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [uploadButtonText, setUploadButtonText] = useState(`Upload Image`);

  const [axiosSecure] = useAxiosSecure();

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const title = event.target.title.value;
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    const description = event.target.description.value;

    const image = event.target.image.files[0];
    setUploadButtonText(`Uploadding.....`);
    uploadImage(image)
      .then((data) => {
        // console.log(data.data.display_url)
        const blogData = {
          image: data.data.display_url,

          title,

          description,
        };

        //save room to dataBase
        axiosSecure
          .post(`/blogs`, {
            // name,
            title,
            image: data.data.display_url,
            // email,
            description,
          })
          .then((res) => {
            toast.success("Add blog successfully");
            alert("Add blog successfully");
            formRef.current.reset();
          })
          .catch((err) => {
            toast.error("Message not sent");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    // console.log(location);
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <>
      <div className=" bg-white py-3 px-2 m-auto w-full my-4 border border-slate-200 rounded-xl shadow-lg p-2">
        <div className="text-3xl py-12 text-center ">Add New Blogs</div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 max-w-6xl m-auto"
        >
          {/* <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Author Name"
              name="name"
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <input
              type="email"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Email Address"
              name="email"
            />
          </div> */}
          <div className="col-span-2 lg:col-span-1 pt-6">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
              placeholder="Add blog title here"
              name="title"
            />
          </div>

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(event) => {
                      handleImageChange(event.target.files[0]);
                    }}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-sky-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-sky-500">
                    {uploadButtonText}
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <textarea
              cols="30"
              rows="8"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
              placeholder="Blog Description"
              name="description"
            ></textarea>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="py-3 px-6 bg-blue-700 rounded-lg text-white font-bold w-full sm:w-32"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlogs;
