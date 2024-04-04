import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Shared/Loader";
import TableBlogMange from "../components/Tables/TableBlogMange";
import EmptyState from "../../components/Shared/EmptyState";

const Displayblog = () => {
  const [axiosSecure] = useAxiosSecure();

  const { loading, user } = useContext(AuthContext);

  const {
    isPending,
    error,
    data: blogs = [],
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/blogs`);
      //   console.log(res.data);
      return res.data;
    },
  });
  // console.log(blogs);
  if (isPending) return <Loader />;

  return (
    <>
      {blogs && Array.isArray(blogs) && blogs.length > 0 ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        No
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Blog Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Description
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Update
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs?.map((blog, index) => (
                      <TableBlogMange
                        key={blog._id}
                        blog={blog}
                        index={index}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message={`You Didn't Add A Blog Yet !!`}
          address={`/dashboard/add-blog`}
          label={`Add Your blog`}
        />
      )}
    </>
  );
};
export default Displayblog;
