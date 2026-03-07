import { useEffect, useState } from "react";
import { get_users } from "../api/users";

interface User {
  id: number;
  email: string;
  role: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // temporary fake data until API is connected
    const fetchUsers = async () => {
      try {
        const data = await get_users();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
    // setUsers([
    //   { id: 1, email: "admin@example.com", role: "Admin" },
    //   { id: 2, email: "manager@example.com", role: "Manager" },
    //   { id: 3, email: "user@example.com", role: "User" },
    // ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">Users</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>

                <td className="p-3 flex gap-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>

                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
