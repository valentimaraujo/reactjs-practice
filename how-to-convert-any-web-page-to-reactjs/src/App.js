import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header-navbar-shadow"></div>
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <ul className="nav navbar-nav">
                    <li className="nav-item mobile-menu d-xl-none mr-auto"><a
                      className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i
                      className="ficon bx bx-menu"></i></a></li>
                  </ul>
                  <ul className="nav navbar-nav bookmark-icons">
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html"
                                                                  data-toggle="tooltip" data-placement="top"
                                                                  title="Email"><i className="ficon bx bx-envelope"></i></a>
                    </li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html"
                                                                  data-toggle="tooltip" data-placement="top"
                                                                  title="Chat"><i className="ficon bx bx-chat"></i></a>
                    </li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html"
                                                                  data-toggle="tooltip" data-placement="top"
                                                                  title="Todo"><i
                      className="ficon bx bx-check-circle"></i></a></li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html"
                                                                  data-toggle="tooltip" data-placement="top"
                                                                  title="Calendar"><i
                      className="ficon bx bx-calendar-alt"></i></a></li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i
                      className="ficon bx bx-star warning"></i></a>
                      <div className="bookmark-input search-input">
                        <div className="bookmark-input-icon"><i className="bx bx-search primary"></i></div>
                        <input className="form-control input" type="text" placeholder="Explore Frest..." tabIndex="0"
                               data-search="template-list"/>
                        <ul className="search-list"></ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="nav navbar-nav float-right">
                  <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link"
                                                                         id="dropdown-flag" href="#"
                                                                         data-toggle="dropdown" aria-haspopup="true"
                                                                         aria-expanded="false"><i
                    className="flag-icon flag-icon-us"></i><span className="selected-language">English</span></a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#"
                                                                                      data-language="en"><i
                      className="flag-icon flag-icon-us mr-50"></i> English</a><a className="dropdown-item" href="#"
                                                                                  data-language="fr"><i
                      className="flag-icon flag-icon-fr mr-50"></i> French</a><a className="dropdown-item" href="#"
                                                                                 data-language="de"><i
                      className="flag-icon flag-icon-de mr-50"></i> German</a><a className="dropdown-item" href="#"
                                                                                 data-language="pt"><i
                      className="flag-icon flag-icon-pt mr-50"></i> Portuguese</a></div>
                  </li>
                  <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i
                    className="ficon bx bx-fullscreen"></i></a></li>
                  <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i
                    className="ficon bx bx-search"></i></a>
                    <div className="search-input">
                      <div className="search-input-icon"><i className="bx bx-search primary"></i></div>
                      <input className="input" type="text" placeholder="Explore Frest..." tabIndex="-1"
                             data-search="template-list"/>
                      <div className="search-input-close"><i className="bx bx-x"></i></div>
                      <ul className="search-list"></ul>
                    </div>
                  </li>
                  <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label"
                                                                             href="#" data-toggle="dropdown"><i
                    className="ficon bx bx-bell bx-tada bx-flip-horizontal"></i><span
                    className="badge badge-pill badge-danger badge-up">5</span></a>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <div className="dropdown-header px-1 py-75 d-flex justify-content-between"><span
                          className="notification-title">7 new Notification</span><span
                          className="text-bold-400 cursor-pointer">Mark all as read</span></div>
                      </li>
                      <li className="scrollable-container media-list"><a className="d-flex justify-content-between"
                                                                         href="javascript:void(0)">
                        <div className="media d-flex align-items-center">
                          <div className="media-left pr-0">
                            <div className="avatar mr-1 m-0"><img
                              src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="39"
                              width="39"/></div>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading"><span
                              className="text-bold-500">Congratulate Socrates Itumay</span> for work anniversaries</h6>
                            <small className="notification-text">Mar 15 12:32pm</small>
                          </div>
                        </div>
                      </a>
                        <div className="d-flex justify-content-between read-notification cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img
                                src="../../../app-assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height="39"
                                width="39"/></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New Message</span> received
                              </h6>
                              <small className="notification-text">You have 18 unread messages</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center py-0">
                            <div className="media-left pr-0"><img className="mr-1"
                                                                  src="../../../app-assets/images/icon/sketch-mac-icon.png"
                                                                  alt="avatar" height="39" width="39"/></div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Updates Available</span>
                              </h6>
                              <small className="notification-text">Sketch 50.2 is currently newly added</small>
                            </div>
                            <div className="media-right pl-0">
                              <div className="row border-left text-center">
                                <div className="col-12 px-50 py-75 border-bottom">
                                  <h6 className="media-heading text-bold-500 mb-0">Update</h6>
                                </div>
                                <div className="col-12 px-50 py-75">
                                  <h6 className="media-heading mb-0">Close</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-primary bg-lighten-5 mr-1 m-0 p-25"><span
                                className="avatar-content text-primary font-medium-2">LD</span></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New customer</span> is
                                registered</h6>
                              <small className="notification-text">1 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <div className="media d-flex align-items-center justify-content-between">
                            <div className="media-left pr-0">
                              <div className="media-body">
                                <h6 className="media-heading">New Offers</h6>
                              </div>
                            </div>
                            <div className="media-right">
                              <div className="custom-control custom-switch">
                                <input className="custom-control-input" type="checkbox" checked
                                       id="notificationSwtich"/>
                                <label className="custom-control-label" htmlFor="notificationSwtich"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-danger bg-lighten-5 mr-1 m-0 p-25"><span
                                className="avatar-content"><i className="bx bxs-heart text-danger"></i></span></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Application</span> has been
                                approved</h6>
                              <small className="notification-text">6 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between read-notification cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img
                                src="../../../app-assets/images/portrait/small/avatar-s-4.jpg" alt="avatar" height="39"
                                width="39"/></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New file</span> has been
                                uploaded</h6>
                              <small className="notification-text">4 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-rgba-danger m-0 mr-1 p-25">
                                <div className="avatar-content"><i className="bx bx-detail text-danger"></i></div>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Finance report</span> has
                                been generated</h6>
                              <small className="notification-text">25 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center border-0">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img
                                src="../../../app-assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height="39"
                                width="39"/></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New customer</span> comment
                                recieved</h6>
                              <small className="notification-text">2 days ago</small>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-menu-footer"><a
                        className="dropdown-item p-50 text-primary justify-content-center" href="javascript:void(0)">Read
                        all notifications</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-user nav-item"><a
                    className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                    <div className="user-nav d-sm-flex d-none"><span className="user-name">John Doe</span><span
                      className="user-status text-muted">Available</span></div>
                    <span><img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                               alt="avatar" height="40" width="40"/></span></a>
                    <div className="dropdown-menu dropdown-menu-right pb-0"><a className="dropdown-item"
                                                                               href="page-user-profile.html"><i
                      className="bx bx-user mr-50"></i> Edit Profile</a><a className="dropdown-item"
                                                                           href="app-email.html"><i
                      className="bx bx-envelope mr-50"></i> My Inbox</a><a className="dropdown-item"
                                                                           href="app-todo.html"><i
                      className="bx bx-check-square mr-50"></i> Task</a><a className="dropdown-item"
                                                                           href="app-chat.html"><i
                      className="bx bx-message mr-50"></i> Chats</a>
                      <div className="dropdown-divider mb-0"></div>
                      <a className="dropdown-item" href="auth-login.html"><i
                        className="bx bx-power-off mr-50"></i> Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mr-auto"><a className="navbar-brand"
                                                  href="../../../html/ltr/vertical-menu-template/index.html">
                <div className="brand-logo"></div>
                <h2 className="brand-text mb-0">Frest</h2></a></li>
              <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i
                className="bx bx-x d-block d-xl-none font-medium-4 primary"></i><i
                className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block primary" data-ticon="bx-disc"></i></a>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom"></div>
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation"
                data-icon-style="lines">
              <li className=" nav-item"><a href="../../../html/ltr/vertical-menu-template/index.html"><i
                className="menu-livicon" data-icon="desktop"></i><span className="menu-title"
                                                                       data-i18n="Dashboard">Dashboard</span><span
                className="badge badge-light-danger badge-pill badge-round float-right mr-2">2</span></a>
                <ul className="menu-content">
                  <li className="active"><a href="dashboard-ecommerce.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                data-i18n="eCommerce">eCommerce</span></a>
                  </li>
                  <li><a href="dashboard-analytics.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Analytics">Analytics</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span>Apps</span>
              </li>
              <li className=" nav-item"><a href="app-email.html"><i className="menu-livicon"
                                                                    data-icon="envelope-pull"></i><span
                className="menu-title" data-i18n="Email">Email</span></a>
              </li>
              <li className=" nav-item"><a href="app-chat.html"><i className="menu-livicon"
                                                                   data-icon="comments"></i><span className="menu-title"
                                                                                                  data-i18n="Chat">Chat</span></a>
              </li>
              <li className=" nav-item"><a href="app-todo.html"><i className="menu-livicon"
                                                                   data-icon="check-alt"></i><span
                className="menu-title" data-i18n="Todo">Todo</span></a>
              </li>
              <li className=" nav-item"><a href="app-calendar.html"><i className="menu-livicon"
                                                                       data-icon="calendar"></i><span
                className="menu-title" data-i18n="Calendar">Calendar</span></a>
              </li>
              <li className=" nav-item"><a href="app-kanban.html"><i className="menu-livicon" data-icon="grid"></i><span
                className="menu-title" data-i18n="Kanban">Kanban</span></a>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="notebook"></i><span
                className="menu-title" data-i18n="Invoice">Invoice</span></a>
                <ul className="menu-content">
                  <li><a href="app-invoice-list.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Invoice List">Invoice List</span></a>
                  </li>
                  <li><a href="app-invoice.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                data-i18n="Invoice">Invoice</span></a>
                  </li>
                  <li><a href="app-invoice-edit.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Invoice Edit">Invoice Edit</span></a>
                  </li>
                  <li><a href="app-invoice-add.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Invoice Add">Invoice Add</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="app-file-manager.html"><i className="menu-livicon"
                                                                           data-icon="save"></i><span
                className="menu-title" data-i18n="File Manager">File Manager</span></a>
              </li>
              <li className=" navigation-header"><span>UI Elements</span>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="retweet"></i><span
                className="menu-title" data-i18n="Content">Content</span></a>
                <ul className="menu-content">
                  <li><a href="content-grid.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                 data-i18n="Grid">Grid</span></a>
                  </li>
                  <li><a href="content-typography.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Typography">Typography</span></a>
                  </li>
                  <li><a href="content-text-utilities.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Text Utilities">Text Utilities</span></a>
                  </li>
                  <li><a href="content-syntax-highlighter.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Syntax Highlighter">Syntax Highlighter</span></a>
                  </li>
                  <li><a href="content-helper-classNamees.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Helper Classes">Helper Classes</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="colors.html"><i className="menu-livicon" data-icon="drop"></i><span
                className="menu-title" data-i18n="Colors">Colors</span></a>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="bulb"></i><span
                className="menu-title" data-i18n="Icons">Icons</span></a>
                <ul className="menu-content">
                  <li><a href="icons-livicons.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                   data-i18n="LivIcons">LivIcons</span></a>
                  </li>
                  <li><a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                   data-i18n="BoxIcons">BoxIcons</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="square"></i><span
                className="menu-title" data-i18n="Card">Card</span></a>
                <ul className="menu-content">
                  <li><a href="card-basic.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                               data-i18n="Basic">Basic</span></a>
                  </li>
                  <li><a href="card-actions.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                 data-i18n="Card Actions">Card Actions</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="widgets.html"><i className="menu-livicon"
                                                                  data-icon="thumbnails-small"></i><span
                className="menu-title" data-i18n="Widgets">Widgets</span><span
                className="badge badge-light-primary badge-pill badge-round float-right">New</span></a>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="box-add"></i><span
                className="menu-title" data-i18n="Components">Components</span></a>
                <ul className="menu-content">
                  <li><a href="component-alerts.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Alerts">Alerts</span></a>
                  </li>
                  <li><a href="component-buttons-basic.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Buttons">Buttons</span></a>
                  </li>
                  <li><a href="component-breadcrumbs.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Breadcrumbs">Breadcrumbs</span></a>
                  </li>
                  <li><a href="component-carousel.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Carousel">Carousel</span></a>
                  </li>
                  <li><a href="component-collapse.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Collapse">Collapse</span></a>
                  </li>
                  <li><a href="component-dropdowns.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Dropdowns">Dropdowns</span></a>
                  </li>
                  <li><a href="component-list-group.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="List Group">List Group</span></a>
                  </li>
                  <li><a href="component-modals.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Modals">Modals</span></a>
                  </li>
                  <li><a href="component-pagination.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Pagination">Pagination</span></a>
                  </li>
                  <li><a href="component-navbar.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Navbar">Navbar</span></a>
                  </li>
                  <li><a href="component-tabs-component.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Tabs Component">Tabs Component</span></a>
                  </li>
                  <li><a href="component-pills-component.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Pills Component">Pills Component</span></a>
                  </li>
                  <li><a href="component-tooltips.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Tooltips">Tooltips</span></a>
                  </li>
                  <li><a href="component-popovers.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Popovers">Popovers</span></a>
                  </li>
                  <li><a href="component-badges.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Badges">Badges</span></a>
                  </li>
                  <li><a href="component-pill-badges.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Pill Badges">Pill Badges</span></a>
                  </li>
                  <li><a href="component-progress.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Progress">Progress</span></a>
                  </li>
                  <li><a href="component-media-objects.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Media Objects">Media Objects</span></a>
                  </li>
                  <li><a href="component-spinner.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Spinner">Spinner</span></a>
                  </li>
                  <li><a href="component-bs-toast.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Toasts">Toasts</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="briefcase"></i><span
                className="menu-title" data-i18n="Extra Components">Extra Components</span></a>
                <ul className="menu-content">
                  <li><a href="ex-component-avatar.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Avatar">Avatar</span></a>
                  </li>
                  <li><a href="ex-component-chips.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Chips">Chips</span></a>
                  </li>
                  <li><a href="ex-component-divider.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Divider">Divider</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span>Forms &amp; Tables</span>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="check"></i><span
                className="menu-title" data-i18n="Form Elements">Form Elements</span></a>
                <ul className="menu-content">
                  <li><a href="form-inputs.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                data-i18n="Input">Input</span></a>
                  </li>
                  <li><a href="form-input-groups.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Input Groups">Input Groups</span></a>
                  </li>
                  <li><a href="form-number-input.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Number Input">Number Input</span></a>
                  </li>
                  <li><a href="form-select.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                data-i18n="Select">Select</span></a>
                  </li>
                  <li><a href="form-radio.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                               data-i18n="Radio">Radio</span></a>
                  </li>
                  <li><a href="form-checkbox.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="Checkbox">Checkbox</span></a>
                  </li>
                  <li><a href="form-switch.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                data-i18n="Switch">Switch</span></a>
                  </li>
                  <li><a href="form-textarea.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="Textarea">Textarea</span></a>
                  </li>
                  <li><a href="form-quill-editor.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Quill Editor">Quill Editor</span></a>
                  </li>
                  <li><a href="form-file-uploader.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="File Uploader">File Uploader</span></a>
                  </li>
                  <li><a href="form-date-time-picker.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Date &amp; Time Picker">Date &amp; Time Picker</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="form-layout.html"><i className="menu-livicon" data-icon="settings"></i><span
                className="menu-title" data-i18n="Form Layout">Form Layout</span></a>
              </li>
              <li className=" nav-item"><a href="form-wizard.html"><i className="menu-livicon"
                                                                      data-icon="priority-low"></i><span
                className="menu-title" data-i18n="Form Wizard">Form Wizard</span></a>
              </li>
              <li className=" nav-item"><a href="form-validation.html"><i className="menu-livicon"
                                                                          data-icon="check-alt"></i><span
                className="menu-title" data-i18n="Form Validation">Form Validation</span></a>
              </li>
              <li className=" nav-item"><a href="form-repeater.html"><i className="menu-livicon"
                                                                        data-icon="priority-low"></i><span
                className="menu-title" data-i18n="Form Repeater">Form Repeater</span></a>
              </li>
              <li className=" nav-item"><a href="table.html"><i className="menu-livicon" data-icon="thumbnails-big"></i><span
                className="menu-title" data-i18n="Table">Table</span></a>
              </li>
              <li className=" nav-item"><a href="table-extended.html"><i className="menu-livicon"
                                                                         data-icon="thumbnails-small"></i><span
                className="menu-title" data-i18n="Table extended">Table extended</span></a>
              </li>
              <li className=" nav-item"><a href="table-datatable.html"><i className="menu-livicon"
                                                                          data-icon="morph-map"></i><span
                className="menu-title" data-i18n="Datatable">Datatable</span></a>
              </li>
              <li className=" navigation-header"><span>Pages</span>
              </li>
              <li className=" nav-item"><a href="page-user-profile.html"><i className="menu-livicon"
                                                                            data-icon="user"></i><span
                className="menu-title" data-i18n="User Profile">User Profile</span></a>
              </li>
              <li className=" nav-item"><a href="page-faq.html"><i className="menu-livicon"
                                                                   data-icon="question-alt"></i><span
                className="menu-title" data-i18n="FAQ">FAQ</span></a>
              </li>
              <li className=" nav-item"><a href="page-knowledge-base.html"><i className="menu-livicon"
                                                                              data-icon="info-alt"></i><span
                className="menu-title" data-i18n="Knowledge Base">Knowledge Base</span></a>
              </li>
              <li className=" nav-item"><a href="page-search.html"><i className="menu-livicon"
                                                                      data-icon="search"></i><span
                className="menu-title" data-i18n="Search">Search</span></a>
              </li>
              <li className=" nav-item"><a href="page-account-settings.html"><i className="menu-livicon"
                                                                                data-icon="wrench"></i><span
                className="menu-title" data-i18n="Account Settings">Account Settings</span></a>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="users"></i><span
                className="menu-title" data-i18n="User">User</span></a>
                <ul className="menu-content">
                  <li><a href="page-users-list.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="List">List</span></a>
                  </li>
                  <li><a href="page-users-view.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="View">View</span></a>
                  </li>
                  <li><a href="page-users-edit.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Edit">Edit</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="unlink"></i><span
                className="menu-title" data-i18n="Starter kit">Starter kit</span></a>
                <ul className="menu-content">
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-1-column.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                data-i18n="1 column">1 column</span></a>
                  </li>
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-2-columns.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                data-i18n="2 columns">2 columns</span></a>
                  </li>
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-fixed-navbar.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item" data-i18n="Fixed navbar">Fixed navbar</span></a>
                  </li>
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-floating-navbar.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item" data-i18n="Floating navbar">Floating navbar</span></a>
                  </li>
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-fixed.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item" data-i18n="Fixed layout">Fixed layout</span></a>
                  </li>
                  <li><a href="../../../starter-kit/ltr/vertical-menu-template/sk-layout-static.html"><i
                    className="bx bx-right-arrow-alt"></i><span className="menu-item" data-i18n="Static layout">Static layout</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="unlock"></i><span
                className="menu-title" data-i18n="Authentication">Authentication</span></a>
                <ul className="menu-content">
                  <li><a href="auth-login.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                               data-i18n="Login">Login</span></a>
                  </li>
                  <li><a href="auth-register.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="Register">Register</span></a>
                  </li>
                  <li><a href="auth-forgot-password.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Forgot Password">Forgot Password</span></a>
                  </li>
                  <li><a href="auth-reset-password.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Reset Password">Reset Password</span></a>
                  </li>
                  <li><a href="auth-lock-screen.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Lock Screen">Lock Screen</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="share"></i><span
                className="menu-title" data-i18n="Miscellaneous">Miscellaneous</span></a>
                <ul className="menu-content">
                  <li><a href="page-coming-soon.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Coming Soon">Coming Soon</span></a>
                  </li>
                  <li><a href="#"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                 data-i18n="Error">Error</span></a>
                    <ul className="menu-content">
                      <li><a href="error-404.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="404">404</span></a>
                      </li>
                      <li><a href="error-500.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="500">500</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="page-not-authorized.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Not Authorized">Not Authorized</span></a>
                  </li>
                  <li><a href="page-maintenance.html"><i className="bx bx-right-arrow-alt"></i><span
                    className="menu-item" data-i18n="Maintenance">Maintenance</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span>Charts &amp; Maps</span>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="pie-chart"></i><span
                className="menu-title" data-i18n="Charts">Charts</span><span
                className="badge badge-pill badge-round badge-light-info float-right mr-2">3</span></a>
                <ul className="menu-content">
                  <li><a href="chart-apex.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                               data-i18n="Apex">Apex</span></a>
                  </li>
                  <li><a href="chart-chartjs.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                  data-i18n="Chartjs">Chartjs</span></a>
                  </li>
                  <li><a href="chart-chartist.html"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                                   data-i18n="Chartist">Chartist</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a href="maps-google.html"><i className="menu-livicon"
                                                                      data-icon="globe"></i><span className="menu-title"
                                                                                                  data-i18n="Google Maps">Google Maps</span></a>
              </li>
              <li className=" navigation-header"><span>Extensions</span>
              </li>
              <li className=" nav-item"><a href="ext-component-sweet-alerts.html"><i className="menu-livicon"
                                                                                     data-icon="warning-alt"></i><span
                className="menu-title" data-i18n="Sweet Alert">Sweet Alert</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-toastr.html"><i className="menu-livicon"
                                                                               data-icon="morph-map"></i><span
                className="menu-title" data-i18n="Toastr">Toastr</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-noui-slider.html"><i className="menu-livicon"
                                                                                    data-icon="settings"></i><span
                className="menu-title" data-i18n="NoUi Slider">NoUi Slider</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-drag-drop.html"><i className="menu-livicon"
                                                                                  data-icon="priority-high"></i><span
                className="menu-title" data-i18n="Drag &amp; Drop">Drag &amp; Drop</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-tour.html"><i className="menu-livicon"
                                                                             data-icon="paper-plane"></i><span
                className="menu-title" data-i18n="Tour">Tour</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-swiper.html"><i className="menu-livicon"
                                                                               data-icon="morph-orientation-tablet"></i><span
                className="menu-title" data-i18n="Swiper">Swiper</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-treeview.html"><i className="menu-livicon"
                                                                                 data-icon="morph-sort-alt"></i><span
                className="menu-title" data-i18n="Treeview">Treeview</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-block-ui.html"><i className="menu-livicon"
                                                                                 data-icon="expand"></i><span
                className="menu-title" data-i18n="Block-UI">Block-UI</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-media-player.html"><i className="menu-livicon"
                                                                                     data-icon="music"></i><span
                className="menu-title" data-i18n="Media Player">Media Player</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-miscellaneous.html"><i className="menu-livicon"
                                                                                      data-icon="loader-10"></i><span
                className="menu-title" data-i18n="Miscellaneous">Miscellaneous</span></a>
              </li>
              <li className=" nav-item"><a href="ext-component-i18n.html"><i className="menu-livicon"
                                                                             data-icon="globe"></i><span
                className="menu-title" data-i18n="i18n">i18n</span></a>
              </li>
              <li className=" navigation-header"><span>Others</span>
              </li>
              <li className=" nav-item"><a href="#"><i className="menu-livicon" data-icon="morph-menu-arrow-bottom"></i><span
                className="menu-title" data-i18n="Menu Levels">Menu Levels</span></a>
                <ul className="menu-content">
                  <li><a href="#"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                 data-i18n="Second Level">Second Level</span></a>
                  </li>
                  <li><a href="#"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                 data-i18n="Second Level">Second Level</span></a>
                    <ul className="menu-content">
                      <li><a href="#"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                     data-i18n="Third Level">Third Level</span></a>
                      </li>
                      <li><a href="#"><i className="bx bx-right-arrow-alt"></i><span className="menu-item"
                                                                                     data-i18n="Third Level">Third Level</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="disabled nav-item"><a href="#"><i className="menu-livicon"
                                                               data-icon="morph-preview"></i><span
                className="menu-title" data-i18n="Disabled Menu">Disabled Menu</span></a>
              </li>
              <li className=" navigation-header"><span>Support</span>
              </li>
              <li className=" nav-item"><a
                href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation"><i
                className="menu-livicon" data-icon="morph-folder"></i><span className="menu-title"
                                                                            data-i18n="Documentation">Documentation</span></a>
              </li>
              <li className=" nav-item"><a href="https://pixinvent.ticksy.com/"><i className="menu-livicon"
                                                                                   data-icon="help"></i><span
                className="menu-title" data-i18n="Raise Support">Raise Support</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row">
            </div>
            <div className="content-body">
              <section id="dashboard-ecommerce">
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-12 dashboard-greetings">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="greeting-text">Congratulations John!</h3>
                        <p className="mb-0">Best seller of the month</p>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="dashboard-content-left">
                              <h1 className="text-primary font-large-2 text-bold-500">$89k</h1>
                              <p>You have done 57.6% more sales today.</p>
                              <button type="button" className="btn btn-primary glow">View Sales</button>
                            </div>
                            <div className="dashboard-content-right">
                              <img src="../../../app-assets/images/icon/cup.png" height="220" width="220"
                                   className="img-fluid"
                                   alt="Dashboard Ecommerce"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-12 dashboard-visit">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Visits of 2019</h4>
                        <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <div id="multi-radial-chart"></div>
                          <ul className="list-inline d-flex justify-content-around mb-0">
                            <li><span className="bullet bullet-xs bullet-primary mr-50"></span>Target</li>
                            <li><span className="bullet bullet-xs bullet-danger mr-50"></span>Mart</li>
                            <li><span className="bullet bullet-xs bullet-warning mr-50"></span>Ebay</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12 dashboard-users">
                    <div className="row  ">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-sm-6 col-12 dashboard-users-success">
                            <div className="card text-center">
                              <div className="card-content">
                                <div className="card-body py-1">
                                  <div
                                    className="badge-circle badge-circle-lg badge-circle-light-success mx-auto mb-50">
                                    <i className="bx bx-briefcase-alt font-medium-5"></i>
                                  </div>
                                  <div className="text-muted line-ellipsis">New Products</div>
                                  <h3 className="mb-0">1.2k</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12 dashboard-users-danger">
                            <div className="card text-center">
                              <div className="card-content">
                                <div className="card-body py-1">
                                  <div className="badge-circle badge-circle-lg badge-circle-light-danger mx-auto mb-50">
                                    <i className="bx bx-user font-medium-5"></i>
                                  </div>
                                  <div className="text-muted line-ellipsis">New Users</div>
                                  <h3 className="mb-0">45.6k</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-6 col-12 dashboard-revenue-growth">
                            <div className="card">
                              <div className="card-header d-flex justify-content-between align-items-center pb-0">
                                <h4 className="card-title">Revenue Growth</h4>
                                <div className="d-flex align-items-end justify-content-end">
                                  <span className="mr-25">$25,980</span>
                                  <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                                </div>
                              </div>
                              <div className="card-content">
                                <div className="card-body pb-0">
                                  <div id="revenue-growth-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8 col-12 dashboard-order-summary">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-8 col-12 order-summary border-right pr-md-0">
                          <div className="card mb-0">
                            <div className="card-header d-flex justify-content-between align-items-center">
                              <h4 className="card-title">Order Summary</h4>
                              <div className="d-flex">
                                <button type="button" className="btn btn-sm btn-light-primary mr-1">Month</button>
                                <button type="button" className="btn btn-sm btn-primary glow">Week</button>
                              </div>
                            </div>
                            <div className="card-content">
                              <div className="card-body p-0">
                                <div id="order-summary-chart"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 pl-md-0">
                          <div className="card mb-0">
                            <div className="card-header pb-50">
                              <h4 className="card-title">Sales History</h4>
                            </div>
                            <div className="card-content">
                              <div className="card-body py-1">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div className="sales-item-name">
                                    <p className="mb-0">Airpods</p>
                                    <small className="text-muted">30 min ago</small>
                                  </div>
                                  <div className="sales-item-amount">
                                    <h6 className="mb-0"><span className="text-success">+</span> $50</h6>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div className="sales-item-name">
                                    <p className="mb-0">iPhone</p>
                                    <small className="text-muted">2 hour ago</small>
                                  </div>
                                  <div className="sales-item-amount">
                                    <h6 className="mb-0"><span className="text-danger">-</span> $59</h6>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="sales-item-name">
                                    <p className="mb-0">Macbook</p>
                                    <small className="text-muted">1 day ago</small>
                                  </div>
                                  <div className="sales-item-amount">
                                    <h6 className="mb-0"><span className="text-success">+</span> $12</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer border-top pb-0">
                                <h5>Total Sales</h5>
                                <span className="text-primary text-bold-500">$82,950.96</span>
                                <div className="progress progress-bar-primary progress-sm my-50">
                                  <div className="progress-bar" role="progressbar" aria-valuenow="78"
                                       style={{width:'78%'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-12 dashboard-latest-update">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center pb-50">
                        <h4 className="card-title">Latest Update</h4>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"
                                  id="dropdownMenuButtonSec"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            2019
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonSec">
                            <a className="dropdown-item" href="#">2019</a>
                            <a className="dropdown-item" href="#">2018</a>
                            <a className="dropdown-item" href="#">2017</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body p-0 pb-1">
                          <ul className="list-group list-group-flush">
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-primary m-0">
                                    <div className="avatar-content">
                                      <i className="bx bxs-zap text-primary font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Products</span>
                                  <small className="text-muted d-block">1.2k New Products</small>
                                </div>
                              </div>
                              <span>10.6k</span>
                            </li>
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-info m-0">
                                    <div className="avatar-content">
                                      <i className="bx bx-stats text-info font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Sales</span>
                                  <small className="text-muted d-block">39.4k New Sales</small>
                                </div>
                              </div>
                              <span>26M</span>
                            </li>
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-danger m-0">
                                    <div className="avatar-content">
                                      <i className="bx bx-credit-card text-danger font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Revenue</span>
                                  <small className="text-muted d-block">43.5k New Revenue</small>
                                </div>
                              </div>
                              <span>15.89M</span>
                            </li>
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-success m-0">
                                    <div className="avatar-content">
                                      <i className="bx bx-dollar text-success font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Cost</span>
                                  <small className="text-muted d-block">Total Expenses</small>
                                </div>
                              </div>
                              <span>1.25B</span>
                            </li>
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-primary m-0">
                                    <div className="avatar-content">
                                      <i className="bx bx-user text-primary font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Users</span>
                                  <small className="text-muted d-block">New Users</small>
                                </div>
                              </div>
                              <span>1.2k</span>
                            </li>
                            <li
                              className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                              <div className="list-left d-flex">
                                <div className="list-icon mr-1">
                                  <div className="avatar bg-rgba-danger m-0">
                                    <div className="avatar-content">
                                      <i className="bx bx-edit-alt text-danger font-size-base"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-content">
                                  <span className="list-title">Total Visits</span>
                                  <small className="text-muted d-block">New Visits</small>
                                </div>
                              </div>
                              <span>4.6k</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-12 dashboard-earning-swiper" id="widget-earnings">
                    <div className="card">
                      <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                        <h5 className="card-title"><i className="bx bx-dollar font-medium-5 align-middle"></i> <span
                          className="align-middle">Earnings</span></h5>
                        <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                      </div>
                      <div className="card-content">
                        <div className="card-body py-1 px-0">
                          <div className="widget-earnings-swiper swiper-container p-1">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide rounded swiper-shadow py-50 px-2 d-flex align-items-center"
                                   id="repo-design">
                                <i className="bx bx-pyramid mr-1 font-weight-normal font-medium-4"></i>
                                <div className="swiper-text">
                                  <div className="swiper-heading">Repo Design</div>
                                  <small className="d-block">Gitlab</small>
                                </div>
                              </div>
                              <div className="swiper-slide rounded swiper-shadow py-50 px-2 d-flex align-items-center"
                                   id="laravel-temp">
                                <i className="bx bx-sitemap mr-50 font-large-1"></i>
                                <div className="swiper-text">
                                  <div className="swiper-heading">Designer</div>
                                  <small className="d-block">Women Clothes</small>
                                </div>
                              </div>
                              <div className="swiper-slide rounded swiper-shadow py-50 px-2 d-flex align-items-center"
                                   id="admin-theme">
                                <i className="bx bx-check-shield mr-50 font-large-1"></i>
                                <div className="swiper-text">
                                  <div className="swiper-heading">Best Sellers</div>
                                  <small className="d-block">Clothing</small>
                                </div>
                              </div>
                              <div className="swiper-slide rounded swiper-shadow py-50 px-2 d-flex align-items-center"
                                   id="ux-devloper">
                                <i className="bx bx-devices mr-50 font-large-1"></i>
                                <div className="swiper-text">
                                  <div className="swiper-heading">Admin Template</div>
                                  <small className="d-block">Global Network</small>
                                </div>
                              </div>
                              <div className="swiper-slide rounded swiper-shadow py-50 px-2 d-flex align-items-center"
                                   id="marketing-guide">
                                <i className="bx bx-book-bookmark mr-50 font-large-1"></i>
                                <div className="swiper-text">
                                  <div className="swiper-heading">Marketing Guide</div>
                                  <small className="d-block">Books</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-wrapper-content">
                        <div className="wrapper-content" data-earnings="repo-design">
                          <div className="widget-earnings-scroll table-responsive">
                            <table className="table table-borderless widget-earnings-width mb-0">
                              <tbody>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-10.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Jerry Lter</h6>
                                      <span className="font-small-2">Designer</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-info progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="33"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'33%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-warning">- $280</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Pauly uez</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-success progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="10"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'10%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-success">+ $853</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lary Masey</h6>
                                      <span className="font-small-2">Marketing</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-primary progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="15"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'15%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">+ $125</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-12.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lula Taylor</h6>
                                      <span className="font-small-2">Degigner</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-danger progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="35"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'35%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $310</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="wrapper-content" data-earnings="laravel-temp">
                          <div className="widget-earnings-scroll table-responsive">
                            <table className="table table-borderless widget-earnings-width mb-0">
                              <tbody>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-9.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Jesus Lter</h6>
                                      <span className="font-small-2">Designer</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-info progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="28"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'28%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-info">- $280</span></td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-10.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Pauly Dez</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-success progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'90%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-success">+ $83</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lary Masey</h6>
                                      <span className="font-small-2">Marketing</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-primary progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="15"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'15%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">+ $125</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-12.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lula Taylor</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-danger progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="35"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'35%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $310</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="wrapper-content" data-earnings="admin-theme">
                          <div className="widget-earnings-scroll table-responsive">
                            <table className="table table-borderless widget-earnings-width mb-0">
                              <tbody>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-25.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Mera Lter</h6>
                                      <span className="font-small-2">Designer</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-info progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="52"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'52%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-info">- $180</span></td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-15.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Pauly Dez</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-success progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'90%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-success">+ $553</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">jini mara</h6>
                                      <span className="font-small-2">Marketing</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-primary progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="15"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'15%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">+ $125</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-12.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lula Taylor</h6>
                                      <span className="font-small-2">UX</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-danger progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="35"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'35%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $150</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="wrapper-content" data-earnings="ux-devloper">
                          <div className="widget-earnings-scroll table-responsive">
                            <table className="table table-borderless widget-earnings-width mb-0">
                              <tbody>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-16.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Drako Lter</h6>
                                      <span className="font-small-2">Designer</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-info progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="38"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'38%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $280</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Pauly Dez</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-success progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'90%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-success">+ $853</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lary Masey</h6>
                                      <span className="font-small-2">Marketing</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-primary progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="15"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'15%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">+ $125</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-2.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lvia Taylor</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-danger progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'75%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $360</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="wrapper-content" data-earnings="marketing-guide">
                          <div className="widget-earnings-scroll table-responsive">
                            <table className="table table-borderless widget-earnings-width mb-0">
                              <tbody>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-19.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">yono Lter</h6>
                                      <span className="font-small-2">Designer</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-info progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="28"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'28%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">- $270</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Pauly Dez</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-success progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'90%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-success">+ $853</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-12.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lary Masey</h6>
                                      <span className="font-small-2">Marketing</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-primary progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="15"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'15%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-primary">+ $225</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="pr-75">
                                  <div className="media align-items-center">
                                    <a className="media-left mr-50" href="#">
                                      <img src="../../../app-assets/images/portrait/small/avatar-s-25.jpg" alt="avatar"
                                           className="rounded-circle" height="30" width="30"/>
                                    </a>
                                    <div className="media-body">
                                      <h6 className="media-heading mb-0">Lula Taylor</h6>
                                      <span className="font-small-2">Devloper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-0 w-25">
                                  <div className="progress progress-bar-danger progress-sm mb-0">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="35"
                                         aria-valuemin="80"
                                         aria-valuemax="100" style={{width:'35%'}}></div>
                                  </div>
                                </td>
                                <td className="text-center"><span className="badge badge-light-danger">- $350</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-12 dashboard-marketing-campaign">
                    <div className="card marketing-campaigns">
                      <div className="card-header d-flex justify-content-between align-items-center pb-1">
                        <h4 className="card-title">Marketing campaigns</h4>
                        <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                      </div>
                      <div className="card-content">
                        <div className="card-body pb-0">
                          <div className="row">
                            <div className="col-md-9 col-12">
                              <div className="d-inline-block">
                                <div className="d-flex market-statistics-1">
                                  <div id="donut-success-chart"></div>
                                  <div className="statistics-data my-auto">
                                    <div className="statistics">
                                      <span className="font-medium-2 mr-50 text-bold-600">25,756</span><span
                                      className="text-success">(+16.2%)</span>
                                    </div>
                                    <div className="statistics-date">
                                      <i className="bx bx-radio-circle font-small-1 text-success mr-25"></i>
                                      <small className="text-muted">May 12, 2019</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-inline-block">
                                <div className="d-flex mb-75 market-statistics-2">
                                  <div id="donut-danger-chart"></div>
                                  <div className="statistics-data my-auto">
                                    <div className="statistics">
                                      <span className="font-medium-2 mr-50 text-bold-600">5,352</span><span
                                      className="text-danger">(-4.9%)</span>
                                    </div>
                                    <div className="statistics-date">
                                      <i className="bx bx-radio-circle font-small-1 text-success mr-25"></i>
                                      <small className="text-muted">Jul 26, 2019</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-12 text-md-right">
                              <button className="btn btn-sm btn-primary glow mt-md-2 mb-1">View Report</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table id="table-marketing-campaigns"
                               className="table table-borderless table-marketing-campaigns mb-0">
                          <thead>
                          <tr>
                            <th>Campaign</th>
                            <th>Growth</th>
                            <th>Charges</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="py-1 line-ellipsis">
                              <img className="rounded-circle mr-1" src="../../../app-assets/images/icon/fs.png"
                                   alt="card" height="24"
                                   width="24"/>Fastrack Watches
                            </td>
                            <td className="py-1">
                              <i className="bx bx-trending-up text-success align-middle mr-50"></i><span>30%</span>
                            </td>
                            <td className="py-1">$5,536</td>
                            <td className="text-success py-1">Active</td>
                            <td className="text-center py-1">
                              <div className="dropdown">
                    <span
                      className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1"></i> edit</a>
                                  <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1"></i> delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 line-ellipsis">
                              <img className="rounded-circle mr-1" src="../../../app-assets/images/icon/puma.png"
                                   alt="card" height="24"
                                   width="24"/>Puma Shoes
                            </td>
                            <td className="py-1">
                              <i className="bx bx-trending-down text-danger align-middle mr-50"></i><span>15.5%</span>
                            </td>
                            <td className="py-1">$1,569</td>
                            <td className="text-success py-1">Active</td>
                            <td className="text-center py-1">
                              <div className="dropdown">
                    <span
                      className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                    </span>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1"></i> edit</a>
                                  <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1"></i> delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 line-ellipsis">
                              <img className="rounded-circle mr-1" src="../../../app-assets/images/icon/nike.png"
                                   alt="card" height="24"
                                   width="24"/>Nike Air Jordan
                            </td>
                            <td className="py-1">
                              <i className="bx bx-trending-up text-success align-middle mr-50"></i><span>70.30%</span>
                            </td>
                            <td className="py-1">$23,859</td>
                            <td className="text-danger py-1">Closed</td>
                            <td className="text-center py-1">
                              <div className="dropdown">
                    <span
                      className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                    </span>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1"></i> edit</a>
                                  <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1"></i> delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 line-ellipsis">
                              <img className="rounded-circle mr-1" src="../../../app-assets/images/icon/one-plus.png"
                                   alt="card"
                                   height="24" width="24"/>Oneplus 7 pro
                            </td>
                            <td className="py-1">
                              <i className="bx bx-trending-up text-success align-middle mr-50"></i><span>10.4%</span>
                            </td>
                            <td className="py-1">$9,523</td>
                            <td className="text-success py-1">Active</td>
                            <td className="text-center py-1">
                              <div className="dropdown">
                    <span
                      className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                    </span>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1"></i> edit</a>
                                  <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1"></i> delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 line-ellipsis">
                              <img className="rounded-circle mr-1" src="../../../app-assets/images/icon/google.png"
                                   alt="card"
                                   height="24" width="24"/>Google Pixel 4 xl
                            </td>
                            <td className="py-1"><i
                              className="bx bx-trending-down text-danger align-middle mr-50"></i><span>-62.38%</span>
                            </td>
                            <td className="py-1">12,897</td>
                            <td className="text-danger py-1">Closed</td>
                            <td className="text-center py-1">
                              <div className="dropup">
                    <span
                      className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                    </span>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1"></i> edit</a>
                                  <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1"></i> delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="customizer d-none d-md-block"><a className="customizer-close" href="#"><i
          className="bx bx-x"></i></a><a className="customizer-toggle" href="#"><i
          className="bx bx-cog bx bx-spin white"></i></a>
          <div className="customizer-content p-2">
            <h4 className="text-uppercase mb-0">Theme Customizer</h4>
            <small>Customize & Preview in Real Time</small>
            <hr/>
            <h5 className="mt-1">Theme Layout</h5>
            <div className="theme-layouts">
              <div className="d-flex justify-content-start">
                <div className="mx-50">
                  <fieldset>
                    <div className="radio">
                      <input type="radio" name="layoutOptions" value="false" id="radio-light" className="layout-name"
                             data-layout=""
                             checked/>
                      <label htmlFor="radio-light">Light</label>
                    </div>
                  </fieldset>
                </div>
                <div className="mx-50">
                  <fieldset>
                    <div className="radio">
                      <input type="radio" name="layoutOptions" value="false" id="radio-dark" className="layout-name"
                             data-layout="dark-layout"/>
                      <label htmlFor="radio-dark">Dark</label>
                    </div>
                  </fieldset>
                </div>
                <div className="mx-50">
                  <fieldset>
                    <div className="radio">
                      <input type="radio" name="layoutOptions" value="false" id="radio-semi-dark"
                             className="layout-name"
                             data-layout="semi-dark-layout"/>
                      <label htmlFor="radio-semi-dark">Semi Dark</label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <hr/>
            <div id="customizer-theme-colors">
              <h5>Menu Colors</h5>
              <ul className="list-inline unstyled-list">
                <li className="color-box bg-primary selected" data-color="theme-primary"></li>
                <li className="color-box bg-success" data-color="theme-success"></li>
                <li className="color-box bg-danger" data-color="theme-danger"></li>
                <li className="color-box bg-info" data-color="theme-info"></li>
                <li className="color-box bg-warning" data-color="theme-warning"></li>
                <li className="color-box bg-dark" data-color="theme-dark"></li>
              </ul>
              <hr/>
            </div>
            <div id="menu-icon-animation">
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon-animation-title">
                  <h5 className="pt-25">Icon Animation</h5>
                </div>
                <div className="icon-animation-switch">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" checked id="icon-animation-switch"/>
                    <label className="custom-control-label" htmlFor="icon-animation-switch"></label>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
            <div className="collapse-sidebar d-flex justify-content-between">
              <div className="collapse-option-title">
                <h5 className="pt-25">Collapse Menu</h5>
              </div>
              <div className="collapse-option-switch">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="collapse-sidebar-switch"/>
                  <label className="custom-control-label" htmlFor="collapse-sidebar-switch"></label>
                </div>
              </div>
            </div>
            <hr/>
            <div id="customizer-navbar-colors">
              <h5>Navbar Colors</h5>
              <ul className="list-inline unstyled-list">
                <li className="color-box bg-white border selected" data-navbar-default=""></li>
                <li className="color-box bg-primary" data-navbar-color="bg-primary"></li>
                <li className="color-box bg-success" data-navbar-color="bg-success"></li>
                <li className="color-box bg-danger" data-navbar-color="bg-danger"></li>
                <li className="color-box bg-info" data-navbar-color="bg-info"></li>
                <li className="color-box bg-warning" data-navbar-color="bg-warning"></li>
                <li className="color-box bg-dark" data-navbar-color="bg-dark"></li>
              </ul>
              <small><strong>Note :</strong> This option with work only on sticky navbar when you scroll page.</small>
              <hr/>
            </div>
            <h5>Navbar Type</h5>
            <div className="navbar-type d-flex justify-content-start">
              <div className="hidden-ele mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="navbarType" value="false" id="navbar-hidden"/>
                    <label htmlFor="navbar-hidden">Hidden</label>
                  </div>
                </fieldset>
              </div>
              <div className="mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="navbarType" value="false" id="navbar-static"/>
                    <label htmlFor="navbar-static">Static</label>
                  </div>
                </fieldset>
              </div>
              <div className="mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="navbarType" value="false" id="navbar-sticky" checked/>
                    <label htmlFor="navbar-sticky">Fixed</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <hr/>
            <h5>Footer Type</h5>
            <div className="footer-type d-flex justify-content-start">
              <div className="mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="footerType" value="false" id="footer-hidden"/>
                    <label htmlFor="footer-hidden">Hidden</label>
                  </div>
                </fieldset>
              </div>
              <div className="mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="footerType" value="false" id="footer-static" checked/>
                    <label htmlFor="footer-static">Static</label>
                  </div>
                </fieldset>
              </div>
              <div className="mx-50">
                <fieldset>
                  <div className="radio">
                    <input type="radio" name="footerType" value="false" id="footer-sticky"/>
                    <label htmlFor="footer-sticky" className="">Sticky</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <hr/>
            <div className="card-shadow d-flex justify-content-between py-25">
              <div className="hide-scroll-title">
                <h5 className="pt-25">Card Shadow</h5>
              </div>
              <div className="card-shadow-switch">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" checked id="card-shadow-switch"/>
                  <label className="custom-control-label" htmlFor="card-shadow-switch"></label>
                </div>
              </div>
            </div>
            <hr/>
            <div className="hide-scroll-to-top d-flex justify-content-between py-25">
              <div className="hide-scroll-title">
                <h5 className="pt-25">Hide Scroll To Top</h5>
              </div>
              <div className="hide-scroll-top-switch">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="hide-scroll-top-switch"/>
                  <label className="custom-control-label" htmlFor="hide-scroll-top-switch"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-now"><a href="https://1.envato.market/frest_admin" target="_blank"
                                    className="btn btn-danger">Buy Now</a>
  
        </div>
        <div className="widget-chat-demo">
          <button className="btn btn-primary chat-demo-button glow px-1"><i className="livicon-evo"
                                                                            data-options="name: comments.svg; style: lines; size: 24px; strokeColor: #fff; autoPlay: true; repeat: loop;"></i>
          </button>
    
          <div className="widget-chat widget-chat-demo d-none">
            <div className="card mb-0">
              <div className="card-header border-bottom p-0">
                <div className="media m-75">
                  <a href="JavaScript:void(0);">
                    <div className="avatar mr-75">
                      <img src="../../../app-assets/images/portrait/small/avatar-s-2.jpg" alt="avtar images" width="32"
                           height="32"/>
                      <span className="avatar-status-online"></span>
                    </div>
                  </a>
                  <div className="media-body">
                    <h6 className="media-heading mb-0 pt-25"><a href="javaScript:void(0);">Kiara Cruiser</a></h6>
                    <span className="text-muted font-small-3">Active</span>
                  </div>
                  <i className="bx bx-x widget-chat-close float-right my-auto cursor-pointer"></i>
                </div>
              </div>
              <div className="card-body widget-chat-container widget-chat-demo-scroll">
                <div className="chat-content">
                  <div className="badge badge-pill badge-light-secondary my-1">today</div>
                  <div className="chat">
                    <div className="chat-body">
                      <div className="chat-message">
                        <p>How can we help? 😄</p>
                        <span className="chat-time">7:45 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-body">
                      <div className="chat-message">
                        <p>Hey John, I am looking for the best admin template.</p>
                        <p>Could you please help me to find it out? 🤔</p>
                        <span className="chat-time">7:50 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-body">
                      <div className="chat-message">
                        <p>Stack admin is the responsive bootstrap 4 admin template.</p>
                        <span className="chat-time">8:01 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top p-1">
                <form className="d-flex" onSubmit="widgetChatMessageDemo();" action="javascript:void(0);">
                  <input type="text" className="form-control chat-message-demo mr-75" placeholder="Type here..."/>
                  <button type="submit" className="btn btn-primary glow px-1"><i className="bx bx-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
  
        </div>
        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>
        <footer className="footer footer-static footer-light">
          <p className="clearfix mb-0"><span className="float-left d-inline-block">2019 &copy; PIXINVENT</span><span
            className="float-right d-sm-inline-block d-none">Crafted with<i
            className="bx bxs-heart pink mx-50 font-small-3"></i>by<a className="text-uppercase"
                                                                      href="https://1.envato.market/pixinvent_portfolio"
                                                                      target="_blank">Pixinvent</a></span>
            <button className="btn btn-primary btn-icon scroll-top" type="button"><i className="bx bx-up-arrow-alt"></i>
            </button>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
