
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div className="wrapper">
               <div>
                    <nav>
                         <ul>
                              <li>
                                   <Link to="home" >Home</Link>
                              </li>
                              <li>
                                   <Link to="contact" >Contact</Link>
                              </li>
                              <li>
                                   <Link to="MarketPlace/" >Market Place</Link>
                              </li>
                              <li>
                                   <Link to="nirvana/" >Nirvana</Link>
                              </li>
                              <li>
                                   <Link to="me/" >Me</Link>
                              </li>
                         </ul>
                    </nav>
               </div>
               <div>
                    <Routes>
                         <Route  path="home/*" element={<h1>Home</h1>}/>
                         <Route  path="contact/*" element={<h1>Contact</h1>}/>
                         <Route  path="MarketPlace/*" element={<h1>Market Place</h1>}/>
                         <Route  path="nirvana/*" element={<h1>Nirvana</h1>}/>
                         <Route  path="me/*" element={<h1>Me</h1>}/>
                    </Routes>
               </div>     
          </div>
     )
}

export default Dashboard ;