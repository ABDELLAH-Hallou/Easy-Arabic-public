import React from 'react'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">

              <Link className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to={"/"}>
                <img
                  src="/images/logo.png"
                  alt="alt placeholder"
                  className="w-8 h-8 -mt-1 inline mx-auto"
                />
                EA
              </Link>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to={"/"} className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
