import { connect } from "react-redux";
import MyForm from "../My-Form/My-Form";
import "./Home.css";

export const mapStateToProps = (state) => {
  return { users: state.users };
};

function Home(props) {
  return (
    <div className="home">
      <h1>Home</h1>
      <MyForm users={props.users} />
    </div>
  );
};

export default connect(mapStateToProps)(Home);
