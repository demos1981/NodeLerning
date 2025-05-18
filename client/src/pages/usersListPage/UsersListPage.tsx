import React from "react";
import { UsersList } from "components";

export const UsersListPage: React.FC = () => {
  return (
    <>
      <h1>Панель адміністратора</h1>

      <UsersList />
    </>
  );
};
