import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../inputs/Input";
import axios from "axios";

interface ChangePasswordModalProps {
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  onClose,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "oldPassword") setOldPassword(value);
    if (id === "newPassword") setNewPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    try {
      await axios.put(
        "/user/change-password",
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      onClose();
    } catch (error) {
      setError("Failed to change password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-8 z-50">
      <Input
        id="oldPassword"
        label="Old Password"
        type="password"
        value={oldPassword}
        onChange={handleChange}
      />
      <Input
        id="newPassword"
        label="New Password"
        type="password"
        value={newPassword}
        onChange={handleChange}
        error={
          error ? "New password and confirm password do not match" : undefined
        }
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        error={
          error ? "New password and confirm password do not match" : undefined
        }
      />
      {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-rose-500 text-white px-4 py-2 rounded-lg"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordModal;
