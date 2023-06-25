export default function Education() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-6 bg-gray-600 text-white">
            <p className="text-2xl">EDUCATION</p>
            <br />
            <p>
              Currently Ongoing
            </p>
          </div>
          <div className="justify-start p-6">
            <br />
            <p className="text-2xl"><b>(Under Graduate (Bachelor)) - Bcs.IT</b></p>
            <nav className="p-6">
                <ul className="list-disc">
                    <li>Internation School Of Management & Technology (ISMT)</li>
                    <li>University Of Sunderland</li>
                    <li>United Kingdom</li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
