import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/user/users/${id}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Profile</h1>
      {userData && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <strong>ID:</strong> {userData.id}
            </p>
            <p className="card-text">
              <strong>Name:</strong> {userData.name}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {userData.email}
            </p>
            <p className="card-text">
              <strong>Gender:</strong> {userData.gender}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
