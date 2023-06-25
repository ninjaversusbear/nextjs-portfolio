export default function Experience() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-6 bg-gray-600 text-white">
            <p className="text-2xl">SKILLS</p>
            <br />
            <p>
              MERN Stack, JavaScript, Php, NodeJs, Python, MONGODB, MySQL,
              TypeScript, TailWind CSS, HTML, CSS, BootStrap, Kali-Linux,
              Creative-Thinking, Art & Sketches.{" "}
            </p>
          </div>
          <div className="justify-start p-6">
            <p className="text-2xl">WORK EXPERIENCE</p>
            <br />
            <p className="text-2xl"><b>Frontend Web Developer</b></p>
            <nav className="p-6">
                <ul className="list-disc">
                    <li>January, 2022 - Februrary, 2023</li>
                    <li>Horizon International</li>
                    <li>Lainchaur, Kathmandu, 44600</li>
                    <li>Worked as a Frontend Web-Developer to create different websites as per the requirements of the client</li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
