import FillterUser from "@/components/FillterUser";

const Users = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await url.json();
  return (
    <>
      <h1>This is my List</h1>
      <FillterUser user={response} />

     
    </>
  );
};

export default Users;
