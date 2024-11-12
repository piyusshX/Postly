import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
        <div className="bg-[#1F2833] border-t border-[#C5C6C7]">
            <footer className="w-full py-7 px-20">
                <div className="flex justify-between">
                    <div className="copyright-text text-white">
                        © 2024 Postly. All Rights Reserved.
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-white text-2xl hover:text-[#C5C6C7] transition-colors">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" className="text-white text-2xl hover:text-[#C5C6C7] transition-colors">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="text-white text-2xl hover:text-[#C5C6C7] transition-colors">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
  );
}

export default Footer;
