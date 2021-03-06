import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavBar extends Component {
  componentDidMount() {
    /* init data here */
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={{'backgroundColor': ''}}>
          <div className="container-fluid">
            <div className="navbar-minimize">
              <button id="minimizeSidebar" className="btn btn-round btn-rose btn-fill btn-just-icon">
                <i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i className="fa fa-navicon visible-on-sidebar-mini"></i>
              </button>
            </div>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/*<a className="navbar-brand" href="/">Dashboard</a>*/}
            </div>
            <div className="collapse navbar-collapse">

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/dashboard">
                    <i className="fa fa-line-chart"></i>
                    <p className="hidden-lg hidden-md">Stats</p>
                  </Link>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-list"></i>
                    <p className="hidden-md hidden-lg">
                      More
                      <b className="caret"></b>
                    </p>
                  </a>
                  <ul className="dropdown-menu dropdown-with-icons">
                    <li>
                      <a href="#">
                        <i className="pe-7s-mail"></i> Messages
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="pe-7s-help1"></i> Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="pe-7s-tools"></i> Settings
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#" className="btn btn-rose">
                        <i className="pe-7s-close-circle"></i>
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>
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
)(NavBar);
