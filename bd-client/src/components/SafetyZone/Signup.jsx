import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner4 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import admin from "../../assets/admin/admin.jpg";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Signup = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const {
    setLoading,
    createUser,

    updateUserProfile,
    loading,
    user,
  } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    try {
      setLoading(true);
      // Create user with email and password
      const loggedUserCredential = await createUser(email, password);

      // Use loggedUserCredential to get user
      const loggedUser = loggedUserCredential.user;
      // console.log(loggedUser);
      // Update user profile with name and photo
      await updateUserProfile(name, photo); // Await updateUserProfile

      // Save the user to the database or perform any other actions here
      alert(`Sign up successful`);

      const currentUser = {
        email: loggedUser?.email,
        // Add other properties of user if needed
      };

      await axiosSecure
        .put(`/users/${loggedUser?.email}`, currentUser)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          toast.error("Error Found");
        });

      navigate(`/admin/login`);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="xl:lg:md:flex">
        <div className="flex flex-col w-3/12 px-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-4 text-center">
            <h1 className="my-2 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to BD SOLUTION IT</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            {/* Form inputs */}
            <div className="space-y-4">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              {/* Photo input */}
              <div>
                <label htmlFor="photo" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Enter Your photo Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email-input"
                  required
                  placeholder="Enter Your Email Here"
                  autoComplete="email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              {/* Password input */}
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  autoComplete="current-password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <ImSpinner4 size={24} className="m-auto animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          {/* Google sign-in button */}

          {/* Link to login page */}
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/admin/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>

        <div className=" w-9/12  text-center xl:lg:md:text-5xl font-bold  bg-blue-300 h-[600px] pt-64">
          <h1>Paradigmitsolutions</h1>
        </div>
      </div>
    </>
  );
};

export default Signup;
