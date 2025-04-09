import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import { TeamCarousel } from "../TeamCarousel";

function Team() {

  const teamData = [
    {
      domain:"Event",
      members:[
        {
          name: "Maniya Vasudeva",
          role: "Associate Head",
          image: "/maniya event.jpg",
        },
        {
          name: "Shubhank Gupta",
          role: "Associate Head",
          image: "/shubhankgupta.jpg",
        },
        {
          name: "ARYAN",
          role: "Head",
          image: "/aryan singh event head.jpg",
        },
        {
          name: "SUJAL",
          role: "Head",
          image: "/sujal vent head.jpg",
        },
        {
          name: "Abhishek Mishra",
          role: "Head",
          image: "/abhishek mishra joiint technical secretary.jpg",
        },
        {
          name: "Ashu Kumari",
          role: "Head",
          image: "/AshuKUmari.jpg",
        },
        {
          name: "Vishwa Rajdeep",
          role: "Head",
          image: "/vishwarajdeep.jpg",
        },
        
      ]
    },
    {
      domain:"Web Developemnt",
      members:[
        {
          name: "Sarthak Jaiswal",
          role: "Associate Head",
          image: "/me.jpg",
        },
        {
          name: "Raj Jaiswal",
          role: "Head",
          image: "/Raj Jaiswal.jpg",
        },
      ]
    },
    {
      domain:"Public Relation",
      members:[
        {
          name: "Raj Kumar Sipaliya",
          role: "Head",
          image: "/sipaliya pr.jpg",
        },
        {
          name: "Saurabh Singh",
          role: "Head",
          image: "/saurabh singh public relation.jpg",
        },
        {
          name: "Mohit Kumar",
          role: "Head",
          image: "/IMG_20250301_162132 - MOHIT KUMAR BTech.jpg",
        },
        {
          name: "Yashasvi",
          role: "Head",
          Domain :"PR",
          image: "/yashasvi.jpg",
        },
      ]
    },
    {
      domain:"Content",
      members:[
        {
          name: "Subhi",
          role: "Associate Head",
          image: "/subhi content.jpg",
        },
        {
          name: "Lakshya Singht Rathorep",
          role: "Head",
          image: "/lakshya singh rathore content head.jpg",
        },
        {
          name: "Prakhar Dixit",
          role: "Head",
          image: "/prakhardixit.jpg",
        },
      ]
    },
    {
      domain:"Photography",
      members:[
        {
          name: "Ishan Raj",
          role: "Head",
          image: "/ishan photograp[hy head.jpg",
        },
      ]
    },
    {
      domain:"Logistic",
      members:[
        {
          name: "SACHIN Kumar",
          role: "Head",
          image: "/sachin kumar logitic head.jpg",
        },
      ]
    },
    {
      domain:"Hospitality",
      members:[
        {
          name: "Mayank Kausha",
          role: "Associate Head",
          image: "/mayank kaushal hospitall.jpg",
        },
      ]
    },
    {
      domain:"Publicity",
      members:[
        {
          name: "Anshul Gupta",
          role: "Head",
          Domain :"PR",
          image: "/anshul gupta publicity head.jpg",
        },
        {
          name: "Nitin kumar",
          role: "Associate Head",
          image: "/nitin ME.jpg",
        },
        {
          name: "Ved Sahu",
          role: "Associate Head",
          image: "/ved sahu.jpg",
        },
        {
          name: "Ayush Kumar Singh",
          role: "Associate Head",
          image: "/Ayush kumar singh.jpg",
        },
        {
          name: "Adarsh Tripathi",
          role: "Associate Head",
          image: "/adarsh tripathi.jpg",
        },
        {
          name: "Abdullah Alvi",
          role: "Associate Head",
          image: "/abdullah.jpg",
        },
      ]
    },
    {
      domain:"Design",
      members:[
        {
          name: "Prashant Dwivedi",
          role: "Head",
          image: "/prashan kumar diwedi  design head.jpg",
        },
      ]
    },
    {
      domain:"Marketing",
      members:[
        {
          name: "Swastik Soni",
          role: "Head",
          image: "/swatic soni marketing head.jpg",
        },
        {
          name: "Ayush Singh",
          role: "Head",
          image: "/Ayush kumar singh.jpg",
        },
      ]
    },

  ];

  const extra=[
    {
      domain: "Web Development",
      members: [
        {
          name: "Ambar Gupta",
          role: "Associate Head",
          image: "https://drive.google.com/uc?export=view&id=1r72xr-gwLkLuM_irTx4IG3D3x_1ydZqQ",
        },
        {
          name: "Harshit Omer",
          role: "Joint Managment Secretary",
          image: "https://drive.google.com/open?id=1zPuJ0Sb-gvUlNO2bA6KAqDHLWtjzCDrW",
        },
        {
          name: "Prakhar Dixit",
          role: "Head",
          image: "https://drive.google.com/open?id=1umC82SpHAwuvgKAMKB6yd4E56ujwhtZf",
        },
        {
          name: "Bhupendra",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1GitHelfogVw9PP_UwluquzKOCdxbzaXD",
        },
        {
          name: "Abdullah Alvi",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1NrwdE7B3_7I4KkGN-oO3Uct1o8E3MvSA",
        },
        {
          name: "Ruhan Ansari",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1BW0mC0Njg84h8V4QUCWaFyI0bk0cIKE-",
        },
        {
          name: "Nitin Prajapati",
          role: "Head",
          image: "https://drive.google.com/open?id=1D57t65NhaxaRljVjQF1Kg0Lg9qNwPMtD",
        },
        {
          name: "Shivansh Tiwari",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1ZoppHITmM_mOOIvquf7HfS9mUt6fGONV",
        },
        {
          name: "Swapnil Upadhyay",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1UASWR5LSBMyHaZs5g22Go1Is2QFJNIHv",
        },
        {
          name: "ASHU KUMARI",
          role: "Head",
          Domain :"Event",
          image: "https://drive.google.com/open?id=1CKOoDXsw8lDtG0BR38Is2benqcN_efH8",
        },
      ],
    },
    {
      domain: "Design",
      members: [
        {
          name: "Dona Srivastava",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1zxx3XO7mBmBuUEXfb9tCtHHbozdWewcl",
        },
        {
          name: "Anshika",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1dBL9t99eOBcexVN653yYgVTBnSF2trvE",
        },
        {
          name: "MAYANK",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=14OijBGfItdZkeXItrFa01mlge2UW81Z7",
        },

        {
          name: "Chayan Upadhyay",
          role: "Joint Management Secretary",
          image: "https://drive.google.com/open?id=1auyW23ccA-BhAHBFRUyVXfXBNzcDzyz6",
        },
        {
          name: "Nitesh",
          role: "Head",
          image: "https://drive.google.com/open?id=1dxPJNQXvYzqXskRDKG1x-9Gi2NIN7vu6",
        },
      ],
    },
    {
      domain: "Management",
      members: [
        {
          name: "Prakhar yadav",
          role: "Student Secretary",
          image: "/prakhar yadav secetray 2.jpg",
        },
        {
          name: "Aditya arya",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1k9zq2Q0A4gvs81qB2E7kYxDAFgy1Utbm",
        },
        {
          name: "Vedansh Gupta",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1q65u5O6c7xk-eExd5JAqd-AidPqeWk2H",
        },
        {
          name: "Shivam",
          role: "Head",
          image: "https://drive.google.com/open?id=17U_KiXSCC5TWe000tyMdP9qrq3CymttR",
        },
        {
          name: "Vishwa Raj",
          role: "Head",
          image: "https://drive.google.com/open?id=1rViVq0ExMWnjkVOagVJ7ZDi5MzdP2RLn",
        },
        {
          name: "Sonali Dubey",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1YdImtyrHa16URnpOy3Fc0sk8LNFkMbZ7",
        },
        {
          name: "Paridhi goyal",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1rxq0UPQjRL-sghLk91VlsNHqHFNLvHvn",
        },

        {
          name: "Mayank Kaushal",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1VVwv-olDE0SMp4gz0E5yqHp_P7SPqntB",
        },
        {
          name: "Krishan Murari Gupta",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=14cwDSeUqbSZvivYTGT166I0D5nP41XD6",
        },
        {
          name: "ADITYA YADAV",
          role: "Head",
          image: "https://drive.google.com/open?id=1YX_KuVEM6Rn-OWRCWUARU9woy_pUrufJ",
        },
        {
          name: "Arnav Pandey",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1TUsFntz_aSc-tJkII2_CywXrEMqyUu3I",
        },
        {
          name: "Abhishek Mishra",
          role: "Joint Secretary",
          image: "/abhishek mishra joiint technical secretary.jpg",
        },
        {
          name: "Divyansh yadav",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1vqQ76Zpi6quZaqb_rGyN7H8vHkpBhe1H",
        },
        {
          name: "Akshat Srivastava",
          role: "Associate Head",
          image: "https://drive.google.com/open?id=1ECllLdOKJvCd7OlhYFJoKb2cCIrzyLvO",
        },
        {
          name: "Vishwajeet Yadav",
          Domain :"Event Head",
          image: "https://drive.google.com/open?id=1ZbIp8xfOsj6xZy-HFTBfgYA_5Yo7OoVS/view?usp=drivesdk",
        },
        {
          name: "Shreyash Gupta",
          role: "Joint Secretary",
          image: "/shreyash gupta joijnt technicxal secretary.jpg",
        },
        {
          name: "Sumit Raghav",
          role: "PR Head",
          image: "https://drive.google.com/open?id=1ZfOErVT9mfJRnCCbGdya7C7r58CvvWGp/view?usp=drivesdk",
        },
      ],
    },
  ]

  return (
    <div className="w-full min-h-screen text-white"
    style={{
      backgroundImage: `url('/ChatGPT Image Apr 4, 2025, 01_41_45 AM.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
  }}>
        <Header/>
      <div className="w-full h-full flex flex-col justify-center items-center noise1 py-20 px-8 md:px-16">
        <NavBar Page={"Team"}/>
        <h1 className="font-[main-font] font-semibold text-[17vw] pb-5 md:text-[10vw] tracking-wide text-center leading-[5rem]">
          Team
        </h1>
        <div className="container mx-auto px-4 py-8">
          {/* Chief Patron Section */}
          <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
            Student Secretary
          </h2>
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                  <img
                    src="/vishvajeet.jpg"
                    alt="Prof. Samsher"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="role-label">Chief Patron</div>
                <h3 className="text-xl text-black font-semibold mt-2">
                  Vishwajeet Yadav
                </h3>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
            Student Secretary
          </h2>
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                  <img
                    src="/prakhar yadav secetray 2.jpg"
                    alt="Prof. Samsher"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="role-label">Chief Patron</div>
                <h3 className="text-xl text-black font-semibold mt-2">
                Prakhar Yadav
                </h3>
              </div>
            </div>
          </div>

          {/* Patron Section */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="flex flex-col ">
            <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
              Joint Secretary (Managment)
            </h2>
              <div className="flex gap-6 flex-wrap">
                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="/chayan - CHAYAN UPADHYAY BTech.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                    Chayan upadhaya
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="/secMangamnet.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                    Harshit omer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap">
              <h2 className="text-2xl font-bold text-center mb-12 text-[#A6CFD5]">
              Joint Secretary (Technical)
              </h2>
              <div className="flex gap-6 flex-wrap">
                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="/dineshdixitsec.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-cover"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      Dinesh Dixit
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 w-72 text-center transform hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center">
                    <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-gray-200 mb-4 relative">
                      <img
                        src="/shreyash gupta joijnt technicxal secretary.jpg"
                        alt="Mrs. Anju Verma"
                        className="w-full absolute top-[5%] h-full object-cove"
                      />
                    </div>
                    <div className="role-label">Patron</div>
                    <h3 className="text-xl text-black font-semibold mt-2">
                    Shreyash Gupta
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
      <div className="w-full flex flex-wrap justify-center py-12 text-white">
        {teamData.map((domainData, index) => (
          <div className="md:w-1/3 w-full p-2" key={index}>
            <TeamCarousel
              domain={domainData.domain}
              members={domainData.members}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Team;
