import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../usersApi";

function UserForm({ user, setIsEditing }) {
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueriesData(["user", user.uuid], data);
      setIsEditing(false);
      queryClient.invalidateQueries("users");
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    mutate(fields);
  };

  if (isLoading) {
    return "Saving your changes...";
  }

  return (
    <div sryle={{ paddingTop: 20 }}>
      <form onSubmit={handleSumbit}>
        <label>
          Name {""}
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 20 }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
