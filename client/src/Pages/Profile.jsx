import { useState } from "react";
import { User, Save } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Profile() {

  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      name,
      email,
    });

    alert("Profile updated successfully.");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">

      <div className="bg-white rounded-2xl shadow-lg border p-8">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="text-blue-600" size={30} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              My Profile
            </h1>

            <p className="text-gray-500">
              Manage your account information.
            </p>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>
            <label className="font-semibold">
              Full Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700"
          >
            <Save size={19} />
            Save Changes
          </button>

        </form>

      </div>

    </section>
  );
}

export default Profile;