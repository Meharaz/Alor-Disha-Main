import React from "react";




const DonationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-serif mt-10 py-12 px-4 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Make a Donation
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* bKash Card */}


   
            <div className="bg-white w-full md:w-[30%] rounded-2xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-pink-600 mb-4">bKash</h2>
                <p className="text-gray-700 mb-2">
                  <strong>Personal Number:</strong> 01630-080140
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Merchant Number:</strong> 01841-006642
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>bKash App Link:</strong>{" "}
                  <a
                    href="https://www.bkash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline"
                  >
                    https://www.bkash.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  After sending money, please keep a screenshot or transaction ID for confirmation.
                </p>
              </div>

              {/* bKash Button */}
              <button className="mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Donate via bKash
              </button>
            </div>



        {/* Bank Details Card */}
        <div className="bg-white w-full md:w-[30%] rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Bank Details</h2>
            <p className="text-gray-700 mb-2">
              <strong>Bank Name:</strong> UCB BANK PLC.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Account Name:</strong> ALOR DISHA FOUNDATION
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Account Number:</strong> 7272141000000078
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Branch:</strong> Sadarghat branch
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Routing Number:</strong> 245156735
            </p>
            <p className="text-sm text-gray-500 mt-4">
              You can donate via bank transfer. Please notify us after payment for confirmation.
            </p>
          </div>

          {/* Bank Button */}
          <button className="mt-6 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Donate via Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
