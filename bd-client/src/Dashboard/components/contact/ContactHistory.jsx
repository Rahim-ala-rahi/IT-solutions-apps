import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import TableMangeConatacts from "../Tables/TableMangeConatacts";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Shared/Loader";
import EmptyState from "../../../components/Shared/EmptyState";

const ContactHistory = () => {
  const [axiosSecure] = useAxiosSecure();

  const { loading, user } = useContext(AuthContext);

  const {
    isPending,
    error,
    data: contacts = [],
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/contacts`);
      //   console.log(res.data);
      return res.data;
    },
  });
  // console.log(contacts);
  if (isPending) return <Loader />;

  return (
    <>
      {contacts && Array.isArray(contacts) && contacts.length > 0 ? (
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
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Message
                      </th>
                      {/* <th scope="col" className="px-6 py-4">
                      Delete
                    </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts?.map((contact, index) => (
                      <TableMangeConatacts
                        key={contact._id}
                        contact={contact}
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
          message={`Client or user didn't add a message yet !!`}
          // address={`/dashboard/add-blog`}
          // label={`Add Your blog`}
        />
      )}
    </>
  );
};

export default ContactHistory;
