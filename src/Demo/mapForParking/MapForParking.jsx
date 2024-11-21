import React, { useState } from "react";

const ModalWin = ({ onClose, onConfirm }) => {
  return (
    <div className="flex justify-center fixed items-center inset-0 bg-black bg-opacity-50 z-50">
      <div className="w-[420px]flex items-center justify-center">
        <div className="bg-white w-[400px] p-4 rounded shadow-lg">
          <p className="text-lg font-bold mb-2">
            Вы действительно хотите забронировать парковку?
          </p>
          <p className="mb-4">
            Данная услуга стоит - <span className="text-red-500">50 сом</span>
          </p>
          <p className="mb-4">
            Вы должны успеть за 15 минут, иначе ваша бронь будет аннулировано
            без возмещение средств!
          </p>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={onClose}
            >
              Отмена
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={onConfirm}
            >
              Бронь
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 text-red-600">
            00:15
          </div>
        </div>
      </div>
    </div>
  );
};

const MapForParking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [parkingLot, setParkingLot] = useState([
    "red",
    "red",
    "green",
    "green",
    "red",
    "green",
    "green",
    "red",
    "green",
    "green",
    "green",
    "red",
    "red",
    "green",
    "green",
  ]);

  const handleSlotClick = (index) => {
    if (parkingLot[index] === "green") {
      setSelectedSlot(index);
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    if (selectedSlot !== null) {
      const updatedParkingLot = [...parkingLot];
      updatedParkingLot[selectedSlot] = "red";
      setParkingLot(updatedParkingLot);
      setSelectedSlot(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {isModalOpen && (
        <ModalWin
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
      <div className="w-[420px] flex justify-center items-center mt-20">
        <div className="flex items-center justify-center flex-col">
          <div className="flex justify-between flex-row p-4 bg-slate-600 w-[400px] h-[650px]">
            <div className="flex flex-col items-end justify-start gap-6 mt-5 w-[100px]">
              {parkingLot.slice(0, 8).map((color, index) => (
                <React.Fragment key={`left-${index}`}>
                  <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
                  <div
                    className={`w-[7px] h-[7px] ${
                      color === "green" ? "bg-green-600" : "bg-red-600"
                    } mb-[15px]`}
                    onClick={() => handleSlotClick(index)}
                    style={{
                      cursor: color === "green" ? "pointer" : "not-allowed",
                    }}
                  ></div>
                </React.Fragment>
              ))}
              <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
            </div>
            <div className="w-[2px] bg-white"></div>
            <div className="flex flex-col items-center justify-start gap-5 mt-8 w-[100px]">
              {Array(20)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`middle-${index}`}
                    className="w-[1px] h-[10px] bg-white"
                  ></div>
                ))}
            </div>

            <div className="w-[2px] bg-white"></div>
            <div className="flex flex-col items-start justify-start gap-6 mt-5 w-[100px]">
              {parkingLot.slice(7).map((color, index) => (
                <React.Fragment key={`right-${index}`}>
                  <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
                  <div
                    className={`w-[7px] h-[7px] ${
                      color === "green" ? "bg-green-600" : "bg-red-600"
                    } mt-[15px]`}
                    onClick={() => handleSlotClick(index + 7)}
                    style={{
                      cursor: color === "green" ? "pointer" : "not-allowed",
                    }}
                  ></div>
                </React.Fragment>
              ))}
              <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapForParking;
