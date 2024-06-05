import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Table from "./TablePowder"
import RecentActivities from "./RecentActivities"
import SearchForm from "./Search"
import { IoNotifications } from "react-icons/io5";


const activities = [
  { day:new Date().toLocaleString() + '', time: '10 mins ago', description: 'Centra 1 just added 30kg of Powder data into the system.',image: 'src/assets/DashboardDesktop/ellipse-10@2x.png'  },
  { day:new Date().toLocaleString() + '', time: '10 mins ago', description: 'Centra 1 just added 30kg of Powder data into the system.',image: 'src/assets/DashboardDesktop/ellipse-9@2x.png' },
  { day:new Date().toLocaleString() + '', time: '10 mins ago', description: 'Centra 1 just added 30kg of Powder data into the system.',image: 'src/assets/DashboardDesktop/ellipse-22@2x.png' },
  { day:new Date().toLocaleString() + '', time: '10 mins ago', description: 'Centra 1 just added 30kg of Powder data into the system.',image: 'src/assets/DashboardDesktop/ellipse-18@2x.png' },
];

const TestDashboard = () => {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <Sidebar></Sidebar>

      <div class="p-4 sm:ml-64 bg-primary">
        <div class="p-4 border-2 bg-white border-gray-200 rounded-3xl dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-around h-28 bg-quinary rounded-3xl dark:bg-gray-800">
              <p class="text-2xl dark:text-gray-500">
              <h2 class="text-4xl font-bold">Hello Maimunah!</h2>
              </p>
              <img className=" object-right w-20 h-24" alt="" src={"src/assets/DashboardDesktop/gembrot-9@2x.png"}/>
             
            </div>
            <div class="flex items-center justify-center gap-8 h-24 rounded dark:bg-gray-800">
              <div>
                <SearchForm />
              </div>
              <div className="p-4 bg-quinary rounded-full"> 
                <a href="/dashboard"><IoNotifications className="className='text-2xl"/></a>
              </div>
              <div>
              <img className="object-right w-12 " alt="" src={"src/assets/DashboardDesktop/ellipse-15@2x.png"}/>
              </div>
            </div> 
          </div>
          <div class="flex items-center justify-between h-12 ml-4 mb-4 rounded dark:bg-gray-800">
            <div class="flow-root">  
              <p align="left"><span className="text-2xl font-bold">Powder Data</span></p> 
              <p>
              Observe the statistics, trends, data of Powder
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <form className="h-10 w-40">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                  <option>Select Centra</option>
                  <option>Select Centra 1</option>
                  <option>Select Centra 2</option>
                  <option>Select Centra 3</option>
                </select>
              </form>
              <form className="h-10 w-28">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                  <option>Filer</option>
                  <option>Filer 1</option>
                  <option>Filer 2</option>
                  <option>Filer 3</option>  
                </select>
              </form>
            </div>
          </div>
          <div class="grid grid-rows grid-cols-2 gap-4 mb-4">
            <div class="row-span-2 flex h-[500px] bg-quinary rounded-3xl dark:bg-gray-800">
              <div className="absolute mt-4 ml-8 h-72 w-[36%]">
                <div class="relative">
                    <p class="absolute left-0 text-green-600">
                      <div className="text-lg font-bold"> Powder Statistics</div>
                    </p>
                    <p class="absolute right-0 text-green-800">
                      <form className="h-10 w-28">
                      <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                      focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Annually</option>
                      </select>
                      </form>
                    </p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <BarChart></BarChart>
              </div>
              
            </div>
            <div class="flex h-96 bg-quinary rounded-3xl dark:bg-gray-800">
              <div className="absolute mt-4 ml-8 w-[36%] h-60">
              <div class="relative">
                  <p class="absolute left-0 text-green-600">
                    <div className="text-lg font-bold"> Powder Trends</div>
                  </p>
                  <p class="absolute right-0 text-green-800">
                    <form className="h-10 w-28">
                      <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                      focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Annually</option>
                      </select>
                    </form>
                  </p>
              </div>
              <br></br>
                <AreaChart></AreaChart>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="h-24 bg-quinary rounded-3xl items-center dark:bg-gray-800">
                <p className="mt-4 text-sm">Total Powder <br></br> Collected:</p>
                <p className="text-lg font-bold">10,300 kg</p>
                </div>
                <div class="h-24 bg-quinary rounded-3xl items-center dark:bg-gray-800">
                <p className="mt-4 text-sm">Average Powder Collected Each Day:</p>
                <p className="text-lg font-bold">500 kg</p>
                </div>
                <div class="h-24 bg-quinary rounded-3xl items-center dark:bg-gray-800">
                <p className="mt-4 text-sm">Total Powder <br></br> Disposed:</p>
                <p className="text-lg font-bold">102 kg</p>
                </div>
              </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex h-[440px] bg-quinary items-center justify-center rounded-3xl dark:bg-gray-800">
              <p class="text-2xl text-primary dark:text-gray-500">
              <p className="text-left">Powder Data</p>
              <Table/>
              </p>
            </div>
            <div class="flex h-[440px] bg-quinary justify-center rounded-3xl dark:bg-gray-800">
              <p class="text-2xl text-primary dark:text-gray-500">
              <p className="text-left mt-4">Recent Activity</p> 
              <RecentActivities activities={activities} />
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center h-2 mb-4 rounded dark:bg-gray-800">
            <div class="flow-root">  
              <p class="float-left"></p> 
              <p class="float-right"></p>
            </div>
          </div>
          {/* 
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          */}
        </div>
      </div>
    </>
  );
};
export default TestDashboard;