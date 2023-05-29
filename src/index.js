import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './pages';

import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.css'
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
