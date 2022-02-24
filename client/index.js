import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, browserHistory } from "react-router-dom";
import store from "./store";

/*
import AllKittens from "./components/AllKittens";
import AllPuppies from "./components/AllPuppies";
import AllUsers from "./components/AllUsers";
import SingleKitten from "./components/SingleKitten";
import SinglePuppy from "./components/SinglePuppy";
import SingleUser from "./components/SingleUser";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
*/
import NavBar from "./components/EmptyDiv";
import AllKittens from "./components/EmptyDiv";
import AllPuppies from "./components/EmptyDiv";
import AllUsers from "./components/EmptyDiv";
import SingleKitten from "./components/EmptyDiv";
import SinglePuppy from "./components/EmptyDiv";
import SingleUser from "./components/EmptyDiv";
import Home from "./components/EmptyDiv";
import NotFound from "./components/EmptyDiv";


render(
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route exact path='/kittens' element={<AllKittens />} />
            <Route exact path='/puppies' element={<AllPuppies />} />
            <Route exact path='/users' element={<AllUsers />} />
            <Route path='/kittens/:kittenId' element={<SingleKitten />} />
            <Route path='/puppies/:puppyId' element={<SinglePuppy />} />
            <Route path='/users/:userId' element={<SingleUser />} />
            <Route exact path='/' element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
