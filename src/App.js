import Sidebar from './Sidebar';
import './App.css'
import { Routes, Route } from "react-router-dom";
// import Products from './Page/Products';
// import DashBoard from './Page/DashBoard';
// import Color from './Page/Color';
// import Tags from './Page/Tags';
import Customer from './Page/Customer';
// import Country from './Page/Country';
// import City from './Page/City';
import Category from './Page/Category';
import Brand from './Page/Brand';
import Reports from './Page/Reports';
// import ChangePassward from './Page/ChangePassward';
import NewProfile from './Page/NewProfile';



const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<DashBoard />} /> */}
        <Route path="/newprofile" element={<NewProfile />} />
        {/* <Route path="/changepassword" element={<ChangePassward />} /> */}
        <Route path="/reports" element={<Reports />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/brand" element={<Brand />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/subcategory" element={<NewProduct />} /> */}
        {/* <Route path="/city" element={<City />} /> */}
        {/* <Route path="/country" element={<Country />} /> */}
        {/* <Route path="/shipping" element={<NewProduct />} /> */}
        <Route path="/customer" element={<Customer />} />
        {/* <Route path="/tags" element={<Tags />} /> */}
        {/* <Route path="/color" element={<Color />} /> */}


      </Routes>
    </div>
  )
}

export default App