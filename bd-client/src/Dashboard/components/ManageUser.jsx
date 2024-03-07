import React, { useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    // getHostsRooms(user?.email)
    axiosSecure
      .get(`/register`)
      .then((data) => {
        console.log(data);
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(userData);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const data = await fetchUserData();
  //         setUserData(data);
  //       } catch (error) {
  //         // Handle error
  //         console.error("Error fetching user data in UserDataComponent:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(userData);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Make Admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
