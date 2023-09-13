import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [reload,setReload] = useState(!true);

  // started life cycle here
  useEffect(()=>{
    const getData = async () => {
    const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
      setMembers(response.data)
    }
    getData();
  },[reload]);
 
  // update here
const updateData = async (name, age, weight, status,id) => {
    const response = await axios.put("https://jsd5-mock-backend.onrender.com/members%22,%7B
    id:id,
    name:name,
    age:age,
    weight:weight,
    status:status
  });
  if (response.status === 200){
    setReload(!reload)
  }
  console.log('updateData',response.status)
}

  // create here
const createData = async (name, age, weight, status) => {
  const response = await axios.post("https://jsd5-mock-backend.onrender.com/members",{
    name:name,
    age:age,
    weight:weight,
    status:status
  });
  if (response.status === 200){
    setReload(!reload)
  }
  console.log('createData',response.status)
}

const deleteData = async (id) => {
  const response = await axios.delete(https://jsd5-mock-backend.onrender.com/member/${id});
  if (response.status === 200 && response.data) {
    setReload(!reload);
  }
  console.log('deleteData',response.status)
};

  return (
    <div className="container">
      <Form submitHandler={createData} />
      <div className="card-container">
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
            updateData={updateData}
            deleteData={deleteData}
          />
        ))}
      </div>
    </div>
  );
};

export default App;