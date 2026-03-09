import { useEffect, useState } from "react";
import { get_users, delete_user, update_user } from "../api/users";

interface User {
  id: string;
  email: string;
  role: string;
  role_id?: string;
  is_active?: boolean;
}

interface UserUpdateForm {
  email: string;
  role_id: string;
  is_active: boolean;
}

export default function Users() {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [formData, setFormData] = useState<UserUpdateForm>({
    email: "",
    role_id: "",
    is_active: true,
  });

  const handleEditClick = (user: User) => {
    setEditingUser(user);

    setFormData({
      email: user.email,
      role_id: user.role_id ?? "",
      is_active: user.is_active ?? true,
    });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async () => {
    if (!editingUser) return;

    try {
      await update_user(editingUser.id, formData);

      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u)),
      );

      setEditingUser(null);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const [users, setUsers] = useState<User[]>([]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const data = await delete_user(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      console.log(data);
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

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
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(user.id.toString())}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editingUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white p-6 rounded-lg shadow w-96">
              <h2 className="text-lg font-semibold mb-4">Edit User</h2>

              <div className="space-y-3">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                />

                <input
                  name="role_id"
                  value={formData.role_id}
                  onChange={handleChange}
                  placeholder="Role ID"
                  className="w-full border p-2 rounded"
                />

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                  />
                  Active
                </label>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>

                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
