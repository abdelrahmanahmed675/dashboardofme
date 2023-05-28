import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './CarEdit.css';

const EditCar = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
    const [carId, setCarId] = useState('');
  const [careName, setCarName] = useState('');
  const [careModel, setCarModel] = useState('');
  const [careColor, setCarColor] = useState('');
  const [motorNumber, setMotorNumber] = useState('');
  const [frameNumber, setFrameNumber] = useState('');
  const [platNumber, setPlateNumber] = useState('');
  const [careKind, setCarKind] = useState('');
  const [renewDate, setRenewalDate] = useState('');
  const [expirDate, setExpireDate] = useState('');
  const [checkDate, setCheckingDate] = useState('');
  const [ownName, setOwnerName] = useState('');

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://transportation.somee.com/api/Car/GetCarById?id=${id}`);
        const data = await response.json();
        setCarDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleUpdateCar = async () => {
    try {
      const resp =  await fetch(`http://transportation.somee.com/api/Car/UpdateCarById?Id=${carId}&Name=${careName}&Model=${careModel}&Color=${careColor}&MoterNumber=${motorNumber}&FramNumber=${frameNumber}&PlateNumber=${platNumber}&Kind=${careKind}&RenewalDate=${renewDate}&ExpireDate=${expirDate}&CheckingDate=${checkDate}&OwnerName=${ownName}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Id:carId,
          Name: careName,
          Model: careModel,
          Color: careColor,
          MoterNumber: motorNumber,
          FramNumber: frameNumber,
          PlateNumber: platNumber,
          Kind: careKind,
          RenewalDate: renewDate,
          ExpireDate: expirDate,
          CheckingDate: checkDate,
          OwnerName: ownName,
        }),
      });

      // Handle the API response accordingly
      // ...
      if(resp.ok){
        window.location.href= '/dashboardofme/Car';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCar = async () => {
    try {
      const response = await fetch(`http://transportation.somee.com/api/Car/DeleteCarById?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok){
        alert('هتمسحها ولا')
         window.location.href = '/dashboardofme/Car'
      }

      // Handle the API response accordingly
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  // setCarId(value);
  // setCarKind(value);
  // setCarName(value);
  // setCarModel(value);
  // setCarColor(value);
  // setMotorNumber(value);
  // setFrameNumber(value);
  // setOwnerName(value);
  // setExpireDate(value);
  // setCheckingDate(value);
  // setRenewalDate(value);
  // setPlateNumber(value);



  if (name === "renewalDate" || name === "expireDate" || name === "checkingDate") {
    const dateValue = value ? new Date(value).toISOString() : ""; // Convert date to ISO string format
    setCarDetails((prevState) => ({
      result: {
        ...prevState.result,
        [name]: dateValue,
      },
    }));
  } else {
    setCarDetails((prevState) => ({
      result: {
        ...prevState.result,
        [name]: value,
      },
    }));
  }
};

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  const {  name, model, color, moterNumber, framNumber, plateNumber, kind, renewalDate, expireDate, checkingDate, ownerName } = carDetails.result;

  return (
    <div className='contInfo'>
      <div className='head'>
        <h3>Edit Car Details</h3>
      </div>
     
      <div className="car-info">
        <div className='col1'>
        <div>
            <label htmlFor="id">Carid:</label> <input type="text" id="id" name="id" defaultValue={id} onChange={(e)=>setCarId(e.target.value)} />
          </div>
          <div>
            <label htmlFor="name">Name:</label> <input type="text" id="name" name="name" defaultValue={name} onChange={(e)=>setCarName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="model">Model:</label> <input type="text" id="model" name="model" defaultValue={model} onChange={(e)=>setCarModel(e.target.value)} />
          </div>
          <div>
            <label htmlFor="color">Color:</label> <input type="text" id="color" name="color" defaultValue={color} onChange={(e)=>setCarColor(e.target.value)} />
          </div>
          <div>
            <label htmlFor="motorNumber">Motor Number:</label> <input type="text" id="motorNumber" name="motorNumber" defaultValue={moterNumber} onChange={(e)=>setMotorNumber(e.target.value)} />
          </div>
          <div>
            <label htmlFor="frameNumber">Frame Number:</label> <input type="text" id="frameNumber" name="frameNumber" defaultValue={framNumber} onChange={(e)=>setFrameNumber(e.target.value)} />
          </div>
        </div>
          
        <div className='col2'>
          <div>
            <label htmlFor="plateNumber">Plate Number:</label> <input type="text" id="plateNumber" name="plateNumber" defaultValue={plateNumber} onChange={(e)=>setPlateNumber(e.target.value)} />
          </div>
          <div>
            <label htmlFor="kind">Kind:</label> <input type="text" id="kind" name="kind" defaultValue={kind} onChange={(e)=>setCarKind(e.target.value)} />
          </div>
          <div>
            <label htmlFor="renewalDate">Renewal Date:</label> <input type="date" id="renewalDate" name="renewalDate" defaultValue={renewalDate} onChange={(e)=>setRenewalDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="expireDate">Expire Date:</label> <input type="date" id="expireDate" name="expireDate" defaultValue={expireDate} onChange={(e)=>setExpireDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="checkingDate">Checking Date:</label> <input type="date" id="checkingDate" name="checkingDate" defaultValue={checkingDate} onChange={(e)=>setCheckingDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="ownerName">Owner Name:</label> <input type="text" id="ownerName" name="ownerName" defaultValue={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />
          </div>
        </div>
      </div>
    
      <div className='row'>
        <button onClick={handleUpdateCar} style={{ marginTop: '20px' }}>Update Car</button>
        <button onClick={handleDeleteCar} style={{ marginTop: '10px' }}>Delete Car</button>
      </div>
    </div>
  );
};

export default EditCar;
