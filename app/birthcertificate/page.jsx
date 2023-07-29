"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "@/components/Navbar";
import { CgClose, CgMenuLeft } from "react-icons/cg";

const HindiLabel = ({ hindi, english }) => (
  <label className="text-sm font-bold text-gray-800">
    {hindi} / {english}
  </label>
);
const BirthCertificateForm = () => {
  const [isSubmiting , setIsSubmiting] = useState(false)
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    adharNo: "",
    gender: "",
    dob: "",
    placeOfBirth: "",
    fathersName: "",
    fathersAdhar: "",
    mothersName: "",
    mothersAdhar: "",
    addressOfBirth: "",
    permanentAddress: "",
    dateOfRegistration: "",
    remark: "",
    hospitalOrGramPanchayat: "",
  });

  // Handle form submission

  // Handle form field changes
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    setIsSubmiting(true)
    e.preventDefault();

    // Replace with your EmailJS service ID and template ID
    const serviceID = "service_njfbsu4";
    const templateID = "template_rmmxwit";
    const publicKey = "D-3nw_HoYu3RYBiKM";

    // Prepare the email template parameters with form data
    const templateParams = {
      ...formData,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("Email sent successfully!", response);
        setIsSubmiting(false)
        // You can add a success message or redirect to a "Thank You" page here
      },
      (error) => {
        console.error("Failed to send email:", error);
        // You can add an error message here if needed
      }
    );
  };

  return (
    <main className="bg-gray-50">
    <Navbar/>
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li>
              <label htmlFor="my-drawer" className="text-4xl">
                <CgClose color="white"/>
              </label>
            </li>
            {/* Sidebar content here */}
            <li>
              <a href="/">Home</a>
            </li>
           
          </ul>
        </div>
      </div>
    <div className="max-w-lg mx-auto mt-16 text-black">
      <h1 className="text-4xl font-bold text-center mb-4">Birth Certificate</h1>
      <form onSubmit={sendEmail} className="grid grid-cols-2 gap-4 ">
        {/* Name */}
        <div className="mb-4">
          <HindiLabel hindi="नाम" english="Name" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Adhar No. */}
        <div className="mb-4">
          <HindiLabel hindi="आधार नंबर" english="Adhar No." />
          <input
            type="number"
            name="adharNo"
            value={formData.adharNo}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <HindiLabel hindi="लिंग" english="Gender" />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <HindiLabel hindi="जन्म की तारीख" english="Date of Birth" />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Place of Birth */}
        <div className="mb-4">
          <HindiLabel hindi="जन्म स्थान" english="Place of Birth" />
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Father's Name */}
        <div className="mb-4">
          <HindiLabel hindi="पिता का नाम" english="Father's Name" />
          <input
            type="text"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Father's Adhar No. */}
        <div className="mb-4">
          <HindiLabel hindi="पिता का आधार नंबर" english="Father's Adhar No." />
          <input
            type="number"
            name="fathersAdhar"
            value={formData.fathersAdhar}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
            />
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <HindiLabel hindi="माता का नाम" english="Mother's Name" />
          <input
            type="text"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Mother's Adhar No. */}
        <div className="mb-4">
          <HindiLabel hindi="माता का आधार नंबर" english="Mother's Adhar No." />
          <input
            type="number"
            name="mothersAdhar"
            value={formData.mothersAdhar}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Address at Time of Birth */}
        <div className="mb-4">
          <HindiLabel
            hindi="जन्म के समय पर पता"
            english="Address at Time of Birth"
          />
          <textarea
            name="addressOfBirth"
            value={formData.addressOfBirth}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Permanent Address of Parent */}
        <div className="mb-4">
          <HindiLabel
            hindi="अभिभावक का स्थायी पता"
            english="Permanent Address of Parent"
            />
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
            />
        </div>

        {/* Date of Registration */}
        <div className="mb-4">
          <HindiLabel hindi="पंजीकरण की तारीख" english="Date of Registration" />
          <input
            type="date"
            name="dateOfRegistration"
            value={formData.dateOfRegistration}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
            />
        </div>

        {/* Remarks (if any) */}
        <div className="mb-4">
          <HindiLabel hindi="टिप्पणी (यदि कोई हो)" english="Remark (if any)" />
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        {/* Hospital / Gram Panchayat */}
        <div className="mb-4">
          <HindiLabel
            hindi="अस्पताल / ग्राम पंचायत / नगर पंचायत"
            english="Hospital / Gram Panchayat"
          />
          <input
            type="text"
            name="hospitalOrGramPanchayat"
            value={formData.hospitalOrGramPanchayat}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-gray-50 border-black"
          />
        </div>

        <div className="col-span-2">
        <button
            type="submit"
            disabled={isSubmiting} // Disable the button while submitting
            className="w-full px-4 py-2 mt-4 text-white bg-gray-900 rounded hover:bg-gray-800 mb-4"
          >
            {isSubmiting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
            </main>
  );
};

export default BirthCertificateForm;
