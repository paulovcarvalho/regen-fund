
import {
    ArrowDownCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'; // https://heroicons.com/

export default function MainSection() {
    return (
        <> 
        <div className="absolute w-full h-full bg-center bg-cover flex items-center">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: "url('/img/bgImage_1st.jpg')",
                }}
            >
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 py-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                    <h1 className="text-white font-Cormorant font-semibold text-6xl">
                        Be invested in a Legacy of Life for future generations
                    </h1>
                    <p className="mt-4 text-white font-Montserrat text-lg text-blueGray-200">
                        The first multi-capital crowdfunding solution. Building trust with the Life Contribution Index. 
                        Understand your contribution to Life and set true values in flow with the Prosperity Prosperity Pool. 
                        <h2 className= "text-white font-Cormorant font-semibold text-3xl"> Design for Systemic Reciprocity</h2>
                    </p>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
                        <div className="flex justify-start items-center pr-12 px-4 py-5">
                            <ArrowDownCircleIcon className="text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"/>
                            <div>
                                <h6 className="text-2xl mb-4 px-4 font-semibold font-Cormorant text-white">
                                    Signifying Return
                                </h6>
                            </div>
                        </div>
                        <div className="pr-12">
                            <div className="flex justify-start items-center pr-12 px-4 py-5">
                                <ArrowDownCircleIcon className="text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"/>
                               <div>
                                    <h6 className="text-2xl mb-4 px-4 font-semibold font-Cormorant text-white">
                                        Signifying Value
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="pr-12">
                            <div className="flex justify-start items-center pr-12 px-4 py-5">
                                 <ArrowDownCircleIcon className="text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"/>
                                <div>
                                    <h6 className="text-2xl mb-4 px-4 font-semibold font-Cormorant text-white">
                                        Signifying Relationship
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="pr-12">
                            <div className="flex justify-start items-center pr-12 px-4 py-5">
                                <ArrowDownCircleIcon className="text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"/>
                                <div>
                                        <h6 className="text-2xl mb-4 px-4 font-semibold font-Cormorant text-white">
                                        Signifying Community
                                </h6>
                            </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        
        </div>
        </>
    )
}