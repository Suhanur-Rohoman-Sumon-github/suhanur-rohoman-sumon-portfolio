import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import Title from "../../hooks/Title";
import "aos/dist/aos.css";
import AOS from "aos";
import { saveAs } from "file-saver";
import resumePDF from "../../assets/Suhanur-Rohoman-Sumon-Frontend-Developer-Resume.  (1).pdf";
import customVideo from "../../assets/2024,_6_23_45_am_(copy) (1080p).mp4"; // Add the path to your video file
import "../../pages/styel.scss";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDownload = () => {
    saveAs(resumePDF, "suhanur-rohoman-sumon-resume.pdf");
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const playButtonStyle = {
    fontSize: "4rem",
    color: "white",
    borderRadius: "100%",
    padding: "0.5rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="relative">
      <Element name="about">
        <Title title="About Me" subTitle="About Myself" />
        <div className="z-40  md:w-10/12 mx-auto my-10  ">
          <div className="hero-content flex-col lg:flex-row ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="relative w-full lg:w-1/2 "
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <video
                ref={videoRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="About Me Video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
              >
                <source src={customVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="play-button " style={playButtonStyle}>
                    ▶
                  </div>
                </div>
              )}
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="lg:ml-8 mt-8 lg:mt-0 w-full lg:w-1/2 z-10 relative"
            >
              <h1 className="text-5xl font-bold text-[#D0ABFF]">About me</h1>
              <p className="py-2 text-[#C6BDD0]">
                Hi my name is Suhanur Rohoman Sumon. A highly motivated and
                passionate Fullstack developer. I have 2 years of learning
                experience and 1 year of professional experience. Passionate
                about Building Dynamic Web Applications.
              </p>
              <button onClick={handleDownload} className="btn btn-primary">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </Element>
      <div className="absolute gradient hidden md:block   top-52 right-0"></div>
    </div>
  );
};

export default About;
