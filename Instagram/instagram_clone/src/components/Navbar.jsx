import React from "react";
import '../css/navbar.css'
import logo from  '../images/logo.png'
class Navbar extends React.Component{

    constructor(props){
        super(props)

        this.state = {searchValue:''}
    }
    SearchComponent(){

        return (
            <>
                <form className="ui-search-form hidden xs:hidden sm:hidden md:block lg:block">
                    <i className="fa-solid fa-glass"></i>
                    <input className="ui-input" onChange={(e)=>{this.setState({searchValue:e.target.value})}}/>
                </form>
            </>
        )

    }
    render(){
        return (
            <>
                <div className="navbar sticky top-0">
                    <div className="container navbar-container mx-auto">
                        <div className="flex flex-row py-3 w-full items-center">
                            <a className="navbar-brand flex-auto"><img src={logo} className='logo md:mr-auto'/></a>
                            <div className="flex-auto sm:hidden md:block lg:block px-2">
                                <form className="ui-search-form ml-auto lg:w-5/6 md:w-full">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                    <input className="ui-input w-3/4 "  placeholder="Search" onChange={(e)=>{this.setState({searchValue:e.target.value})}}/>
                                </form>
                            </div>
                            <div className="navbar-navigate flex-auto">
                                <div className="flex space-x-6 justify-end">
                                    <i className="fa-solid fa-house"></i>
                                    <i className="fa-regular fa-comment-dots"></i>
                                    <i className="fa-regular fa-square-plus"></i>
                                    <i className="fa-regular fa-compass"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-circle-user"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}
export default Navbar