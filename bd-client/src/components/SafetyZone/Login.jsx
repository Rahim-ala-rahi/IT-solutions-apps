import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useContext, useRef } from "react";

import { TbFidgetSpinner } from "react-icons/tb";
import admin from "../../assets/admin/admin.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { loading, setLoading, signIn, resetPassword, identity } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation();
  const emailRef = useRef();

  // const from = location?.state?.pathname || "/";
  //handle emailPasswordLogin
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        if (identity == "admin") {
          navigate(`/dashboard/manage_user`);
          alert(`Admin is Login`);
        } else {
          navigate(`/admin/login`);
          alert(`Not an Admin !!!`);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  //Handle Resset Password
  const handleReset = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        setLoading(false);
        toast.success(`Please check email that you have find the reset link`);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="xl:lg:md:flex w-full ">
        <div className="flex flex-col h-[600px]   rounded-md sm:p-10 bg-gray-100 text-gray-900 w-3/12">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email-input"
                  required
                  placeholder="Enter Your Email Here"
                  autoComplete="email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
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

            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner size={24} className="m-auto animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              onClick={handleReset}
              className="text-xs hover:underline hover:text-rose-500 text-gray-400"
            >
              Forgot password?
            </button>
          </div>

          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
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

export default Login;
