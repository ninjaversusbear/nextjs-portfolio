export default function CertificateandTrainings() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-6 bg-gray-600 text-white">
            <p className="text-2xl">TRAINING</p>
            <br />
              <nav className="p-6">
                <ul className="list-disc">
                  <li>
                    Professional Training On Web Design
                    <nav>
                      <ul className="list-decimal px-6">
                        <li>BroadWay Infosys</li>
                        <li>February, 2021 ( 3 Months )</li>
                      </ul>
                    </nav>
                  </li>
                  <li>C/C++
                        <nav>
                            <ul className="list-decimal px-6">
                                <li>BroadWay Infosys</li>
                                <li>February, 2021 ( 3 Months )</li>
                            </ul>
                        </nav>
                    </li>
                  <li>
                    MERN Stack Development
                    <nav>
                      <ul className="list-decimal px-6">
                        <li>BroadWay Infosys</li>
                        <li>February, 2023 ( 3 Months )</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    Php With Laravel
                    <nav>
                      <ul className="list-decimal px-6">
                        <li>BroadWay Infosys</li>
                        <li>February, 2023 ( 3 Months )</li>
                      </ul>
                    </nav>
                  </li>
                </ul>
              </nav>
          </div>
          <div className="justify-start p-6">
            <br />
            <p className="text-2xl">
              <b>CERTIFICATES</b>
            </p>
            <nav className="p-6">
              <ul className="list-disc">
                <li><p><img src="images/professionalwebdesign.jpg" alt="" /></p></li>
                <li><img src="images/C.jpg" alt="" /></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
