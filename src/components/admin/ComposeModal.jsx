import { useState } from "react";

export default function ComposeModal({ isOpen, onClose, onSend }) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    onSend(message);
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Compose Message</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
          rows="4"
          placeholder="Type your message..."
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
            Cancel
          </button>
          <button onClick={handleSend} className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}