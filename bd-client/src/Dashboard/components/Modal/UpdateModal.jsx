import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UpdateModal = ({ modalHandler, closeModal, isOpen, id }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {/* Focusable element */}
              <button className="invisible absolute -top-10" aria-hidden="true">
                Focus Trap
              </button>

              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Are you sure you want to update?
              </Dialog.Title>

              <hr className="mt-4" />

              <form className="mt-4">
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
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image:
                  </label>
                  <input
                    onChange={(event) => {
                      handleImageChange(event.target.files[0]);
                    }}
                    type="file"
                    id="image"
                    className="hidden"
                    name="image"
                    accept="image/*"
                  />
                  <label
                    htmlFor="image"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
                  >
                    Add Image
                  </label>
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
                  ></textarea>
                </div>

                <div className="flex justify-around">
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => modalHandler(id)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onClick={closeModal}
                  >
                    No
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
