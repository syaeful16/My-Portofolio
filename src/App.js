import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative">
      <svg className="absolute top-0 right-0 w-[100%] md:w-[50%]" viewBox="0 0 1161 474" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0604 0C19.4651 14.086 -1.93358 31.7945 0.9996 53.5C10.9996 127.5 107 299.5 207 275.5C259.961 262.789 330.031 219.506 390.918 181.895C444.997 148.49 491.832 119.559 513 120.5C558 122.5 728.5 162 742 208.5C747.151 226.243 744.076 250.246 740.886 275.149C735.716 315.511 730.243 358.236 759 380.5C803.748 415.144 907.302 426.173 956.481 431.41C958.406 431.615 960.248 431.812 962 432C975.824 433.486 988.588 440.143 1003.13 447.727C1035.9 464.818 1077.69 486.617 1161 464.551V0H52.0604Z" fill="url(#paint0_linear_340_30)"/>
        <defs>
        <linearGradient id="paint0_linear_340_30" x1="1139" y1="-8.50011" x2="317" y2="514.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5994FB"/>
        <stop offset="1" stop-color="#3461AF"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute left-0 top-[95vh] w-[16%]" viewBox="0 0 291 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1038.03V4.82894C89.6157 -5.17784 184.646 -2.47372 226 61C269.87 128.335 192.349 142.976 121.133 156.427C52.7406 169.344 -9.83699 181.163 46.5 237.5C74.8571 265.857 112.244 298.106 149.214 329.995C262.173 427.431 371.245 521.513 207 491C82.4306 467.858 71.4901 638.504 61.3913 796.024C54.181 908.487 47.3998 1014.26 0 1038.03Z" fill="url(#paint0_linear_354_32)"/>
        <defs>
        <linearGradient id="paint0_linear_354_32" x1="-99.5" y1="535.5" x2="1054.5" y2="955" gradientUnits="userSpaceOnUse">
        <stop stop-color="#670BFF"/>
        <stop offset="1" stop-color="#670BFF" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>

      <div className="backdrop-blur-[200px]">
        <Navbar/>
        <Cover/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
