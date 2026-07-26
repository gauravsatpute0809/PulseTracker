import { useRef } from "react";
import api from "../services/api";

function ImportExcelButton({ onImportSuccess }) {
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post(
        "/products/import",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

      if (onImportSuccess) {
        onImportSuccess();
      }

      e.target.value = "";
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Import failed."
      );
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Import Excel
      </button>

      <input
        type="file"
        accept=".xlsx,.xls"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
}

export default ImportExcelButton;