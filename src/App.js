import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Routes';

function App() {
  return (
    <div className="App bg-black">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
