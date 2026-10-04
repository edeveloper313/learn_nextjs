"use client";
type UserT = {
  id: number;
  name: string;
  email: string;
};

import { useState } from "react";
const FillterUser = ({ user }: { user: UserT[] }) => {
  const [searchUser, setSearchUser] = useState("");
  const filterdUsers = user.filter((User) => {
    return User.name.toLocaleLowerCase().includes(searchUser.toLowerCase());
  });
  return (
    <>
      <input
        type="text"
        placeholder="Serch user"
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
        }}
      />

      {filterdUsers.map((user: UserT) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
};

export default FillterUser;
