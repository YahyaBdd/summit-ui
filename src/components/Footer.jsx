import React from "react";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => (
  <div className="flex mt-24 justify-center	content-center">
    <p className="flex text-center gap-4 dark:text-gray-200 text-gray-700 m-20">
      © 2022 All rights reserved by
      <a
        href="https://www.linkedin.com/in/yahya-boujaddi-61aa91213/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="h-5 w-5 fill-gray-600" />
      </a>
      <a href="https://github.com/YahyaBdd" target="_blank" rel="noreferrer">
        <AiFillGithub className="h-5 w-5 fill-gray-600" />
      </a>
      <a
        href="https://stackoverflow.com/users/17551643/yahyabdd"
        target="_blank"
        rel="noreferrer"
      >
        <BsStackOverflow className="h-5 w-5 fill-gray-600" />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~0194aa2ed5e7a7f0d6"
        target="_blank"
        rel="noreferrer"
      >
        <SiUpwork className="h-5 w-5 fill-gray-600" />
      </a>
    </p>
  </div>
);

export default Footer;
