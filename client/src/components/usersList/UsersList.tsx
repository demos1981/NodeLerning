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
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {" "}
            {/* Припускаємо, що у користувача є поле id */}
            <strong>{user.name}</strong> ({user.email}) - {user.role}
          </li>
        ))}
      </ul>
    </>
  );
};
