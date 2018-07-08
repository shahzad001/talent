

<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Prudence - Bootstrap Admin Template</title>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="x-ua-compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="yes" name="apple-touch-fullscreen">

    <link rel="stylesheet" type="text/css" href="template-assets/bootstrap/css/bootstrap.min.css">


    <link rel="stylesheet" type="text/css" href="template-assets/css/tokenfield-typeahead.min.css">
    <link rel="stylesheet" type="text/css" href="template-assets/css/bootstrap-tokenfield.min.css">

    <link rel="stylesheet" type="text/css" href="template-assets/css/style.css">

</head>

<body>

<div id="page-container">


    <!-- LEFT SIDEBAR -->
    <nav id="sidebar" class="sidenav">

        <div class="sidebar-wrapper">

            <!-- Profile Sidebar -->
            <div class="profile-sidebar">
                <div class="avatar">
                    <img src="template-assets/images/profiles/no-img.jpg" alt="">
                </div>
                <div class="profile-name">
                    Jane Doe
                    <button class="btn-prof" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><span class="icon ti-user mr-3"></span>Profile</a>
                        <a class="dropdown-item" href="#"><span class="icon ti-email mr-3"></span>Inbox</a>
                        <a class="dropdown-item" href="#"><span class="icon ti-settings mr-3"></span>Settings</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#"><span class="icon ti-power-off mr-3"></span>Logout</a>
                    </div>
                </div>
                <div class="profile-title">
                    Administrator
                </div>
            </div>
            <!-- /END Profile Sidebar -->

            <!-- Main Menu -->
            <!--
            Remove .collapsed class to indicate <a> link on collapse state.
            Add .show class to make accordion menu collapsed.
            And add .active class to list (<li>) to indicate active link (on last child).
            -->
            <ul class="main-menu" id="menus">

                <li><a href="index.html">Dashboard</a></li>

                <li class="header">PROJECTS</li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="tasks.html">Tasks</a></li>

                <li class="header">TALENT POOL</li>
                <li><a href="talent-pools.html">Talent Dashboard</a></li>
                <li><a href="groups.html">Groups</a></li>
                <li><a href="premium-talents.html">Premium Talents</a></li>
                <li><a href="talents.html">Talents</a></li>
                <li><a href="talent-sourcing.html">Talent Sourcing </a></li>

                <li class="header">PROPOSAL</li>
                <li><a href="assignment.html">Assignment</a></li>
                <li><a href="rfp.html">RFP</a></li>
                <li><a href="rfi.html">RFI</a></li>

                <li class="header">INVOICE & PAYMENTS</li>
                <li><a href="invoice.html">Invoice</a></li>
                <li><a href="transcations.html">Transcations</a></li>

                <li class="header">REPORTS</li>
                <li><a href="activity-report.html">Activity Report</a></li>
                <li><a href="spend-report.html">Spend Report</a></li>
                <li><a href="task-report.html">Task Report</a></li>

                <li class="header">SETTINGS</li>

                <li><a href="user-management.html">User Management</a></li>
                <li><a href="my-profile.html">My Profile</a></li>
                <li><a href="change-password.html">Change Password</a></li>



                <li><a href="administrative-settings.html">Global Settings</a></li>



            </ul>
            <!-- /END Main Menu -->

        </div>

    </nav>
    <!-- LEFT SIDEBAR -->

    <!-- HEADER -->
    <header id="page-header" class="pageheader">

        <div class="content-header">

            <div class="navbar-header">
                <button type="button" class="btn-bars btn">
                    <span class="ti-menu"></span>
                </button>
                <div class="app-title"><!-- Logo -->
                    <!--Prudence-->
                    <img src="template-assets/images/logo_white.png" alt="">
                </div>
                <div class="mobile-nav">
                    <button class="btn" type="button" id="mobileBtn">
                        <i class="ti-layout-grid2-alt"></i>
                    </button>
                </div>
            </div>

            <!-- Button list (include search form) -->
            <ul class="nav navbar-nav navbar-right">

                <li class="dropdown dropdown-search"><!-- Form and button search -->

                    <!-- Search button (only show on particular screen -->
                    <button class="btn search-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="ti-search"></span>
                    </button>
                    <div class="dropdown-menu dropdown-search-container"><!-- dropdown menu for SEARCH toggle button -->
                        <div class="search-container">
                            <span class="ti-search"></span>
                            <input type="text" placeholder="Search" autocomplete="off">
                        </div>
                    </div><!-- .dropdown-search-container -->
                    <!-- Search form with expanded style -->
                    <div class="search-expand-container">
                        <span class="ti-search"></span>
                        <input type="text" class="expand-search" placeholder="Search" autocomplete="off">
                    </div><!-- .search-expand-container -->
                </li><!-- /END Form and button search -->

                <li class="dropdown dropdown-help"><!-- Help dropdown -->
                    <!-- Help toggle button -->
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="ti-help"></span>
                    </button>
                    <div class="dropdown-menu dropdown-help-menu"><!-- dropdown menu for HELP toggle button -->
                        <div class="dropdown-header">Help & Support</div><!-- HELP dropdown header -->
                        <ul class="help-list" id="helps"><!-- dropdown help list -->
                            <li>
                                <a class="pr-help collapsed" data-toggle="collapse" href="#help1" aria-expanded="true">
                                    <span class="ti-user"></span>Profile settings
                                </a>
                                <ul id="help1" class="collapse" data-parent="#helps">
                                    <li>
                                        <span class="icon ti-panel"></span>
                                        <div class="ctn-info">
                                            Das yurio samiun kareo san<br>
                                            <a href="#">Use activity log</a>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="icon ti-save-alt"></span>
                                        <div class="ctn-info">
                                            Standard cus imorasun ko ganiu kobe kobe<br>
                                            <a href="#">View more</a>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="icon ti-reload"></span>
                                        <div class="ctn-info">
                                            Feel sami qor tay vix<br>
                                            <a href="#">View more</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="pr-help collapsed" data-toggle="collapse" href="#help2" aria-expanded="true">
                                    <span class="ti-email"></span>Who can contact me?
                                </a>
                                <ul id="help2" class="collapse" data-parent="#helps">
                                    <li>
                                        <span class="icon ti-panel"></span>
                                        <div class="ctn-info">
                                            Hal pertama yang mesti diingat adalah bagaimana kita bisa survive<br>
                                            <input type="text" class="form-control form-control-sm" placeholder="youremail@example.com">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="pr-help collapsed" data-toggle="collapse" href="#help3" aria-expanded="true">
                                    <span class="ti-na"></span>How to block someone?
                                </a>
                                <ul id="help3" class="collapse" data-parent="#helps">
                                    <li>
                                        <span class="icon ti-panel"></span>
                                        <div class="ctn-info">
                                            Hal pertama yang mesti diingat adalah bagaimana kita bisa survive<br>
                                            <a href="index.html">Find out more</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul><!-- .help-list -->
                        <div class="dropdown-footer">
                            <a href="javascript:void(0)">see more settings</a>
                        </div>
                    </div><!-- .dropdown-help-menu -->
                </li><!-- /END Help dropdown -->

                <li class="dropdown dropdown-notifications"><!-- Notifications dropdown -->
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        <span class="ti-bell"></span>
                        <span class="badge badge-pill badge-danger">5</span>
                    </button>
                    <div class="dropdown-menu"><!-- notification dropdown lists -->
                        <div class="dropdown-header">Notifications (5)</div>
                        <div class="list-group notification-list scrollbar-inner">
                            <a href="#" class="list-group-item list-group-item-action active">
                                <div class="notif-icon bg-primary">
                                    <i class="fa fa-comment"></i>
                                </div>
                                <div class="notif-info">
                                    <strong>Aaron Andriy</strong> commented your status
                                    <span>1 hour ago</span>
                                </div>
                                <div class="unread"></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="notif-icon">
                                    <img src="template-assets/images/profiles/no-img.jpg" alt="">
                                </div>
                                <div class="notif-info">
                                    <strong>Kyllian Mbase</strong> send you a message
                                    <span>2 hour ago</span>
                                </div>
                                <div class="read"></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action active">
                                <div class="notif-icon bg-success">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="notif-info">
                                    Your setting was approved
                                    <span>3 hour ago</span>
                                </div>
                                <div class="unread"></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action active">
                                <div class="notif-icon bg-info">
                                    <i class="fa fa-image"></i>
                                </div>
                                <div class="notif-info">
                                    You changed your profile picture
                                    <span>3 hour ago</span>
                                </div>
                                <div class="unread"></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="notif-icon bg-warning">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <div class="notif-info">
                                    Your mailbox critical quota
                                    <span>5 hour ago</span>
                                </div>
                                <div class="read"></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="notif-icon">
                                    <img src="template-assets/images/profiles/no-img.jpg" alt="">
                                </div>
                                <div class="notif-info">
                                    <strong>Chris Wilox</strong> tagged you
                                    <span>7 hour ago</span>
                                </div>
                                <div class="read"></div>
                            </a>
                        </div>
                        <div class="dropdown-footer">
                            <a href="javascript:void(0)">see all</a>
                        </div>
                    </div>
                </li><!-- /END Notifications dropdown -->

                <li class="rightSidebar"><!-- Right sidebar button dropdown -->
                    <button class="btn btn-r_sidebar" type="button">
                        <i class="ti-view-list-alt"></i>
                    </button>
                </li><!-- /END Right sidebar button dropdown -->

            </ul>

        </div>

    </header>
    <!-- HEADER -->

    <!-- RIGHT SIDEBAR -->
    <aside id="right-sidebar" class="r_sidebar">

        <div class="content-wrapper">

            <!-- Right sidebar CLOSE BUTTON -->
            <a href="javascript:void(0)" class="close-btn">
                <span class="ti-close"></span>
            </a><!-- /END close button -->

            <!-- Tabs link menu -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="today-tab" data-toggle="tab" href="#today" aria-expanded="true">Today</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="setting-tab" data-toggle="tab" href="#setting">Setting</a>
                </li>
            </ul><!-- /END Tabs link menu -->

            <!-- Right sidebar tab content -->
            <div class="tab-content sidebar-wrapper scrollbar-inner" id="myTabContent">

                <!-- Today tab content -->
                <div class="tab-pane fade show active" id="today">
                    <div class="today-date">
                        <span class="strong"><span id="prMonth"></span> <span id="prDate"></span></span>, <span id="prYear"></span>
                        <span id="prDay"></span>
                    </div>
                    <div class="block-tab">
                        <div class="block-title">
                            <span class="ti-time"></span> Schedule
                        </div>
                        <ul class="schedule-list list-unstyled">
                            <li>
                                <div class="time">
                                    09.00<span>AM</span>
                                </div>
                                <div class="point"></div>
                                <div class="schedule-info">
                                    Briefing with product division
                                    <span class="location"><span class="ti-location-pin"></span> New York, NA</span>
                                </div>
                            </li>
                            <li>
                                <div class="time">
                                    11.00<span>AM</span>
                                </div>
                                <div class="point"></div>
                                <div class="schedule-info">
                                    Meeting with client
                                    <span class="location"><span class="ti-location-pin"></span> Client office</span>
                                </div>
                            </li>
                            <li>
                                <div class="time">
                                    01.30<span>PM</span>
                                </div>
                                <div class="point"></div>
                                <div class="schedule-info">
                                    Project commisioning
                                    <span class="location"><span class="ti-location-pin"></span> Office</span>
                                </div>
                            </li>
                            <li>
                                <div class="time">
                                    04.00<span>AM</span>
                                </div>
                                <div class="point"></div>
                                <div class="schedule-info">
                                    Public discussion at office
                                    <span class="location"><span class="ti-location-pin"></span> Cafetaria</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="block-tab">
                        <div class="block-title">
                            <span class="ti-flag"></span> Activity Log
                        </div>
                        <ul class="activity-list list-unstyled">
                            <li>
                                <div class="icon">
                                    <span class="ti-image"></span>
                                </div>
                                <div class="log-info">
                                    Photo profile has been updated
                                    <small>2 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="ti-email"></span>
                                </div>
                                <div class="log-info">
                                    New email to <strong>John Cenna</strong> sent
                                    <small>4 hrs ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="ti-email"></span>
                                </div>
                                <div class="log-info">
                                    You compose new email
                                    <small>6 hrs ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="ti-email"></span>
                                </div>
                                <div class="log-info">
                                    You compose new email
                                    <small>1 day ago</small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div><!-- .tab-pane -->
                <!-- /End Today tab content -->

                <!-- Setting tab content -->
                <div class="tab-pane fade" id="setting">
                    <ul class="setting-list list-unstyled">
                        <li class="header">
                            Main system
                        </li>
                        <li>
                            <div class="setting-name">
                                Notifications
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" data-size="small" checked />
                            </div>
                        </li>
                        <li>
                            <div class="setting-name">
                                Auto updates
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" />
                            </div>
                        </li>
                        <li>
                            <div class="setting-name">
                                Location
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" data-size="small" checked />
                            </div>
                        </li>
                        <li class="header">
                            Assistant
                        </li>
                        <li>
                            <div class="setting-name">
                                Show Assistant
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" data-size="small" />
                            </div>
                        </li>
                        <li class="header">
                            Appearances
                        </li>
                        <li>
                            <div class="setting-name">
                                Save history
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" data-size="small" checked />
                            </div>
                        </li>
                        <li>
                            <div class="setting-name">
                                Quick results
                            </div>
                            <div class="switch">
                                <input type="checkbox" class="js-switch" data-size="small" />
                            </div>
                        </li>
                    </ul>
                </div><!-- .tab-pane -->
                <!-- /End Setting tab content -->

            </div><!-- .tab-content -->
            <!-- /END Right sidebar Tabs content -->

        </div>

    </aside>
    <!-- RIGHT SIDEBAR -->



    <!-- MAIN CONTAINER -->
    <main id="main-container">
        <div class="content">


            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h2 class="content-heading">Talents - Add Talent</h2>
                    <p  class="content-heading-para">Invite Talents in the systems</p>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right button-group">
                    <a href="add-talent.html">Add Talent</a>
                    <a href="invite-talent.html">Invite Talent</a>
                    <a href="add-new-group.html">Add New Group</a>
                </div>

            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">



                    <!-- Basic -->
                    <div class="card">

                        <div class="card-body">


                            <div class="alert alert-success">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <strong>Title!</strong> Alert body ...
                            </div>

                            <div class="alert alert-danger">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <strong>Title!</strong> Alert body ...

                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form action="{{url('add/talent/2')}}" method="post" role="form">

                                        <p class="m-b-10">Experience , Education & Skill Sets</p>



                                        <div class="well m-t-10">

                                            <p class="bold m-b-10">Educations</p>


                                            <div class="row">
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Course / Degree Name</label>
                                                        <input type="text" name="course_degree_name" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">College / School </label>
                                                        <input type="text" name="college_school" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Duration</label>
                                                        <input type="text" name="duration" class="form-control singledatepicker" id="" placeholder="Start Date">
                                                    </div>
                                                </div>

                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">&nbsp;</label>
                                                        <input type="text" name="duration" class="form-control singledatepicker" id="" placeholder="End Date">
                                                    </div>
                                                </div>


                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">&nbsp;</label>
                                                        <div>
                                                            <button type="button" class="btn btn-success btn-block">Add</button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div><!--  well -->



                                        <div class="card m-t-10">
                                            <div class="card-header">
                                                Educations
                                            </div>
                                            <div class="card-body p-0">
                                                <table class="table table-normalize no-border m-b-0 last-child-td-b-0">

                                                    <tbody>
                                                    <tr>
                                                        <td>B.sc Visual Communication</td>
                                                        <td>College Name / University</td>
                                                        <td>2001 - 20015</td>
                                                        <td>
                                                            <a href=""><i class="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>B.sc Visual Communication</td>
                                                        <td>College Name / University</td>
                                                        <td>2001 - 20015</td>
                                                        <td>
                                                            <a href=""><i class="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> <!-- card -->



                                        <div class="well m-b-10 m-t-20">
                                            <p class="bold m-b-10 ">Experiences</p>



                                            <div class="row">
                                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div class="form-group">
                                                        <label for="">Company Name</label>
                                                        <input type="text" name="company_name" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>

                                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div class="form-group">
                                                        <label for="">Job Title</label>
                                                        <input type="text" name="job_title" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>

                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Job Descriptions</label>
                                                        <input type="text" name="job_discriptions" class="form-control singledatepicker" id="" placeholder="Start Date">
                                                    </div>
                                                </div>

                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">&nbsp;</label>
                                                        <input type="text" name="job_discription" class="form-control singledatepicker" id="" placeholder="End Date">
                                                    </div>
                                                </div>


                                            </div>

                                            <div class="form-group">
                                                <label for="">Job Descriptions</label>
                                                <textarea name="" id="input" class="form-control" rows="3" required="required"></textarea>
                                            </div>

                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="">
                                                    Currently working
                                                </label>
                                            </div>
                                            <div class="m-t-10">
                                                <button type="button" class="btn btn-success">Add</button>
                                            </div>

                                        </div>



                                        <div class="card m-t-20">
                                            <div class="card-header">
                                                Experiences
                                            </div>
                                            <div class="card-body p-0">
                                                <table class="table table-normalize no-border m-b-0 last-child-td-b-0">

                                                    <tbody>
                                                    <tr>
                                                        <td>Job Title</td>
                                                        <td>Company Name / Business Name</td>
                                                        <td>May 20, 2017 to May 20, 2017</td>
                                                        <td>
                                                            <a href=""><i class="fa fa-view"></i></a>
                                                            <a href=""><i class="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td>Job Title</td>
                                                        <td>Company Name / Business Name</td>
                                                        <td>May 20, 2017 to May 20, 2017</td>
                                                        <td>
                                                            <a href=""><i class="fa fa-view"></i></a>
                                                            <a href=""><i class="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>




                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> <!-- card -->


                                        <div class="well m-b-10 m-t-20">
                                            <p class="bold m-b-10">Skills</p>

                                            <div class="row">
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Skills</label>
                                                        <input type="text" class="form-control tokenfield-input" id="" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Rating</label>
                                                        <select name="" id="input" class="form-control" required="required">
                                                            <option value="">Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Experience</label>
                                                        <select name="" id="input" class="form-control" required="required">
                                                            <option value="">Select</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">Type</label>
                                                        <select name="" id="input" class="form-control" required="required">
                                                            <option value="">Select</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div class="col-md-15 col-sm-3">
                                                    <div class="form-group">
                                                        <label for="">&nbsp;</label>
                                                        <div>
                                                            <button type="button" class="btn btn-success btn-block">Add</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>




                                        <div class="card m-t-10">
                                            <div class="card-header">
                                                Skills
                                            </div>
                                            <div class="card-body p-0">
                                                <table class="table table-normalize no-border m-b-0 last-child-td-b-0">

                                                    <tbody>
                                                    <tr>
                                                        <td>Skills</td>
                                                        <td>Years</td>
                                                        <td>Primary Skills</td>
                                                        <td>
                                                            <i class="fa fa-star rated"></i>
                                                            <i class="fa fa-star rated"></i>
                                                            <i class="fa fa-star rated"></i>
                                                            <i class="fa fa-star "></i>
                                                            <i class="fa fa-star "></i>

                                                        </td>
                                                        <td>
                                                            <a href=""><i class="fa fa-view"></i></a>
                                                            <a href=""><i class="fa fa-trash "></i></a>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td>Skills</td>
                                                        <td>Years</td>
                                                        <td>Primary Skills</td>
                                                        <td>
                                                            <i class="fa fa-star rated"></i>
                                                            <i class="fa fa-star "></i>
                                                            <i class="fa fa-star "></i>
                                                            <i class="fa fa-star "></i>
                                                            <i class="fa fa-star "></i>
                                                        </td>
                                                        <td>
                                                            <a href=""><i class="fa fa-view"></i></a>
                                                            <a href=""><i class="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>




                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> <!-- card -->










                                        <div class="m-t-20 m-b-20">
                                            <button type="submit" class="btn btn-success">Continue </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div><!-- .card-body -->
                    </div><!-- .card -->
                    <!-- /End Basic -->



                </div><!-- .col -->



            </div><!-- .row -->

        </div><!-- .content -->
    </main>
    <!-- MAIN CONTAINER -->



    <!-- FOOTER -->
    <footer id="page-footer" class="pagefooter">
        <div class="content">
            <div class="row">

                <!-- Copyright -->
                <div class="copyright col-sm-12 col-md-12 col-lg-6">
                    &copy; 2017 Prudence - Bootstrap Admin Template
                </div>
                <!-- /End Copyright -->

                <!-- Navigation -->
                <div class="footer-nav col-sm-12 col-md-12 col-lg-6">
                    <a href="javascript:void(0)">About</a>
                    <a href="javascript:void(0)">Terms</a>
                </div>
                <!-- /End Navigation -->

            </div>
        </div>
    </footer>
    <!-- FOOTER -->

</div>

<script type="text/javascript" src="template-assets/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="template-assets/js/popper.min.js"></script>
<script type="text/javascript" src="template-assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="template-assets/js/holder.js"></script>
<script type="text/javascript" src="template-assets/plugins/switchery/switchery.min.js"></script>
<script type="text/javascript" src="template-assets/plugins/jquery.scrollbar/jquery.scrollbar.min.js"></script>

<link rel="stylesheet" href="template-assets/plugins/bootstrap-daterangepicker/daterangepicker.css">

<script type="text/javascript" src="template-assets/plugins/moment/min/moment.min.js "></script>




<script src="template-assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>

<link rel="stylesheet" href="template-assets/plugins/select2/select2.css">
<script src="template-assets/plugins/select2/select2.js"></script>

<script src="template-assets/plugins/typeahead.js/dist/typeahead.bundle.js"></script>


<link rel="stylesheet" href="template-assets/plugins/bootstrap-tokenfield/dist/css/tokenfield-typeahead.css">

<script type="text/javascript" src="template-assets/plugins/bootstrap-tokenfield/dist/bootstrap-tokenfield.js"></script>


<script type="text/javascript" src="template-assets/js/custom.js"></script>
</body>
</html>


<script type="text/javascript">
    var style = 'assets/css/style.css?'+Math.random();;
</script>

<script type="text/javascript">
    document.write('<link href="'+style+'" rel="stylesheet">');
</script>


<script>
    jQuery(document).ready(function($) {

        if ($('.singledatepicker').length) {

            $('.singledatepicker').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true

            });

        };

        /******** Dateranger picker ********/
        if ($('.drp').length) {
            $('.drp').daterangepicker({
                timePicker: true,
                timePickerIncrement: 30,
                opens: 'left',
                locale: {
                    format: 'MM/DD/YYYY h:mm A'
                }
            });
        };


        if ($('.select2').length) {
            $('.select2').select2();
        };

        if ($('.tokenfield-input').length) {
            $('.tokenfield-input').tokenfield({
                autocomplete: {
                    source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
                    delay: 100
                },
                showAutocompleteOnFocus: true
            })
        };

    });
</script>




