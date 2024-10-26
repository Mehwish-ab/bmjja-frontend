import React, { useState } from "react";
import "./ContactModal.css";

function ContactModal() {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* Button to trigger modal */}
      <button onClick={openModal}>Contact Form</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              <div>
                <iframe
                  src="https://bmjja.kicksite.net/bizbuilders/lead_capture_forms/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGNmXzEwMDI3In0.LYndfpGxr4OpEmk3_M0wWIWAWS27R9CTVivQ8ye_a9o"
                  width="600"
                  height="485"
                  loading="lazy"
                ></iframe>
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactModal;
