import { useState } from "react";
import toast from "react-hot-toast";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading, signup};
};

export default UseSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("please fill in all the fields.");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be at least 6 characters");
    return false;
  }
  return true;
}
