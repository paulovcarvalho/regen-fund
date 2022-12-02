import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"; // https://heroicons.com/

export default function HomeBottomSection() {
  return (

      <div className="container absolute top-0 left-0 right-0 mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-screen lg:w-6/12 px-4 py-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-Cormorant italic text-3xl sm:text-5xl">
              Human actions need to become regenerative by design
              </h1>

            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
            <div className="flex justify-start items-center pr-12 px-4 py-2 sm:py-5">
              <ArrowDownCircleIcon className="text-white justify-center w-8 h-8 sm:w-10 sm:h-10 mb-5 hover:bg-regen-blue hover:rounded-full" />
              <div>
                <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                  Trust
                </h6>
              </div>
            </div>
            <div className="pr-12">
              <div className="flex justify-start items-center pr-12 px-4 py-5">
                <ArrowDownCircleIcon className="text-white justify-centerw-8 h-8 sm:w-10 sm:h-10  mb-5 hover:bg-regen-blue hover:rounded-full" />
                <div>
                  <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                    Governance
                  </h6>
                </div>
              </div>
            </div>
            <div className="pr-12">
              <div className="flex justify-start items-center pr-12 px-4 py-5">
                <ArrowDownCircleIcon className="text-white justify-center w-8 h-8 sm:w-10 sm:h-10  mb-5 hover:bg-regen-blue hover:rounded-full" />
                <div>
                  <h6 className="text-xl sm:text-2xl mb-5 sm:mb-4 px-1 sm:px-4 font-semibold font-Cormorant text-white">
                    Values
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

  );
}
