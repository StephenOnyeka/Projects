// import Footer from "./Footer";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        // <div className="content">
        // <div className="overflow-x-hidden" >
        <div className="" >
            {/* <div className="-mb-24"><Navbar /></div> */}
            <div className=""><Navbar /></div>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;