import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";

function Team() {
  const departmentOrder = [
    "Student Secretary ",
    "Joint Secretary (Management)",
    "Joint Secretary (Technical)",
    "Events",
    "Web Development",
    "Social Media",
    "Content",
    "Marketing",
    "Publicity",
    "Design",
    "Public Relations",
    "Hospitality",
    "Logistics",
    "Photography",
    "Security",
  ];

  // const uniqueDepartments = Array.from(new Set(teamData.map((member) => member.Department)))
  //   .sort((a, b) => {
  //     const indexOfA = departmentOrder.indexOf(a);
  //     const indexOfB = departmentOrder.indexOf(b);
  //     return indexOfA - indexOfB;
  //   });
  // const departmentsToMap = showThreeDepartments ? uniqueDepartments.slice(0, 3) : uniqueDepartments;

  // return (
  //   <div className={style.main}>
  //     <NavBar Page={Team}/>
  //     <Header/>
  //     <div className={style.top}>team</div>
  //     <div className={style.bottom}>
  //       {loading ? (
  //         <Loader />
  //       ) : (departmentsToMap.map((department, index) => (
  //         <div className={style.bt} key={index}>
  //           <div>
  //             {<Text prop={department === "Security" ? "Discipline & Protocol" : department} isStudentSec={department === 'Student Secretary '} />}
  //           </div>
  //           <div className={style.caraCont}>
  //             <TeamCardsEffect teamMembers={teamData.filter((member) => member.Department === department)} />
  //           </div>
  //         </div>
  //       )))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-full min-h-screen text-white bg-black">
      <div className="w-full h-full flex flex-col justify-center items-center noise1 py-20 px-8 md:px-16">
        <h1 className="font-[Cookie] text-[17vw] pb-5 md:text-[10vw] tracking-wide text-center leading-[5rem]">
          
        </h1>
        <div className="container mx-auto px-4 py-8">
          {/* Chief Patron Section */}
          <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
            Student Secretary
          </h2>
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                  <img
                    src="college image/vc.jpeg"
                    alt="Prof. Samsher"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="role-label">Chief Patron</div>
                <h3 className="text-xl text-black font-semibold mt-2">
                  Prof. Samsher
                </h3>
                <p className="text-gray-600">Hon'ble Vice Chancellor</p>
                <p className="text-gray-600">HBTU Kanpur</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
            Student Secretary
          </h2>
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                  <img
                    src="college image/vc.jpeg"
                    alt="Prof. Samsher"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="role-label">Chief Patron</div>
                <h3 className="text-xl text-black font-semibold mt-2">
                  Prof. Samsher
                </h3>
                <p className="text-gray-600">Hon'ble Vice Chancellor</p>
                <p className="text-gray-600">HBTU Kanpur</p>
              </div>
            </div>
          </div>

          {/* Patron Section */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="flex flex-col ">
            <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
              Joint Secretary (Managment)
            </h2>
              <div className="flex gap-6">
                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="prof img/Biswanath chattopadhyay.jpeg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-contain"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      Shri. Biswanath Chattopadhyay
                    </h3>
                    <p className="text-gray-600">
                      CEO, IVL Dhunseri Petrochemicals
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="prof img/Anoop kumar.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-contain"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      Shri. Anoop Trivedi
                    </h3>
                    <p className="text-gray-600">MD, Tata BlueScope Steel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
              Joint Secretary (Technical)
              </h2>
              <div className="flex gap-6">
                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="prof img/Biswanath chattopadhyay.jpeg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-contain"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      Shri. Biswanath Chattopadhyay
                    </h3>
                    <p className="text-gray-600">
                      CEO, IVL Dhunseri Petrochemicals
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="prof img/Anoop kumar.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-contain"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      Shri. Anoop Trivedi
                    </h3>
                    <p className="text-gray-600">MD, Tata BlueScope Steel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
