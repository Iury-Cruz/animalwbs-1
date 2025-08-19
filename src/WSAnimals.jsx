import pawlogo from "./icons/pawlogo.png"
import flameslogo from "./icons/flameslogo.png"
import reindeerbglogo from "./img/reindeerbglogo.jpg"



function WSAnimals(){


    return(


        <>
            <body className="p-0 m-0"></body>

            <header className="w-full border-[1px] border-gray-300 shadow-lg flex justify-center h-[100px]"  >




               <nav className="w-full flex justify-around items-center">

                <div className="max-sm:w-[30%] max-md:w-[30%] w-[20%] flex justify-center">
                    <img src={pawlogo} alt="" className="w-[30%] max-md:w-[50%] max-sm:w-[50%]" />
                </div>


                <ul className="max-sm:hidden max-md:hidden w-[50%] flex justify-between items-center font-bold">
                    <li className="hover:underline hover:cursor-pointer">All Animals</li>
                    <li className="hover:underline hover:cursor-pointer">Animals</li>
                    <li className="hover:underline hover:cursor-pointer">Pets</li>
                    <li className="hover:underline hover:cursor-pointer">Natural World</li>
                    <li className="hover:underline hover:cursor-pointer">Quizzes</li>
                    <li className="hover:underline hover:cursor-pointer">Recent Articles</li>
                    <li className="hover:underline hover:cursor-pointer">About</li>
                </ul>


                <div className="max-sm:w-[50%] max-md:w-[60%] w-[20%] flex justify-between">
                    <input className="max-sm:w-[50%] w-[70%] border border-gray-300 p-[5px] pl-[10px] rounded-[5px] outline-blue-200" placeholder="Search" type="search"  />
               <button className="max-sm:w-[40%] max-md:w-[28%] w-[25%] border border-pink-700 rounded-[5px] bg-[#28A745] text-white pr-[10px] pl-[10px]">
                    Find
               </button>
                </div>
               </nav>
            </header>



           <div className="flex"> 
                <section className="w-[75%] max-sm:w-[100%] max-sm:h-[100vh] max-md:w-[100%] max-md:h-[100vh] h-[84vh] bg-[url(./img/wolfsbglogo.jpg)] bg-center bg-cover bg-fixed bg-no-repeat  border border-gray-400 shadow shadow-black flex justify-center">
                    <div className="flex justify-center items-center flex-col">
                        <h2 className="max-sm:hidden max-md:hidden text-[65px] text-blue-600 font-extrabold">
                            Discover, Appreciate, & <br /> Understand the Animal World!
                        </h2>
                        <p className="max-sm:hidden max-md:hidden text-[23px] text-white font-extrabold w-full">
                            Search or scroll below to dive into the wonders of the natural <br/> world.
                        </p>
                        <button className="max-sm:w-[100%] max-sm:h-[10vh] max-sm:p-[10px]
                        max-sm:text-[14px] bg-[#218838] text-white text-[20px] p-[20px] font-extrabold
                        hover:underline rounded-xl border border-black">
                            See All Animals A-Z!
                        </button>
                    </div>
                </section>
                <section className="max-sm:hidden max-md:hidden w-[25%] bg-white h-[84vh] flex flex-col justify-start">

                    <div className="flex flex-col justify-center items-center">

                        
                        <div className=" w-[90%] flex justify-center items-center">
                            <img src={flameslogo} alt="" className="w-10 mr-1" />
                            <h3 className="text-black text-center font-bold text-[19px]">
                                Trending on A-Z Animals
                            </h3>
                        </div>



                        <div className="flex justify-center">
                            <img src={reindeerbglogo} className="bg-cover bg-fixed bg-center bg-no-repeat w-[100%] h-[66vh] mt-1 border-[2px] border-black" alt="" />
                        </div>




                        <div className="w-[90%]">
                            <p className="text-[20px] text-center font-light mt-2 ">
                                Why Reindeer Are One of the Least-Studied Animals in the World
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* <footer>
                <p>
                    
                </p>
            </footer> */}

        </>
    )


}

export default WSAnimals