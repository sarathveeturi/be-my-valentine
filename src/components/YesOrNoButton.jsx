// YesOrNoComponent.jsx

import React, { useState } from "react";
import Confetti from "react-confetti";
import "../App.css"; // Adjust the import path based on your project structure
import FoodPickerModal from "./FoodPickerModal";

function YesOrNoComponent() {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setShowModal(true);
    setShowConfetti(true); // Optionally, show confetti when Yes is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowConfetti(false);
  };

  return (
    <div className="yes-or-no-container">
      {showConfetti && <Confetti />}
      <h2 className="yes-or-no-heading"> Will you be my Valentine?</h2>
      <button
        onClick={handleYesClick}
        type="button"
        className={`btn btn-success fixed-nope-button ${showModal ? "hidden" : ""}`}
      >
        OMG!! YES
      </button>
      &nbsp; &nbsp;
      <button
        onClick={handleCloseModal}
        type="button"
        className={`btn btn-danger fixed-nope-button ${showModal ? "" : "hidden"}`}
      >
        NOPE
      </button>
      {showModal && <FoodPickerModal onClose={handleCloseModal} />}
    </div>
  );
}

export default YesOrNoComponent;
