import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-500">
        About Raku-Unit
      </h1>

      <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-8 text-center">
        Raku-Unit is a local service company based in Bikaner that provides
        truck services, scrap collection, and junk removal. We help people and
        businesses sell old garbage, metal, and unused materials easily.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p>
            Our mission is to make scrap selling easy for everyone. We collect
            junk from homes, shops, factories, and construction sites.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
          <p>
            To build the best junk and truck service platform in Bikaner and
            across India using modern technology and fast services.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;