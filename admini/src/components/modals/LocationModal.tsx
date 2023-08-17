import { ToastContainer, toast } from "react-toastify";
import { baseURL } from "../../baseURL";
import axios from "axios";
import { useState } from "react";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const LocationModal = ({ setOpenModal }: Props) => {


  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    

    e.preventDefault();
    if (!location) {
      toast.error("Please enter value first");
      return;
    }
    try {
      await axios.post(`${baseURL}/location`, { name: location });
      setOpenModal(false);
      toast.success("location added");
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };

  return (
    <div className="modal-overlay z-9999 flex items-center justify-center">
      <div
        tabIndex={-1}
        className=" p-4 overflow-x-hidden overflow-y-auto md:inset-0   w-full max-w-md max-h-full"
      >
        <ToastContainer />

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={()=>setOpenModal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add Location
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="e.g Kenya"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Location
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
