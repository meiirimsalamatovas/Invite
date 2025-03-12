import React, { useState } from "react";
import { db, collection, addDoc } from "./firebaseConfig";

const RSVP = () => {
  const [response, setResponse] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !response) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }

    try {
      await addDoc(collection(db, "guests"), { name, response });
      alert(`Рақмет, ${name}! Сіздің жауабыңыз сақталды.`);
      setResponse("");
      setName("");
    } catch (error) {
      console.error("Қате пайда болды:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold mb-4">Тойға келесіз бе?</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Ия/жоқ"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full border-b border-gray-400 p-2 text-center"
          required
        />
        <input
          type="text"
          placeholder="Есіміңізді жазыңыз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-gray-400 p-2 text-center mt-2"
          required
        />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md mt-2">
          Жіберу
        </button>
      </form>
    </div>
  );
};

export default RSVP;
