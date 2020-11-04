import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import Search from './Search.jsx';
import axios from 'axios';
import ParksList from './ParksList.jsx';
import ParkImage from './ParkImage.jsx';
import ModalImage from './ModalImage.jsx';

const Container = styled.div `
  width: 1100px;
  position: absolute;
  left: 75px;
  box-shadow: 5px 5px 200px 5px #888888;
  margin: 10px 0 30px 0;
`;
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    'z-index'             : '1000'
  }
};
const IntoTheWild = () => {

  const [location, setLocation] = useState('AL');
  const [parks, setParks] = useState([]);
  const [closures, setClosures] = useState([]);
  const [parksWithClosures, setParksWithClosures] = useState([]);

  const [modalImages, setModalImages] = useState([]);
  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = (images) => {
    setModalImages(images);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  useEffect(() => {
    axios({
      url: '/closures',
      method: 'get'
    })
    .then(result => {
      setClosures(result.data.data);
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: `/parks/${location}`,
    })
    .then(result => {
      setParks(result.data)
    });
  }, [location])

  useEffect(() => {
    var parksWithClosed = [];
    for (var j = 0; j < parks.length; j++) {
      var park = parks[j];
      park.closures = [];
      for (var i = 0; i < closures.length; i++) {
        if (closures[i].parkCode === park.parkCode) {
          park.closures.push(closures[i]);
        }
      }
      parksWithClosed.push(park);
    }
    setParksWithClosures(parksWithClosed);
  }, [closures, parks])

  return (
    <Container>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >

          {modalImages.map(image => <ModalImage imageUrl={image}/>)}
        </Modal>
      <Search setLocation={setLocation} />
      <ParksList parks={parksWithClosures} openModal={openModal} />
    </Container>
  );
}

export default IntoTheWild;