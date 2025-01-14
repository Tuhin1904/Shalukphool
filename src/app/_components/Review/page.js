"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const jsonData = {
  modal: {
    title: "User Feedback",
    content: [
      {
        name: "John Doe",
        comment: "Great product! I really enjoyed using it.",
        stars: 5,
      },
      {
        name: "Jane Smith",
        comment: "Good value for money. Would recommend!",
        stars: 4,
      },
      {
        name: "Samuel Lee",
        comment: "Not bad, but could use some improvements.",
        stars: 3,
      },
      {
        name: "Olivia Brown",
        comment: "Did not meet my expectations. Disappointed.",
        stars: 2,
      },
    ],
  },
};

const FeedbackCard = ({ name, comment }) => {
  return (
    <div className="whatsapp-card">
      <div className="avatar">
        <img src="./Customer1.jpg" alt="avatar" />
      </div>
      <div className="message">
        <div className="name">{name}</div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

const ReviewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle left arrow click
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : jsonData.modal.content.length - 1
    );
  };

  // Handle right arrow click
  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < jsonData.modal.content.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="review-button-container">
        <button className="review-button" onClick={handleOpenModal}>
          Reviews ★
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full h-full pt-6 sm:rounded-lg sm:w-11/12 sm:h-auto lg:w-2/3 xl:w-1/2 max-w-5xl shadow-lg ">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition duration-300 text-2xl"
              onClick={handleCloseModal}
            >
              &times; {/* Times Icon */}
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold mb-4 ms-4">Reviews</h2>
            <div className="modal-content">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
                style={{
                  backgroundImage: 'url("Men/Panjabi/1st_Image.jpg")',
                }}
              ></div>
              <h2>{jsonData.modal.title}</h2>
              <div className="review-navigation">
                <button
                  className="arrow left transition-transform duration-300 transform  hover:scale-110"
                  onClick={prevCard}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="h-6 w-6 text-gray-500 hover:text-gray-600 transition duration-300"
                  />
                </button>
                <div className="feedback-card-container ">
                  <FeedbackCard
                    name={jsonData.modal.content[currentIndex].name}
                    comment={jsonData.modal.content[currentIndex].comment}
                  />
                </div>
                <button
                  className="arrow right transition-transform duration-300 transform  hover:scale-110"
                  onClick={nextCard}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-6 w-6 text-gray-500 hover:text-gray-600 transition duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewButton;
