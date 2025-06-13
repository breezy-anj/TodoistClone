import bell from "./icons/bell-2-64.png";
import dashboardToggle from "./icons/sidebar-svgrepo-com.svg";
import search from "./icons/search-alt-svgrepo-com.svg";
import add from "./icons/plus-7-64.png";
import inbox from "./icons/inbox-svgrepo-com.svg";
import date from "./icons/calendar-dates-svgrepo-com.svg";
import pfp from "./icons/pfp.jpeg";
import calendar from "./icons/calendar-svgrepo-com.svg"
import filter from "./icons/window-svgrepo-com.svg"

function Dashboard() {
  return (
    <>
      <div className=" fixed left-0 text-white w-1/5 h-full p-3 bg-dashboard ">
        <div className="flex">
          <div
            id="pfpArea"
            className=" flex items-center rounded hover:bg-[#332F2A] duration-250 p-2 font-bold gap-2 h-12 w-max"
          >
            <img className="rounded-full size-8 " src={pfp} alt="You" />
            AJ
          </div>

          <div className="flex items-center h-12 w-max  ml-auto  gap-3">
            <div className=" p-2 hover:bg-[#332F2A] duration-250 rounded">
              <img className="size-4" src={bell} alt="Notifications" />
            </div>

            <div className="hover:bg-[#332F2A] duration-250 p-2 rounded">
              <img className="size-5 " src={dashboardToggle} alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-3">

          <div className="dashboardSection text-redDashboard font-bold">
            <img className="dashboardSectionImage" src={add} alt="" />
            Add Task
          </div>
          <div className="dashboardSection">
            <img className="dashboardSectionImage" src={search} alt="" />
            Search
          </div>


          <div className="dashboardSection">
            <img className="dashboardSectionImage" src={inbox} alt="" />
            Inbox
          </div>


          <div className="dashboardSection">
            <img className="dashboardSectionImage" src={calendar} alt="" />
            Today
          </div>


          <div className="dashboardSection">
            <img className="dashboardSectionImage" src={date} alt="" />
            Upcoming
          </div>

          <div className="dashboardSection">
            <img className="dashboardSectionImage" src={filter} alt="" />
            Filters and Labels
          </div>




        </div>
      </div>
    </>
  );
}

export default Dashboard;
