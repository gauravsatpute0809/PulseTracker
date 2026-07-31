function SaveProfileButton({ onSave }) {
  return (
    <div className="flex justify-end mt-8">
      <button
        onClick={onSave}
        className="
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          shadow-md
          hover:shadow-lg
          transition
        "
      >
        Save Profile
      </button>
    </div>
  );
}

export default SaveProfileButton;