import React, { useState } from 'react';
import Modal from 'react-modal';

const YouTubePlayer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Play Video</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close</button>
        <div>
          <iframe
            title="YouTube Video"
            width="1200"
            height="500"
            src="https://www.youtube.com/embed/F5lS0LXeChU"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default YouTubePlayer;
