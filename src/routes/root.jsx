// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, Outlet } from 'react-router-dom';

// export default function Root() {
//     return (
//         <div className="container">

//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3"> {/* Added classes for black background and padding */}
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Welcome</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link to="/dashboard" className="nav-link">HOME</Link> {/* Removed href attribute */}
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/highlightedcars" className="nav-link">CAR</Link> {/* Removed href attribute */}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             <Outlet /> {/* This is where the child routes will be rendered */}
//         </div>
//     );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import './Root.css'; // Custom CSS file for styling

export default function Root() {
    return (
        <div className="root-container bg-dark text-white min-vh-100"> {/* Apply classes for black background and white text */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Welcome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/highlightedcars" className="nav-link">CAR</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <Outlet /> {/* This is where child components will be rendered */}
            </div>
        </div>
    );
}
