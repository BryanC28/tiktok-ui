import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./Layouts/DefaultLayout";
import { Fragment } from "react";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Clone Tiktok</h1> */}
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout
            const Page = route.component
            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
