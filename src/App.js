import logo from './logo_european_qualifiers.png';
import './App.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { DataMatch } from "./datamatches";

function App() {

  const bgfull = {
    background: "#8e0308",
  };

  const bgmatch = {
    background: "#DADDE2",
    color: "#8e0308",
  }

  const bgmatchv1 = {
    background: "#3c4651",
    color: "#f2f2f2",
  }
  
  const LogoUEFA = {
    color: "#f2f2f2",
  }

  return (
    <>
    
    <div style={bgfull} className="w-full h-full flex justify-center items-center">

      <div className="flex flex-col">

        <div className="flex flex-col justify-center items-center w-full h-full py-6">
          <div className="py-6">
            <img src={logo} alt="European qualifiers" className="w-36 h-full" />
          </div>
          <div className="py-6">
            <span style={LogoUEFA} className="text-3xl font-black w-full text-center">
              European qualifiers
            </span>
          </div>
        </div>

        {DataMatch.map((data, key) => {
        return (
        <div className="flex flex-row items-center relative w-full h-full py-7">

          <div style={bgmatch} className="rounded-bl-xl p-1 w-64 relative shadow-xl">
            <div className="text-center font-bold">
              {data.match1}
            </div>
            <div className="bg-gray-100 z-10 p-1 rounded-full w-14 h-14 absolute -top-3 right-3 ">
              <span className={data.matchFlag1}></span>
            </div>
            <div className={data.matchFlagWin}></div>
          </div>

          <div style={bgmatchv1} className="bg-yellow-200 p-1 w-20 relative shadow-xl">
            <div className="text-center text-base">
              {data.matchNumber}
            </div>
          </div>

          <div style={bgmatch} className="rounded-br-xl p-1 w-64 relative shadow-xl">
            <div className="text-center font-bold">
              {data.match2}
            </div>
            <div className="bg-gray-100 p-1 rounded-full w-14 h-14 absolute -top-3 left-3 ">
              <span className={data.matchFlag2}></span>
            </div>
            <div className={data.matchFlagLose}></div>
          </div>

        </div>
        );
        })}

        <div className="flex flex-col justify-center items-center w-full h-full py-6">
          <div className="py-9">
            <p className="text-sm text-white">
              &copy; All rights reserved by 
              <a href="https://github.com/sebb8" className="text-blue-100 hover:text-red-200"> github.com/sebb8</a>
            </p>    
          </div>
        </div>

      </div>

    </div>
    </>
  );
}

export default App;
