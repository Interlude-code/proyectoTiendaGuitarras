import "./Header.css";
import {Link} from "react-router-dom";


const Private = ({children}) => {

  return (
    <>
    <div className="font-sans antialiased h-screen">
        <header className="fixed z-50 h-16 w-full  bg-gray-700 shadow flex items-center justify-between">
            <div className="flex items-center h-full">
                <div className="flex items-center text-center h-full w-48 border-r border-white">
                    <span className="w-full text-white text-sm uppercase font-extrabold">PULL.OFF</span>
                </div>
                <div className="flex items-center w-64">
                    <form action="" className="w-full h-full px-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-white fill-current"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                    <input type="search" className="appearance-none bg-gray-700 h-full w-full py-2 px-2 text-white" placeholder="Search..."/>
                    </form>
                </div>
            </div>
            <div className="flex items-center h-full text-sm">
                <div className="flex items-center h-full">
                    <a href="#" className="flex items-center text-white h-full px-4">Support</a>
                    <div className="group relative h-full">
                        <a href="#" className="text-white flex items-center h-full bg-gray-600 px-4">
                            Account
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current ml-1"><path className="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
                        </a>
                        <div className="hidden group-hover:block absolute pin-r top-full w-48 bg-black">
                            <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                My Account
                            </a>
                            <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                Edit Account
                            </a>
                            <a href="#" className="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="main" className="pt-16">
            <div className="bg-gray-600 relative h-full min-h-screen">
            <div className="xl:py-2">
                <div className="hidden xl:block uppercase font-bold text-gray-800 text-xs px-4 py-2">
                Main
                </div>
                <div className="group relative sidebar-item with-children">
                <Link to="/dashboard" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current xl:mr-2"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z" className="heroicon-ui"></path></svg>
                    <div className="text-white text-xs">Dashboard</div>
                </Link>
        
                </div>
                <div className="group relative sidebar-item with-children">
                <Link to='/newGuitar' className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current xl:mr-2"><path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z" className="heroicon-ui"></path></svg>
                    <div className="text-white text-xs">Comments</div>
                </Link>
                </div>
            </div>
            <div className="xl:py-2">
                <div className="hidden xl:block uppercase font-bold text-black text-xs px-4 py-2">
                Secondary
                </div>
                <div className="group relative sidebar-item with-children">
                <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current xl:mr-2"><path d="M12 18.62l-6.55 3.27A1 1 0 0 1 4 21V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.45.9L12 18.61zM18 4H6v15.38l5.55-2.77a1 1 0 0 1 .9 0L18 19.38V4z" className="heroicon-ui"></path></svg>
                    <div className="text-white text-xs">Bookmarks</div>
                </a>
                </div>
                <div className="group relative sidebar-item with-children">
                <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current xl:mr-2"><path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" className="heroicon-ui"></path></svg>
                    <div className="text-white text-xs">Store</div>
                </a>
                </div>
                <div className="group relative sidebar-item with-children">
                <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-gray-800 fill-current xl:mr-2"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" className="heroicon-ui"></path></svg>
                    <div className="text-white text-xs">Users</div>
                </a>
                </div>
            </div>
            </div>
            <div className="bg-gray-100 h-screen ">
            <div className="w-full bg-gray-100 ">
            {children}
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Private;