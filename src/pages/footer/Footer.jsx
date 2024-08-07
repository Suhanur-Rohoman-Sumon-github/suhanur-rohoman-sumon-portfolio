import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const emojiSVG = `
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
      
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(12, 8, 51, 1)" offset="0%"></stop><stop stop-color="rgba(12, 8, 51, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,343L26.7,285.8C53.3,229,107,114,160,81.7C213.3,49,267,98,320,122.5C373.3,147,427,147,480,130.7C533.3,114,587,82,640,57.2C693.3,33,747,16,800,40.8C853.3,65,907,131,960,147C1013.3,163,1067,131,1120,122.5C1173.3,114,1227,131,1280,155.2C1333.3,180,1387,212,1440,228.7C1493.3,245,1547,245,1600,261.3C1653.3,278,1707,310,1760,326.7C1813.3,343,1867,343,1920,326.7C1973.3,310,2027,278,2080,245C2133.3,212,2187,180,2240,163.3C2293.3,147,2347,147,2400,187.8C2453.3,229,2507,310,2560,318.5C2613.3,327,2667,261,2720,245C2773.3,229,2827,261,2880,236.8C2933.3,212,2987,131,3040,122.5C3093.3,114,3147,180,3200,245C3253.3,310,3307,376,3360,334.8C3413.3,294,3467,147,3520,106.2C3573.3,65,3627,131,3680,196C3733.3,261,3787,327,3813,359.3L3840,392L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg>
    
    </svg>
  `;

  // const mediaImage = "https://i.ibb.co/z2QnSQg/wave.png";
  const footerText = "text-lg text-gray-300 tracking-wide mb-5";
  const footerHead = "text-xl font-bold mb-5";
  const footerLinks = "flex flex-col space-y-3 text-[17px]";

  const footerStyle = {
    // backgroundImage: `url(${mediaImage})`,
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
      emojiSVG
    )}")`,
  };
  return (
    <div
      style={footerStyle}
      className="relative bg-no-repeat bg-cover bg-center h-[900px] md:h-[500px] lg:h-[450px] xl:h-[580px] gap-10 flex justify-center mt-14"
    >
      <footer className="absolute text-white bottom-0  lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-[100%] mx-auto">
          {/* Address */}
          <div>
            <p className={footerHead}>Address:</p>
            <p className={footerText}>
              Madargonj <br /> Jamalpur
              <br /> Maymenshing
            </p>
            <p className={footerText}>sumonsuhanurrohoman@gmail.com</p>
            <p className={footerText}>+880-1955704863</p>
          </div>

          {/* Visit Us */}
          <div className="md:flex justify-center">
            <div>
              <div className={"flex flex-col space-y-3 text-[17px]"}>
                <Link
                  href="home"
                  to="home"
                  className="link no-underline hover:underline text-white w-fit"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  to="about"
                  className="link no-underline hover:underline text-white w-fit"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  href="projects"
                  to="projects"
                  className="link no-underline hover:underline text-white w-fit"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
                <Link
                  href="skills"
                  to="Skills"
                  className="link no-underline hover:underline text-white w-fit"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
                <Link
                  href="contact"
                  to="contact"
                  className="link no-underline hover:underline text-white w-fit"
                  smooth={true}
                  duration={500}
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-5 md:mt-0">
            <div className={footerLinks}>
              <div className="flex items-center gap-x-3 text-3xl mt-5 mb-11 ">
                <span
                  data-testid="facebook-icon"
                  className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer"
                >
                  <a
                    href="https://www.facebook.com/suhanurrohoman.sumon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[17px] text-blue-700 hover:text-blue-500"
                  >
                    <FaFacebookF />
                  </a>
                </span>

                <span
                  data-testid="linkedin-icon"
                  className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer"
                >
                  <a
                    href="https://www.linkedin.com/in/suhanur-rohoman-sumon-5b5266237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[17px] text-blue-700 hover:text-blue-500"
                  >
                    <FaLinkedin />
                  </a>
                </span>
                <span
                  data-testid="linkedin-icon"
                  className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer"
                >
                  <a
                    href="https://github.com/Suhanur-Rohoman-Sumon-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[17px] text-black hover:text-blue-500"
                  >
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
