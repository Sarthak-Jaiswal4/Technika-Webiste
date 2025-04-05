import { useState } from "react";

const Popupform = ({onClose}) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Branch: "",
    Year: "",
    College: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true); // State to toggle the form visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      Name: "",
      Email: "",
      Branch: "",
      Year: "",
      College: "",
    });
  };

  const closeForm = () => {
    setIsFormVisible(false); // Hide the form
  };

  return (
    <>
      {isFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          {/* Modal Container */}
          <div className="flex flex-col w-[90vw] md:w-[50vw] bg-white rounded-xl shadow-2xl p-6">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center"
            >
              {/* Form Header */}
              <div className="flex justify-between items-center w-full mb-6">
                <h1 className="text-2xl font-bold text-gray-700">
                  Tech Fest Registration
                </h1>
                <button
                  type="button"
                  onClick={onClose} 
                  className="text-xl text-red-500 hover:text-red-600 font-bold transition"
                >
                  X
                </button>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    value={formData.Name}
                    onChange={(e) =>
                      setFormData({ ...formData, Name: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="Email"
                    value={formData.Email}
                    onChange={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Branch"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Branch
                  </label>
                  <input
                    type="text"
                    id="Branch"
                    value={formData.Branch}
                    onChange={(e) =>
                      setFormData({ ...formData, Branch: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your branch"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Year"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Academic Year
                  </label>
                  <input
                    type="text"
                    id="Year"
                    value={formData.Year}
                    onChange={(e) =>
                      setFormData({ ...formData, Year: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your academic year"
                    required
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="College"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="College"
                    value={formData.College}
                    onChange={(e) =>
                      setFormData({ ...formData, College: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your college name"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 w-full">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popupform;

