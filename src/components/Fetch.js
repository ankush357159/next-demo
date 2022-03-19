import React from "react";

const Fetch = ({ data }) => {
  console.log(data);
  return (
    <div className='bg-gray-200'>
      <h1>All Users</h1>
      {/* {users && users.map((user) => (
        <body key={user.id}>
          <table>
            <tr>
              <td>Sr.No.</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          </table>
        </body>
      ))} */}
    </div>
  );
};

export default Fetch;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { users: data },
  };
};
