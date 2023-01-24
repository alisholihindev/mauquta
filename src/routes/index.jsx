import React from "react";
import {Route, Routes} from 'react-router-dom';

import Homepage from "../page/homepage";
import Adzan from "../page/adzan";
import Iqomah from "../page/iqomah";

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/adzan/:sholat" element={<Adzan/>} />
            <Route path="/iqomah" element={<Iqomah/>} />
        </Routes>
    )
}

export default MyRoutes;