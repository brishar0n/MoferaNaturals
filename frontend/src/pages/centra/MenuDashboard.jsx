import Tooltip from "./Tooltip";

function MenuDashboard() {
  return (
    <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-18 bg-secondary border-t rounded-t-2xl  border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-tertiary rounded-t-2xl  dark:hover:bg-quaternary group">
            <img src={"src/assets/dashboard/vector5.svg"} />
          </button>
          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-tertiary rounded-t-2xl dark:hover:bg-quaternary group">
            <img src={"src/assets/dashboard/vector3.svg"} />
          </button>
          
          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-tertiary rounded-t-2xl dark:hover:bg-quaternary group">
            <Tooltip
              content="Add Wet Leaves &#010; Add Dry Leaves  &#010; Add Flour  &#010; Shipping Information  &#010;Add Machine  &#010;"
              direction="top"
            >
              <span className="example-emoji" role="img" aria-label="fox emoji">
              <div className="w-20 h-20 bg-green-900 rounded-full flex justify-center items-center">
              <img src={"src/assets/dashboard/group-57.svg"} />
              </div>
              
              </span>
            </Tooltip>
          </button>
          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-tertiary rounded-t-2xl dark:hover:bg-quaternary group">  
            <img src={"src/assets/dashboard/vector6.svg"} />
          </button>
          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-tertiary rounded-t-2xl dark:hover:bg-quaternary group">
            <img src={"src/assets/dashboard/vector4.svg"} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuDashboard;
