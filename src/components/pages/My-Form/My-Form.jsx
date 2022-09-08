import "./My-Form.css";
import { useState } from "react";
import { connect } from "react-redux";
import { createUserAction } from "../../../store/actions/user-actions";



const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(createUserAction(userObj))

})
function MyForm(props) {
  const [user, setUser] = useState({});
  const changeInput = (e) => {
    user[e.target.name] = e.target.value

  }
  return (
    <div className="my-form">
      <h1>my-form</h1>
      <label htmlFor="">first name</label>
      <input name="fname"  onChange={changeInput} type="text" />
      <label htmlFor="">last name</label>
      <input name="lname" onChange={changeInput} type="text" />
      <label htmlFor="">age</label>
      <input name="age"   onChange={changeInput} type="number" />
      <label htmlFor="">email</label>
      <input name="email"  onChange={changeInput} type="text" />
      <button id="btn_add_user" onClick={() => props.addNewUser(user)}>click add</button>
     
    </div>
  );
};

export default connect(null, mapDispatchToProps)(MyForm);




