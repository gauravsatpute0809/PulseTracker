function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">

      <div className="w-28 h-28 rounded-full bg-orange-500 text-white flex items-center justify-center text-5xl font-bold mx-auto">
        G
      </div>

      <h2 className="text-3xl font-bold mt-5">
        Gaurav
      </h2>

      <p className="text-gray-500">
        Administrator
      </p>

      <span className="inline-block mt-4 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
        ● Active
      </span>

    </div>
  );
}

export default ProfileCard;