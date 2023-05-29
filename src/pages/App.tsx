import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Layout } from '../layouts';
import { About, Books, Home, Events, Words } from '.';

export const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={(<Home />)} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="events" element={<Events />} />
          <Route path="words" element={<Words />} />
        </Route>
      </Routes>
  </BrowserRouter>
)