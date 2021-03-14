import Navbar from './components/shared/navbar/navbar.component';
import UserList from './components/users/users-list.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserList/>
    </div>
  );
}

export default App;
