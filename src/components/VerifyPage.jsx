import { useParams } from "react-router-dom";

const VerifyPage = () => {
  const { id } = useParams();

  const users = JSON.parse(localStorage.getItem("registrations")) || [];
  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="bg-red-900/30 border border-red-500 p-8 rounded-xl text-center">
          <h1 className="text-3xl font-bold text-red-400 mb-4">
            ❌ INVALID QR CODE
          </h1>
          <p className="text-lg">
            This registration is not found in our records.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-3xl w-full bg-gray-900 border border-green-500 rounded-2xl p-10 shadow-2xl">

        {/* Success Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-3">
            ✅ VERIFIED SUCCESSFULLY
          </h1>
          <p className="text-lg text-gray-300">
            This participant has successfully registered for the event.
          </p>
        </div>

        {/* Participant Details */}
        <div className="grid md:grid-cols-2 gap-6 text-lg">

          <div>
            <p className="text-gray-400">Full Name</p>
            <p className="font-semibold text-white">{user.name}</p>
          </div>

          <div>
            <p className="text-gray-400">College</p>
            <p className="font-semibold text-white">{user.college}</p>
          </div>

          <div>
            <p className="text-gray-400">Department</p>
            <p className="font-semibold text-white">{user.department}</p>
          </div>

          <div>
            <p className="text-gray-400">Year</p>
            <p className="font-semibold text-white">{user.year}</p>
          </div>

        </div>

        {/* Registered Events */}
        <div className="mt-8">
          <p className="text-gray-400 mb-2">Registered Events</p>
          <div className="flex flex-wrap gap-3">
            {user.events.map((event, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-600/20 border border-green-500 rounded-lg text-green-400 font-medium"
              >
                {event}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Official Verification Page • NEUROSPARKS 2K26
        </div>

      </div>
    </div>
  );
};

export default VerifyPage;