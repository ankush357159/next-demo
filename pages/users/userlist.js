import React from "react";

const Fetch = ({ users }) => {
  // console.log(users);
  return (
    <>
    <h2 className="text-center text-2xl mb-5 mt-3">User List</h2>
        <table className="ml-auto mr-auto">
          <thead>
            <tr className='bg-red-100'>
              <th className='border border-slate-300 text-left'>Sr.No.</th>
              <th className='border border-slate-300 text-left'>Name</th>
              <th className='border border-slate-300 text-left'>Username</th>
              <th className='border border-slate-300 text-left'>Phone No.</th>
              <th className='border border-slate-300 text-left'>Email</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td className='border border-slate-300 text-center'>
                    {user.id}
                  </td>
                  <td className='border border-slate-300'>{user.name}</td>
                  <td className='border border-slate-300'>{user.username}</td>
                  <td className='border border-slate-300'>{user.phone}</td>
                  <td className='border border-slate-300'>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
    </>
  );
};

export default Fetch;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data },
  };
};
