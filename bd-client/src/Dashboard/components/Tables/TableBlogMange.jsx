import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DeleteModal from "../Modal/DeleteModal";
import UpdateModal from "../Modal/UpdateModal";
import MyDialog from "../Modal/Mydialog";
import { Link } from "react-router-dom";

const TableBlogMange = ({ blog, refetch, index }) => {
  const [axiosSecure] = useAxiosSecure();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = () => {
    axiosSecure
      .delete(`/blog/${blog?._id}`)
      .then((res) => {
        refetch();
        console.log("Delete Successfull");
        toast.error("Delete Successfull");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
    closeModal();
  };

  return (
    <>
      <tr className="border-b border-neutral-200 dark:border-white/10">
        <td className="whitespace-nowrap px-6 py-4  font-semibold text-xl">
          {index + 1}
        </td>
        <td className="whitespace-nowrap  font-semibold text-xl w-48 h-28 rounded-xl ">
          <img
            className="w-48 h-28 rounded-xl border-2 border-blue-700"
            src={blog?.image}
            alt=""
          />
        </td>
        <td className=" px-6 py-4 font-semibold  w-18">{blog?.title}</td>
        <td className=" w-[600px]  px-6 py-4 text-lg hover:text-green-600">
          {blog?.description.slice(0, 120)}....
        </td>
        <td className="whitespace-nowrap px-6 py-4  text-md">
          <Link
            to={`/dashboard/display-blogs/${blog?._id}`}
            // onClick={openModal}
            className="border border-blue-700 px-4 py-1 rounded-lg hover:bg-green-200"
          >
            Update
          </Link>
        </td>

        <td
          // onClick={() => handleDeleteBlog(blog?._id)}
          onClick={openModal}
          className="whitespace-nowrap px-6 py-4 text-2xl hover:text-red-600"
        >
          <FaDeleteLeft />
          {/* modalHandler, closeModal, isOpen, id */}
          <DeleteModal
            modalHandler={modalHandler}
            closeModal={closeModal}
            isOpen={isOpen}
            id={blog?._id}
          />
        </td>
      </tr>
    </>
  );
};

export default TableBlogMange;
