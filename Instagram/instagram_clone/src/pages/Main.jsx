import React from "react";
import MainBar from "../components/MainBar";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
// css
import '../css/main.css' 
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className="Main">
                    <div className="flex flex-row ">
                    {/* / main tab  */}
                        <div className="flex-auto md:basis-4/5 xl:basis:4/5 lg:basis-3/5 sm:pl-5">
                            <MainBar/>
                        </div>
                        {/* sidebar tab */}
                        <div className="flex-auto md:basis:1/5 pr-0 md:pl-5 lg:pl-14 xl:basis:1/5 lg:basis-2/5 hidden md:block lg:block ">
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;