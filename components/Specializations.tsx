export default function Specializations() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-6 bg-gray-600 text-white">
            <p className="text-2xl">SPECIALIZATIONS</p>
            </div>
          <div className="p-6">
                <nav>
                    <ul className="p-6 list-disc">
                       <li>Web Development</li>
                       <li>E-Commerce Development</li>
                       <li>Art & Sketches</li>
                       <li>Designing</li>
                    </ul>
                </nav>
          </div>
        </div>
      </div>
    </>
  );
}
