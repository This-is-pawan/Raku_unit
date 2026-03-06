import React from "react";

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-white p-10">

      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Truck Service</h2>
          <p>
            Fast and reliable truck service for transporting goods and scrap
            materials around Bikaner.
          </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Scrap Collection</h2>
          <p>
            We buy old garbage, metal scrap, plastic waste, and unused
            materials from homes and businesses.
          </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Online Booking</h2>
          <p>
            Book junk pickup online and our truck will reach your location
            quickly.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Services;