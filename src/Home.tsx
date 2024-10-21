import "./App.css";
import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import location from "./assets/location.png";
import moneyBag from "./assets/moneyBag.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const days = ["00", "01", "02", "03", "04"];
  const navigate = useNavigate();

  const cards = {
    day1: [
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
      {
        title: "Online Scavenger Hunt",
        amount: "2500",
        location: "Online Event",
      },
    ],
    day2: [
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
      {
        title: "Picture Probe",
        amount: "4500",
        location: "IIT Madras",
      },
    ],
    day3: [
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
      {
        title: "Flipkart Grid Challenge 5.0-Robotics",
        amount: "225000",
        location: "IIT Madras",
      },
    ],
    day4: [
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
      {
        title: "Airbus Flight Challenge",
        amount: "50000",
        location: "IIT Madras",
      },
    ],
    day5: [
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
      {
        title: "Chanakyaneeti",
        amount: "20000",
        location: "Unstop",
      },
    ],
  };
  const [progress, setProgress] = useState<number>(20);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const addProgress = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
      setProgress((prev) => (prev === 100 ? 20 : prev + 20));
      setIsTransitioning(false);
    }, 300);
  };

  const subtractProgress = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
      setProgress((prev) => (prev === 20 ? 100 : prev - 20));
      setIsTransitioning(false);
    }, 300);
  };

  const getCardsForDay = (dayindex: number) => {
    switch (dayindex) {
      case 0:
        return cards.day1;
      case 1:
        return cards.day2;
      case 2:
        return cards.day3;
      case 3:
        return cards.day4;
      case 4:
        return cards.day5;
      default:
        return [];
    }
  };

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="flex items-center h-[100vh] bg-white">
        <div className="bg-[#501957] h-[550px] w-[450px] text-white flex justify-center items-center flex-col">
          <div className="border-[rgba(159,33,153,0.6)] hover:border-[#da46ff] hover:animate-scale-up pt-1 mb-2 border-4 inline-block rounded-full">
            <button onClick={addProgress}>
              <img src={rightArrow} className="w-[50px] h-[40px]" />
            </button>
          </div>
          <div className="border-[rgba(159,33,153,0.6)] hover:border-[#da46ff] hover:animate-scale-up border-4 pt-1 mb-16 inline-block rounded-full">
            <button onClick={subtractProgress}>
              <img src={leftArrow} className="w-[50px] h-[40px]" />
            </button>
          </div>
          <div className="text-6xl font-bold mb-4">{days[currentIndex]}</div>
          <div className="h-[3px] w-[120px] bg-[rgba(159,33,153,0.6)] ">
            <div
              className="h-[3px] bg-[#da46ff]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        {/* cards */}
        <div className="grid gap-16 grid-cols-3 relative -left-14">
          <>
            {getCardsForDay(currentIndex).map((card, index) => {
              return (
                <div
                  className={`h-[270px] w-[300px] transition-all duration-500 ${
                    isTransitioning
                      ? "animate-fade-out-left"
                      : "animate-fade-in-right"
                  }`}
                  key={index}
                >
                  <div className="text-[#E5E5E5] rounded-t-xl bg-[#7A1775] p-5">
                    <div className="">
                      <div className="mb-5">
                        <p className="text-xl h-[50px]">{card.title}</p>
                      </div>

                      <div className="flex my-2">
                        <img src={location} className="w-[30px]" />
                        <p className="text-md">{card.location}</p>
                      </div>

                      <div className="mx-1 my-3">
                        <hr className="border-[#b1abab]" />
                      </div>

                      <div className="flex items-center mt-7">
                        <img src={moneyBag} className="w-[40px]" />
                        <p className="text-2xl">₹{card.amount}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex h-[50px] justify-center items-center bg-[#9d1196] text-[#E5E5E5]  rounded-b-xl hover:bg-[#ce1fc5] transition-colors duration-300 ease-in-out">
                    <button
                      className="text-center text-2xl w-full "
                      onClick={handleClick}
                    >
                      Load More
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </>
  );
}

export default Home;
