import React from "react";
import { useGetUsersQuery } from "app/store/api/authApi";
import { User } from "types/userTypes";

export const UsersList: React.FC = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
  console.log(data);
  const users = data?.users ?? [];
  // Додано перевірку на завантаження та помилку
  // Додано перевірку на завантаження та помилку
  if (isLoading) {
    return <div>Завантаження користувачів...</div>;
  }

  if (isError) {
    // Можна додати більш детальне відображення помилки
    return <div>Помилка завантаження користувачів: {error?.toString()}</div>;
  }

  // Додано перевірку, чи users є масивом
  if (!users || users.length === 0) {
    return <div>Користувачів не знайдено.</div>;
  }

  return (
    <>
      <div className="flex   justify-center mt-7">
        <div className="flex  max-w-7xl justify-center">
          <h2 className="flex ml-2 mb-4 min-w-52 max-h-16  rounded-md  justify-center items-center bg-base-darkGreen">
            Список користувачів
          </h2>
          <ul className="flex flex-row flex-wrap">
            {users.map((user: User) => (
              <li key={user.id}>
                <div className="flex flex-col  min-w-48  mb-4 ml-4 mr-4">
                  <span className="flex bg-base-darkGreen mb-2 justify-center">
                    Customers id:{user.id}
                  </span>
                  <span className="border-2 rounded-sm border-base-darkGreen mb-2 ">
                    name:
                    <b>{user.name}</b>
                  </span>
                  <span className="border-2 rounded-sm border-base-darkGreen mb-2 ">
                    email:
                    <b>{user.email}</b>
                  </span>
                  <span className="border-2 rounded-sm border-base-darkGreen mb-2 ">
                    role:
                    <b>{user.role}</b>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
