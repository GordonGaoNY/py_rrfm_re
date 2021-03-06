import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import sidebarBGI from '../../../assets/img/sidebar.jpg';
import ivyLogo from '../../../assets/img/ivy-logo.png';
import './SideBar.scss';

class SideBar extends Component {
  componentDidMount() {
    /* init data here */

  }

  render() {
    return (
      <div className="sidebar fixed-position" data-active-color="rose" data-background-color="black">
        {/*<div className="logo">
          <img className="logo-image" src={ivyLogo} alt="Logo"/>
          <a href="http://www.ivy.com" className="logo-text" style={{'textAlign': 'left'}}>
              IVY
          </a>
        </div>
        <div className="logo logo-mini">
          <a href="http://www.ivy.com" className="logo-text">
              <img className="logo-image" src={ivyLogo} alt="Logo" style={{'float':'none'}}/>
          </a>
        </div>*/}
        <div className="sidebar-wrapper">
          <div className="user">
                <div className="photo">
                    <img src={ivyLogo}/>
                </div>
                <div className="info">
                    <a data-toggle="collapse" href={"http://www.ivy.com"} className="collapsed" target="_blank">
                        {/*<span style={{'fontSize': '2.5em', 'fontFamily': 'Arizonia', 'color': '#FFDF00'}}>IVY</span>*/}
                    </a>
                </div>
            </div>
          <ul className="nav">
            <li>
              <Link to="/dashboard" activeClassName="active">
                <i className="pe-7s-graph"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li>
              <Link to="/jobs" activeClassName="active">
                <i className="pe-7s-alarm"></i>
                <p>Jobs</p>
              </Link>
            </li>

            <li>
              <Link to="/charts">
                <i className="pe-7s-graph1"></i>
                <p>Charts</p>
              </Link>
            </li>

          </ul>
        </div>
        <div className="sidebar-background" style={{'backgroundImage': 'url(' + sidebarBGI+ ')'}}></div>
      </div>
    );
  }
}

/* Pass state to its component here */
function mapStateToProps(state) {
  return {
    
  };
}

/* Map actions here */
// canvasActions: bindActionCreators(CanvasActions, dispatch)
function mapDispatchToProps(dispatch) {
  return {
    
  };
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
