import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-10">
        Contact Us
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <p className="text-lg mb-4">
          <strong>Service Area:</strong> Bikaner
        </p>

        <p className="text-lg mb-4">
          <strong>Location:</strong> Darniya Market, Nokha Road, Near GRD
          Company, Udramsar Highway (Approx 1 KM)
        </p>

        <p className="text-lg mb-4">
          <strong>Phone:</strong> +91 XXXXX XXXXX
        </p>

        <p className="text-lg mb-6">
          <strong>Email:</strong> rakuunit@gmail.com
        </p>

        <iframe
          className="w-full h-72 rounded-lg"
          src="https://maps.google.com/maps?q=Bikaner&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>

      </div>

    </div>
  );
};

export default Contact;