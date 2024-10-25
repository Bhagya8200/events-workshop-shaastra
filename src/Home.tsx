import "./App.css";
import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import location from "./assets/location.png";
import moneyBag from "./assets/moneyBag.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import landingPage from "./assets/landingPage.png";

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
      <div
        style={{
          backgroundImage: `url(${landingPage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        className="overflow-y-scroll"
      >
        <div className="flex overflow-hidden flex-col md:flex-row items-center w-full">
          {/* Sidebar or Fixed Navbar */}
          <div className="w-full h-[150px] md:w-[450px] bg-[#501957] text-white flex flex-col md:flex-col z-10 md:z-1 fixed top-0 md:top-1/2 md:left-0 transform md:-translate-y-1/2 md:h-[550px] justify-center items-center px-4">
            {/* Left button */}
            <div className="flex flex-row justify-center items-center md:flex-col">
              <div className="order-1 md:order-1 border-[rgba(159,33,153,0.6)] hover:border-[#da46ff] m-2 hover:animate-scale-up pt-1 mb-2 border-4 inline-block rounded-full">
                <button onClick={subtractProgress}>
                  <img
                    src={leftArrow}
                    className="w-[50px] h-[40px]"
                    alt="Previous"
                  />
                </button>
              </div>

              {/* Right button */}
              <div className="order-3 md:order-2  border-[rgba(159,33,153,0.6)] m-2 hover:border-[#da46ff] hover:animate-scale-up pt-1 mb-2 border-4 inline-block rounded-full">
                <button onClick={addProgress}>
                  <img
                    src={rightArrow}
                    className="w-[50px] h-[40px]"
                    alt="Next"
                  />
                </button>
              </div>
              {/* Day Title */}
              <div className="order-2 text-center w-[230px] md:w-auto md:order-3 text-2xl md:text-4xl font-bold md:mt-0 mb-4">
                Day - {days[currentIndex]}
              </div>
            </div>

            {/* Progress bar */}
            <div className="order-4 md:order-4 w-full bg-[rgba(159,33,153,0.6)] h-[3px] md:w-[120px] mt-[30px] md:mt-0 md:mb-4">
              <div
                className="h-[3px] bg-[#da46ff]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Cards section */}
          <div className="flex-grow mt-[200px] md:my-20 relative z-1 md:z-10 md:-left-28 md:ml-[450px] grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center px-4 md:px-8 w-full">
            {getCardsForDay(currentIndex).map((card, index) => (
              <div
                key={index}
                className={`h-[270px] w-full max-w-[300px] md:max-w-[250px] transition-all duration-500 ${
                  isTransitioning
                    ? "animate-fade-out-left"
                    : "animate-fade-in-right"
                }`}
              >
                <div className="text-[#E5E5E5] rounded-t-xl bg-[#7A1775] p-5">
                  <div className="mb-5">
                    <p className="text-xl lg:text-lg h-[50px]">{card.title}</p>
                  </div>

                  <div className="flex my-2">
                    <img
                      src={location}
                      className="w-[20px] md:w-[30px]"
                      alt="Location"
                    />
                    <p className="text-md">{card.location}</p>
                  </div>

                  <div className="mx-1 my-3">
                    <hr className="border-[#b1abab]" />
                  </div>

                  <div className="flex items-center mt-4 md:mt-7">
                    <img
                      src={moneyBag}
                      className="w-[30px] md:w-[40px]"
                      alt="Money Bag"
                    />
                    <p className="text-xl md:text-2xl">₹{card.amount}</p>
                  </div>
                </div>

                <div className="flex h-[50px] justify-center items-center bg-[#9d1196] text-[#E5E5E5] rounded-b-xl hover:bg-[#ce1fc5] transition-colors duration-300 ease-in-out">
                  <button
                    className="text-center text-lg md:text-2xl w-full"
                    onClick={handleClick}
                  >
                    Load More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
