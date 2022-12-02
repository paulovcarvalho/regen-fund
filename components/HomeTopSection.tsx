import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"; // https://heroicons.com/

export default function HomeTopSection() {
  return (
    <div className="w-screen h-screen bg-center bg-cover overflow-x-auto align-middle">
      <div
        className="w-screen h-screen bg-center bg-cover bg-gradient-to-br from-black via-black to-transparent"
        style={{ backgroundImage: "url('/img/bgImage_1st.jpg')" }}
      >
        <div className="w-screen h-screen bg-center bg-cover opacity-80 bg-gradient-to-br from-black to-transparent">
        </div>
      </div>

      <div className="container absolute top-0 left-0 right-0 mx-auto py-80">
        <div className="items-center flex flex-wrap">
          <div className="w-screen lg:w-6/12 px-4 py-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-Cormorant  italic text-3xl sm:text-6xl">
                Are you invested in a Legacy of Life for future generations ?
              </h1>
              <p className="mt-4 text-white font-Montserrat text-base sm:text-lg text-blueGray-200">
                The first multi-capital crowdfunding solution. Building trust
                with the Life Contribution Index. Understand your contribution
                to Life and set true values in flow with the Prosperity
                Prosperity Pool.
                <h2 className="text-white font-Cormorant font-semibold text-2xl sm:text-3xl">
                  Design for Systemic Reciprocity
                </h2>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
            <div className="flex justify-start items-center pr-10 px-4 py-1 sm:py-2">
              <ArrowDownCircleIcon className="text-white justify-center w-8 h-8 sm:w-10 sm:h-10 mb-5 hover:bg-regen-blue hover:rounded-full" />
              <div>
                <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                  Signifying Return
                </h6>
              </div>
            </div>
            <div className="pr-12">
              <div className="flex justify-start items-center pr-12 px-4 py-5">
                <ArrowDownCircleIcon className="text-white justify-centerw-8 h-8 sm:w-10 sm:h-10  mb-5 hover:bg-regen-blue hover:rounded-full" />
                <div>
                  <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                    Signifying Value
                  </h6>
                </div>
              </div>
            </div>
            <div className="pr-12">
              <div className="flex justify-start items-center pr-12 px-4 py-5">
                <ArrowDownCircleIcon className="text-white justify-center w-8 h-8 sm:w-10 sm:h-10  mb-5 hover:bg-regen-blue hover:rounded-full" />
                <div>
                  <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                    Signifying Relationship
                  </h6>
                </div>
              </div>
            </div>
            <div className="pr-12">
              <div className="flex justify-start items-center pr-12 px-4 py-5">
                <ArrowDownCircleIcon className="text-white justify-center w-8 h-8 sm:w-10 sm:h-10  mb-5 hover:bg-regen-blue hover:rounded-full" />
                <div>
                  <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                    Signifying Community
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
