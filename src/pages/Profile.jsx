import { useEffect, useState } from "react";
import api from "../api/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/api/profile")
      .then(res => setProfile(res.data))
      .catch(() => alert("Failed to load profile"));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
      <div>
        <h2>Profile</h2>
        <p><b>Email:</b> {profile.email}</p>
        <p><b>DSA:</b> {profile.dsaCompleted}/{profile.dsaTotal}</p>
        <p><b>Mock Score:</b> {profile.mockScore}</p>
        <p><b>Core Status:</b> {profile.coreStatus}</p>
      </div>
  );
}
