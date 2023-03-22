import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/userSlice";
import User from './components/User';



function App() {
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  // console.log(users)
  // {users.map((user) => (
  //   user.map((test)=>
  //    <p key={user.id}>{user.name}</p>
  //   )
   
  // ))}

  return (
    <div className="App">


      <button onClick={() => dispatch(fetchUsers())}>
        Ajouter utilisateurs
      </button>
      
        {users.length > 0 && users.map((user) => (
          // console.log(user)
          <User key={user.id} user={user}/>
        ))}
    </div>
  )
}

export default App
