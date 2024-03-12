import React, { useState } from "react";
import Confetti from "react-confetti";
import Modal from "react-modal";

function FoodPickerModal() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setShowConfetti(false);
    setModalIsOpen(false);
  };

  return (
    <div>
      {showConfetti && <Confetti />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
      >
        <h2>
          Yayy!! Thank you for being my Valentine! Happy Valentines day......
        </h2>
        <p>
          Let's go on a Coffee Date. Choose a{" "}
          <a
            href="https://www.google.com/maps/search/Restaurants/@45.9624447,-66.6470455,16z/data=!3m1!4b1!4m8!2m7!3m6!1sRestaurants!2sFredericton,+NB,+Canada!3s0x4ca4220ba498fb2b:0xe7de2f297a415db4!4m2!1d-66.6431151!2d45.9635895?entry=ttu"
            role="button"
            className="btn btn-secondary popover-test"
          >
            Restaurant
          </a>
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default FoodPickerModal;
