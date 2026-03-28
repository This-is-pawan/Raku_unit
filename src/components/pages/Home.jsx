import React from "react";
import { Link } from "react-router-dom";
import { GiTowTruck } from "react-icons/gi";
import { FaTools, FaShippingFast, FaRecycle, FaMapMarkerAlt } from "react-icons/fa";
const Home = () => {
  const trucks = [
    { name: "Tata 407 Gold", price: "₹10 Lakh" },
    { name: "Mahindra Blazo X", price: "₹28 Lakh" },
    { name: "Ashok Leyland Dost", price: "₹9 Lakh" },
    { name: "Eicher Pro 2049", price: "₹12 Lakh" }
  ];

  const parts = [
    "Truck Tyres",
    "Engine Parts",
    "Brake System",
    "Truck Cabin Parts",
    "Battery",
    "Gear System"
  ];

  const junkItems = [
    "Old Truck Engine",
    "Used Tyres",
    "Broken Cabin Parts",
    "Old Metal Scrap",
    "Truck Battery Scrap"
  ];

  const locations = [
    "Darniya Market, Nokha Road, Near GRD Company, Udramsar Highway (Approx 1 KM)",
    "Bharat Mala Road Service Center",
    "Bikaner Transport Nagar",
    "Highway Truck Repair Center"
  ];

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
          {/* LEFT SIDE */}
          <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">

            <h1 className="text-4xl font-bold mb-4">
              Reliable Truck Services
            </h1>

            <p className="mb-4 text-gray-300">
              Logistics and transportation powered by
              <span className="text-yellow-400 font-semibold"> Raku-Unit</span>.
            </p>

            <p className="mb-6 text-gray-400">
              Truck Buy • Parts Marketplace • Scrap Selling • Service Centers
            </p>

            <Link to="/services">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
                Explore Services
              </button>
            </Link>

          </div>

          {/* CONTACT FORM */}

          <div className="p-10 flex items-center justify-center bg-gray-50">

            <div className="w-full max-w-sm">

              <h2 className="text-2xl font-bold mb-6 text-center">
                Contact Us
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 rounded-lg border"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full mb-4 p-3 rounded-lg border"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 rounded-lg border"
              />

              <button className="w-full bg-black text-white p-3 rounded-lg">
                Submit Request
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* COMPANY STATS */}

      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Platform Growth
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center">

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-yellow-500">745+</h3>
            <p className="text-gray-600">Registered Users</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-500">120+</h3>
            <p className="text-gray-600">Truck Owners</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-green-600">300+</h3>
            <p className="text-gray-600">Scrap Deals</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-purple-600">24/7</h3>
            <p className="text-gray-600">Service Support</p>
          </div>

        </div>

      </section>

      {/* CUSTOMER REVIEWS */}

      <section className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              "Very fast truck service. My goods were delivered safely.
              Highly recommended!"
            </p>
            <h4 className="font-semibold">Ramesh Kumar</h4>
            <p className="text-yellow-500">★★★★★</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              "I sold my old truck parts easily through Raku-Unit.
              Great marketplace."
            </p>
            <h4 className="font-semibold">Amit Sharma</h4>
            <p className="text-yellow-500">★★★★★</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              "Best scrap buying service in Bikaner. Good price for old metal."
            </p>
            <h4 className="font-semibold">Sandeep Singh</h4>
            <p className="text-yellow-500">★★★★★</p>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <GiTowTruck className="text-5xl mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">Truck Assistance</h3>
            <p className="text-gray-600">24/7 emergency towing.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaTools className="text-5xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Repair Services</h3>
            <p className="text-gray-600">Engine & tyre maintenance.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaShippingFast className="text-5xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Logistics</h3>
            <p className="text-gray-600">Secure transportation.</p>
          </div>

        </div>

      </section>

      {/* BUY NEW TRUCKS */}

      <section className="py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Buy New Trucks
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

          {trucks.map((truck, index) => (
            <div key={index} className="border p-6 rounded-xl shadow">

              <GiTowTruck className="text-4xl text-yellow-500 mb-3" />

              <h3 className="font-semibold">{truck.name}</h3>

              <p className="text-gray-600">{truck.price}</p>

              <button className="mt-3 bg-black text-white px-4 py-2 rounded">
                Buy Now
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* PARTS MARKETPLACE */}

      <section className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Truck Parts Marketplace
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {parts.map((part, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-xl text-center">

              <FaTools className="text-4xl mx-auto text-blue-500 mb-3" />

              <h3>{part}</h3>

            </div>
          ))}

        </div>

      </section>

      {/* SCRAP SELL */}

      <section className="py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Sell Old Trucks & Scrap
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {junkItems.map((item, index) => (
            <div key={index} className="border p-6 rounded-xl shadow text-center">

              <FaRecycle className="text-4xl mx-auto text-green-600 mb-3" />

              <h3>{item}</h3>

              <button className="mt-3 bg-black text-white px-4 py-2 rounded">
                Sell Now
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICE LOCATIONS */}

      <section className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Service Centers in Bikaner
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div>

            {locations.map((loc, index) => (
              <div key={index} className="flex items-center mb-4">

                <FaMapMarkerAlt className="text-red-500 mr-3" />

                <p>{loc}</p>

              </div>
            ))}

          </div>

          <div className="w-full h-[350px] rounded-xl overflow-hidden">

            <iframe
              title="Bikaner Map"
              src="https://www.google.com/maps?q=Bikaner%20Rajasthan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="py-16 bg-slate-900 text-center text-white">

        <h2 className="text-3xl font-bold mb-4">
          Need Truck Service?
        </h2>

        <p className="mb-6 text-gray-300">
          Contact Raku-Unit for logistics, truck repair, parts and scrap selling.
        </p>

        <Link to="/contact">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </Link>

      </section>

    </div>
  );
};

export default Home;
