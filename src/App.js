import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Others from "pages/BarChart";
import Detail from "pages/Detail";
import BarChart from "pages/BarChart";
import NotFound from "pages/NotFound";
import Sort from "pages/Sort";
const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/sort/:id" exact element={<Sort />} />
          <Route path="/others" exact element={<Others />} />
          <Route path="/chart" exact element={<BarChart />} />
          <Route element={<NotFound />} />
        </Routes>
      </>
  );
};

export default App;
