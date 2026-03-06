import React from "react";
import { GiTowTruck } from "react-icons/gi";
import { FaRecycle, FaTools, FaShippingFast, FaUsers } from "react-icons/fa";
import Scanner from "./Scanner";

const About = () => {
  return (
    <div className="w-full bg-slate-100">

      {/* HERO SECTION */}

      <section className="bg-slate-900 text-white py-20 text-center px-6">

        <h1 className="text-5xl font-bold mb-6 text-yellow-400">
          About Raku-Unit
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Raku-Unit is a modern truck service and scrap marketplace platform
          based in Bikaner. We connect truck owners, scrap sellers and buyers
          with fast, reliable and technology powered solutions.
        </p>

      </section>


      {/* COMPANY STORY */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 leading-7 mb-4">
              Raku-Unit started with a simple idea: make truck services and
              scrap selling easier for everyone. In many cities, people find it
              difficult to sell old truck parts, metal scrap, or junk materials.
            </p>

            <p className="text-gray-700 leading-7">
              Our platform helps people connect with scrap buyers, truck repair
              services and logistics providers quickly. We aim to bring
              traditional truck and scrap businesses online using modern
              technology.
            </p>

          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg text-center">

            <GiTowTruck className="text-6xl text-yellow-500 mx-auto mb-4" />

            <p className="text-gray-600">
              Reliable Truck Services • Scrap Collection • Logistics Support
            </p>

          </div>

        </div>

      </section>


      {/* MISSION & VISION */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="bg-slate-100 p-8 rounded-xl shadow">

            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-7">
              Our mission is to simplify truck services and scrap selling
              through digital platforms. We want to help truck owners,
              businesses and individuals easily sell scrap, buy truck parts and
              access reliable repair services.
            </p>

          </div>

          <div className="bg-slate-100 p-8 rounded-xl shadow">

            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-700 leading-7">
              Our vision is to build India's largest digital platform for truck
              services, logistics support and scrap marketplace where buyers
              and sellers can connect quickly and safely.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES OVERVIEW */}

      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow">

            <GiTowTruck className="text-5xl text-yellow-500 mx-auto mb-4" />

            <h4 className="font-semibold">
              Truck Assistance
            </h4>

            <p className="text-gray-600 text-sm">
              24/7 emergency truck support and towing services.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <FaTools className="text-5xl text-blue-500 mx-auto mb-4" />

            <h4 className="font-semibold">
              Truck Repair
            </h4>

            <p className="text-gray-600 text-sm">
              Engine repair, tyre replacement and maintenance.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <FaRecycle className="text-5xl text-green-600 mx-auto mb-4" />

            <h4 className="font-semibold">
              Scrap Selling
            </h4>

            <p className="text-gray-600 text-sm">
              Sell old truck parts, metal scrap and junk materials.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <FaShippingFast className="text-5xl text-purple-500 mx-auto mb-4" />

            <h4 className="font-semibold">
              Logistics
            </h4>

            <p className="text-gray-600 text-sm">
              Fast goods transportation across cities.
            </p>

          </div>

        </div>

      </section>


      {/* COMPANY STATS */}

      <section className="py-16 bg-slate-900 text-white text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Growth
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">700+</h3>
            <p className="text-gray-300">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">120+</h3>
            <p className="text-gray-300">Truck Owners</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">300+</h3>
            <p className="text-gray-300">Scrap Deals</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-300">Support</p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Raku-Unit
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Fast truck repair and towing service
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Best price for scrap and junk materials
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Trusted by local businesses in Bikaner
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Technology powered service platform
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="py-16 bg-yellow-400 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Work With Us?
        </h2>

        <p className="mb-6">
          Join Raku-Unit today for truck services, scrap selling and logistics.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Contact Our Team
        </button>

      </section>
<Scanner/>
    </div>
  );
};

export default About;