import { useRef, useState, useEffect } from "react";
import api from "../services/api";

function ProfileImageUpload() {
  const fileInput = useRef(null);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.user.profile_image) {
        setImage(
          `http://127.0.0.1:5000/uploads/${res.data.user.profile_image}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = () => {
    fileInput.current.click();
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      await api.post("/profile/upload-image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      fetchProfile();

      alert("Profile image updated successfully.");

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Upload failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">

      <div
        onClick={handleSelect}
        className="w-28 h-28 rounded-full overflow-hidden bg-orange-500 mx-auto cursor-pointer"
      >
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-white font-bold">
            G
          </div>
        )}
      </div>

      <input
        ref={fileInput}
        type="file"
        hidden
        accept="image/*"
        onChange={handleUpload}
      />

      <button
        onClick={handleSelect}
        disabled={loading}
        className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl"
      >
        {loading ? "Uploading..." : "Upload Photo"}
      </button>

    </div>
  );
}

export default ProfileImageUpload;