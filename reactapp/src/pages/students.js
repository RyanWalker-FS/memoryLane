import React, { useState, useEffect } from "react";
import Home from "./home";
import "../App.css";
import { Link } from "react-router-dom";
function Students() {
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8000`
      : process.env.REACT_APP_BASE_URL;
  let ignore = false;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [className, setClass] = useState("");

  const getStudents = async () => {
    try {
      console.log("Fetching data from API");
      await fetch(`${BASE_URL}/students`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data fetched:", data);
          setStudents(data);
        });
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "unexpected error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!ignore) {
      console.log("Fetching data on mount");
      getStudents();
    }
    return () => {
      ignore = true;
    };
  }, []);

  const handleSubmit = async (e) => {
    console.log("Submitting form");
    e.preventDefault();
    const student = { name, className };
    console.log("student:", student);
    try {
      console.log("Sending data to API");
      const response = await fetch(`${BASE_URL}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      console.log("API response:", response);
      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Error sending data:", response.status);
      }
      getStudents(); // fetch the updated data from the API
      setName("");
      setClass("");
    } catch (err) {
      console.error("Error sending data to API:", err);
    }
  };

  return (
    <div>
      <Link to="/home" element={<Home />}>
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClass(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student._id}>{student.name}</li>
          ))}
        </ul>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Students;
