import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { setUser } from '../store/actions/user';

const Main = ({name, setUser}) => {

  return (
    <div>
      <App name={(name)? name : "nothing"} setUser={setUser} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    name: state.name,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
