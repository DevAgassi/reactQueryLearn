import React from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";

function Users({setUserId}) {
  const { data, isLoading, isError, error } = useQuery("users", api.getUsers,{
    retry: false,
  });

  if (isLoading) return "Loading users...";

  if(isError) return `Error ${error.name} users...`;
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.uuid}>
            {user.name}  <button onClick={()=> setUserId(user.uuid)}>View User</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
