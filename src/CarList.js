import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPlus } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import EditCar from './Car';
import './Prompt.css';

const CarList = ({isDarkMode}) => {
  const [showModal, setShowModal] = useState(false);
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [motorNumber, setMotorNumber] = useState('');
  const [frameNumber, setFrameNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [carKind, setCarKind] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [checkingDate, setCheckingDate] = useState('');
  const [ownerName, setOwnerName] = useState('');
   const [searchTerm, setSearchTerm] = useState('');
   const [cars, setCars] = useState([]);
 
  
 

  
 



  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      // Perform your API call here with the entered car details
      const response = await fetch(`http://transportation.somee.com/api/Car/CreateCar?Name=${carName}&Model=${carModel}&Color=${carColor}&MoterNumber=${motorNumber}&FramNumber=${frameNumber}&PlateNumber=${plateNumber}&Kind=${carKind}&RenewalDate=${renewalDate}&ExpireDate=${expireDate}&CheckingDate=${checkingDate}&OwnerName=${ownerName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: carName,
          Model: carModel,
          Color: carColor,
          MoterNumber: motorNumber,
          FramNumber: frameNumber,
          PlateNumber: plateNumber,
          Kind: carKind,
          RenewalDate: renewalDate,
          ExpireDate: expireDate,
          CheckingDate: checkingDate,
          OwnerName: ownerName,
        }),
      });

      // Handle the API response accordingly
      // ...

      // Close the modal after the API call is completed
      setShowModal(false);

      // Reset the input fields
      setCarName('');
      setCarModel('');
      setCarColor('');
      setMotorNumber('');
      setFrameNumber('');
      setPlateNumber('');
      setCarKind('');
      setRenewalDate('');
      setExpireDate('');
      setCheckingDate('');
      setOwnerName('');

      // Optionally, you can perform any other actions you want after creating the car
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    // Reset the input fields
    setCarName('');
    setCarModel('');
    // Reset other fields...
  };


   useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://transportation.somee.com/api/Car/GetAllCars');
        const data = await resp.json();
        setCars(data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const filteredCars = cars.filter(car =>
  Object.values(car).some(value =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);

   useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return (
    <div className={`content ${isDarkMode ? 'dark' : ''}`}>
      <div className="main">
        <h2>كل السيارات</h2>
        <div className="search-container">
          <div className="create-icon">
            <button className="add-car-button" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPlus}  style={{color:'white'}}/>
              Add Car
            </button>
          </div>
          <div className="search">
            <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className={`employees-list ${isDarkMode ? 'dark' : ''}`}>
            {filteredCars.map((car) => (

              <div className="employee-card" key={car.id}>
                <div className="circle">
                   <Link to={`/dashboardofme/edit-car/${car.id}`}>
                    <FontAwesomeIcon icon={faCar} className="employee-avatar" />
                  </Link>
                  </div>
               
                <div className="employee-details">
                  <h3>{car.name}</h3>
                  <p>{car.model}</p>
                  {/*<p>{car.kind}</p>*/}
                </div>
                </div>
              
            ))}
          </div>
          </div>
      </div>

   
        {/* Modal */}
  {showModal && (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Car</h3>
        <form onSubmit={handleCreate}>
          <label htmlFor="carName">Car Name:</label>
          <input type="text" id="carName" value={carName} onChange={(e) => setCarName(e.target.value)} />

          <label htmlFor="carModel">Car Model:</label>
          <input type="text" id="carModel" value={carModel} onChange={(e) => setCarModel(e.target.value)} />

          <label htmlFor="carColor">Car Color:</label>
          <input type="text" id="carColor" value={carColor} onChange={(e) => setCarColor(e.target.value)} />

          <label htmlFor="motorNumber">Motor Number:</label>
          <input type="text" id="motorNumber" value={motorNumber} onChange={(e) => setMotorNumber(e.target.value)} />

          <label htmlFor="frameNumber">Frame Number:</label>
          <input type="text" id="frameNumber" value={frameNumber} onChange={(e) => setFrameNumber(e.target.value)} />

          <label htmlFor="plateNumber">Plate Number:</label>
          <input type="text" id="plateNumber" value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />

          <label htmlFor="carKind">Car Kind:</label>
          <input type="text" id="carKind" value={carKind} onChange={(e) => setCarKind(e.target.value)} />

          <label htmlFor="renewalDate">Renewal Date:</label>
          <input type="date" id="renewalDate" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} />

          <label htmlFor="expireDate">Expire Date:</label>
          <input type="date" id="expireDate" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />

          <label htmlFor="checkingDate">Checking Date:</label>
          <input type="date" id="checkingDate" value={checkingDate} onChange={(e) => setCheckingDate(e.target.value)} />

          <label htmlFor="ownerName">Owner Name:</label>
          <input type="text" id="ownerName" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />

          <button type="submit">Create Car</button>
           <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </div>
  )}
</div>
)
}

export default CarList;
