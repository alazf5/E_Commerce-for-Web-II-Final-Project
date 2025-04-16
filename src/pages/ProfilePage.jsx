import React, { useState } from "react";
import { useUser } from "../Context/UserContext";

export default function ProfilePage() {
  const { user, login } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    login({ name, email, role: user.role }); // update user info
    alert("Profile updated!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow space-y-4 text-gray-500">
      <h1 className="text-2xl font-bold">Edit Profile</h1>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
}
