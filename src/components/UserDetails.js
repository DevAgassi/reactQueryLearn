import { useState } from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";
import UserForm from "./UserForm";

function UserDetails({ userId }) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });
  if (!userId) return "Select User";

  if (isLoading) return "Loading...";

  return (
    <div>
      {isFetching && "Background Feetching..."}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing ? (
        <UserForm user={{uuid: user.uuid, name: user.name}} setIsEditing={setIsEditing} />
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.roles}</p>
        </>
      )}
    </div>
  );
}

export default UserDetails;
