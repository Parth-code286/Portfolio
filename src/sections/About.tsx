import React, { useState, useRef } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('ramnandwalkar2005@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <a
        ref={downloadLinkRef}
        href="/Your_Name_Resume.pdf"
        download="Your_Name_Resume.pdf"
        className="hidden"
        aria-hidden="true"
      >
        Download Resume
      </a>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm a Web Developer</p>
              <p className="grid-subtext">
                I’m passionate about building creative, user-focused web applications using the latest frontend
                and backend technologies. My focus lies in clean code, great UI/UX, and scalable design.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with technologies like React.js, Node.js, Express.js, and MongoDB, along with design tools and
                frameworks that help create responsive and interactive experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 19.0760, lng: 72.8777, text: "Location", color: 'white', size: 15 },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Open to collaboration and remote opportunities
              </p>
              <p className="grid-subtext">
                I’m comfortable working across different time zones and enjoy collaborating with global teams to build
                impactful digital solutions.
              </p>

              <a
                href="/Your_Name_Resume.pdf"
                download="Your_Name_Resume.pdf"
                className="
                  w-full mt-10
                  inline-flex items-center justify-center
                  px-8 py-4
                  text-lg font-semibold text-white
                  bg-black
                  rounded-2xl
                  shadow-[0_0_10px_rgba(0,0,0,0.4)]
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:brightness-110
                "
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love turning ideas into real-world applications. Every project I build deepens my curiosity and drives
                me to explore more efficient and creative solutions through code.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div
                className="copy-container flex items-center gap-2 cursor-pointer"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="w-5 h-5"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  ramnandwalkar2005@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;