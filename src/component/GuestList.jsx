import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "./firebaseConfig";

const GuestList = () => {
  const [guestList, setGuestList] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchGuests = async () => {
    const querySnapshot = await getDocs(collection(db, "guests"));
    const guests = querySnapshot.docs.map(doc => doc.data());
    setGuestList(guests);
  };

  const handleLogin = () => {
    if (password === "your_secret_password") {
      setIsAuthenticated(true);
      fetchGuests();
    } else {
      alert("Қате пароль!");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {!isAuthenticated ? (
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Қонақтар тізімі</h2>
          <input
            type="password"
            placeholder="Құпия сөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-gray-400 p-2 text-center"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
          >
            Кіру
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-2">Қонақтар тізімі</h2>
          <ul className="border border-gray-300 rounded-md p-2">
            {guestList.map((guest, index) => (
              <li key={index} className="p-1 border-b last:border-none">
                {guest.name}: {guest.response}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GuestList;
