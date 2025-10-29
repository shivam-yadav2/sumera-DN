<header id="page-topbar">
    <div class="layout-width">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box horizontal-logo">
                    <a href="{!! url('/admin/dashboard') !!}" class="logo logo-dark">
                        <span class="logo-sm">
                            <img loading="lazy" src="assets/images/logo-sm.png" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img loading="lazy" src="assets/images/logo-dark.png" alt="" height="17">
                        </span>
                    </a>

                    <a href="{!! url('/admin/dashboard') !!}" class="logo logo-light">
                        <span class="logo-sm">
                            <img loading="lazy" src="assets/images/logo-sm.png" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img loading="lazy" src="assets/images/logo-light.png" alt="" height="17">
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                    id="topnav-hamburger-icon">
                    <span class="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-md-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search..." autocomplete="off"
                            id="search-options" value="">
                        <span class="mdi mdi-magnify search-widget-icon"></span>
                        <span class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                            id="search-close-options"></span>
                    </div>
                    <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                        <div data-simplebar style="max-height: 320px;">
                            <!-- item-->
                            <div class="dropdown-header">
                                <h6 class="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                            </div>

                            <div class="dropdown-item bg-transparent text-wrap">
                                <a href="{!! url('/') !!}" class="btn btn-soft-secondary btn-sm btn-rounded">how
                                    to
                                    setup <i class="mdi mdi-magnify ms-1"></i></a>
                                <a href="{!! url('/') !!}"
                                    class="btn btn-soft-secondary btn-sm btn-rounded">buttons
                                    <i class="mdi mdi-magnify ms-1"></i></a>
                            </div>
                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                            </div>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                <span>Analytics Dashboard</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                <span>Help Center</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                <span>My account settings</span>
                            </a>

                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                            </div>

                            <div class="notification-list">
                                <!-- item -->
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img loading="lazy" src="assets/images/users/avatar-2.jpg"
                                            class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                        <div class="flex-1">
                                            <h6 class="m-0">Angela Bernier</h6>
                                            <span class="fs-11 mb-0 text-muted">Manager</span>
                                        </div>
                                    </div>
                                </a>
                                <!-- item -->
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img loading="lazy" src="assets/images/users/avatar-3.jpg"
                                            class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                        <div class="flex-1">
                                            <h6 class="m-0">David Grasso</h6>
                                            <span class="fs-11 mb-0 text-muted">Web Designer</span>
                                        </div>
                                    </div>
                                </a>
                                <!-- item -->
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img loading="lazy" src="assets/images/users/avatar-5.jpg"
                                            class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                        <div class="flex-1">
                                            <h6 class="m-0">Mike Bunch</h6>
                                            <span class="fs-11 mb-0 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="text-center pt-3 pb-1">
                            <a href="{!! url('/') !!}" class="btn btn-primary btn-sm">View All
                                Results <i class="ri-arrow-right-line ms-1"></i></a>
                        </div>
                    </div>
                </form>
            </div>

            <div class="d-flex align-items-center">

                <div class="dropdown d-md-none topbar-head-dropdown header-item">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                        id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="bx bx-search fs-22"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-search-dropdown">
                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..."
                                        aria-label="Recipient's username">
                                    <button class="btn btn-primary" type="submit"><i
                                            class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                        data-toggle="fullscreen">
                        <i class='bx bx-fullscreen fs-22'></i>
                    </button>
                </div>

                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button"
                        class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                        <i class='bx bx-moon fs-22'></i>
                    </button>
                </div>

                <div class="dropdown topbar-head-dropdown ms-1 header-item">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                        id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class='bx bx-bell fs-22'></i>
                        <span
                            class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span
                                class="visually-hidden">unread messages</span></span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-notifications-dropdown">

                        <div class="dropdown-head bg-primary bg-pattern rounded-top">
                            <div class="p-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                    </div>
                                    <div class="col-auto dropdown-tabs">
                                        <span class="badge badge-soft-light fs-13"> 4 New</span>
                                    </div>
                                </div>
                            </div>

                            <div class="px-2 pt-2">
                                <ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true"
                                    id="notificationItemsTab" role="tablist">
                                    <li class="nav-item waves-effect waves-light">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab"
                                            role="tab" aria-selected="true">
                                            All (4)
                                        </a>
                                    </li>
                                    <li class="nav-item waves-effect waves-light">
                                        <a class="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab"
                                            aria-selected="false">
                                            Messages
                                        </a>
                                    </li>
                                    <li class="nav-item waves-effect waves-light">
                                        <a class="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab"
                                            aria-selected="false">
                                            Alerts
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="tab-content" id="notificationItemsTabContent">
                            <div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                                <div data-simplebar style="max-height: 300px;" class="pe-2">
                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex">
                                            <div class="avatar-xs me-3">
                                                <span class="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                                    <i class="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-2 lh-base">Your <b>Elite</b> author
                                                        Graphic
                                                        Optimization <span class="text-secondary">reward</span>
                                                        is
                                                        ready!
                                                    </h6>
                                                </a>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> Just 30 sec
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="all-notification-check01">
                                                    <label class="form-check-label"
                                                        for="all-notification-check01"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="text-reset notification-item d-block dropdown-item position-relative active">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-2.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">Answered to your comment on the cash flow
                                                        forecast's
                                                        graph 🔔.</p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 48 min
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="all-notification-check02" checked>
                                                    <label class="form-check-label"
                                                        for="all-notification-check02"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex">
                                            <div class="avatar-xs me-3">
                                                <span
                                                    class="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                                    <i class='bx bx-message-square-dots'></i>
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-2 fs-13 lh-base">You have received <b
                                                            class="text-success">20</b> new messages in the
                                                        conversation
                                                    </h6>
                                                </a>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 2 hrs
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="all-notification-check03">
                                                    <label class="form-check-label"
                                                        for="all-notification-check03"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-8.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">We talked about a project on linkedin.
                                                    </p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 4 hrs
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="all-notification-check04">
                                                    <label class="form-check-label"
                                                        for="all-notification-check04"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="my-3 text-center">
                                        <button type="button"
                                            class="btn btn-soft-success waves-effect waves-light">View
                                            All Notifications <i class="ri-arrow-right-line align-middle"></i></button>
                                    </div>
                                </div>

                            </div>

                            <div class="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel"
                                aria-labelledby="messages-tab">
                                <div data-simplebar style="max-height: 300px;" class="pe-2">
                                    <div class="text-reset notification-item d-block dropdown-item">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-3.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">We talked about a project on linkedin.
                                                    </p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 30 min
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="messages-notification-check01">
                                                    <label class="form-check-label"
                                                        for="messages-notification-check01"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-2.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">Answered to your comment on the cash flow
                                                        forecast's
                                                        graph 🔔.</p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 2 hrs
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="messages-notification-check02">
                                                    <label class="form-check-label"
                                                        for="messages-notification-check02"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-6.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">Mentionned you in his comment on 📃
                                                        invoice #12501.
                                                    </p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 10 hrs
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="messages-notification-check03">
                                                    <label class="form-check-label"
                                                        for="messages-notification-check03"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item">
                                        <div class="d-flex">
                                            <img loading="lazy" src="assets/images/users/avatar-8.jpg"
                                                class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                            <div class="flex-1">
                                                <a href="#!" class="stretched-link">
                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                                </a>
                                                <div class="fs-13 text-muted">
                                                    <p class="mb-1">We talked about a project on linkedin.
                                                    </p>
                                                </div>
                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i class="mdi mdi-clock-outline"></i> 3 days
                                                        ago</span>
                                                </p>
                                            </div>
                                            <div class="px-2 fs-15">
                                                <div class="form-check notification-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="messages-notification-check04">
                                                    <label class="form-check-label"
                                                        for="messages-notification-check04"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="my-3 text-center">
                                        <button type="button"
                                            class="btn btn-soft-success waves-effect waves-light">View
                                            All Messages <i class="ri-arrow-right-line align-middle"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade p-4" id="alerts-tab" role="tabpanel"
                                aria-labelledby="alerts-tab">
                                <div class="w-25 w-sm-50 pt-3 mx-auto">
                                    <img loading="lazy" src="assets/images/svg/bell.svg" class="img-fluid"
                                        alt="user-pic">
                                </div>
                                <div class="text-center pb-5 mt-2">
                                    <h6 class="fs-18 fw-semibold lh-base">Hey! You have no any notifications
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown ms-sm-3 header-item topbar-user">
                    <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <span class="d-flex align-items-center">
                            {{--                            <img loading="lazy" class="rounded-circle header-profile-user" src="{!! asset('assets/images/users/avatar-1.jpg') !!}" alt="Header Avatar"> --}}
                            <img loading="lazy" class="rounded-circle header-profile-user"
                                src="{!! asset('assets/logo/white.png') !!}" alt="Header Avatar">
                            <span class="text-start ms-xl-2">
                                <span
                                    class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ Auth::user()->name }}</span>
                            </span>
                        </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <h6 class="dropdown-header">Welcome Posh & Polished!</h6>
                        {{-- <a class="dropdown-item" href="{{ route('profile.edit') }}"><i
                                class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                                class="align-middle">Profile</span>
                        </a> --}}
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button class="dropdown-item" type="submit"><i
                                    class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                                <span class="align-middle" data-key="t-logout">Logout</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- ========== App Menu ========== -->
<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{!! url('/') !!}" class="logo logo-dark">
            <span class="logo-sm">
                <img loading="lazy" src="{{ asset('assets/logo/white.png') }}" alt="" width="120">
            </span>
            <span class="logo-lg">
                <img loading="lazy" src="{{ asset('assets/logo/white.png') }}" alt="" width="150">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{!! url('/') !!}" class="logo logo-light">
            <span class="logo-sm">
                <img loading="lazy" src="{{ asset('assets/logo/white.png') }}" alt="" width="120">
            </span>
            <span class="logo-lg">
                <img loading="lazy" src="{{ asset('assets/logo/white.png') }}" alt="" width="150">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                <!-- Dashboard -->
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}"
                        href="{{ route('admin.dashboard') }}">
                        <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>

                <!-- Services -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.services.*') ? 'active' : '' }}"
                        href="#sidebarServices" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarServices">
                        <i class="ri-store-2-line"></i> <span data-key="t-services">Services</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarServices">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.services.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.services.index') ? 'active' : '' }}">All
                                    Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.services.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.services.create') ? 'active' : '' }}">Add
                                    Service</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Gallery -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.gallery.*') ? 'active' : '' }}"
                        href="#sidebarGallery" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarGallery">
                        <i class="ri-gallery-line"></i> <span data-key="t-gallery">Gallery</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarGallery">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.gallery.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.gallery.index') ? 'active' : '' }}">All
                                    Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.gallery.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.gallery.create') ? 'active' : '' }}">Add
                                    Gallery</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Academy -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.academy.*') ? 'active' : '' }}"
                        href="#sidebarAcademy" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarAcademy">
                        <i class="ri-school-line"></i> <span data-key="t-academy">Academy</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarAcademy">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.academy.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.academy.index') ? 'active' : '' }}">All
                                    Academy</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.academy.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.academy.create') ? 'active' : '' }}">Add
                                    Academy</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- Courses -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.courses.*') ? 'active' : '' }}"
                        href="#sidebarCourses" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarCourses">
                        <i class="ri-book-open-line"></i> <span data-key="t-courses">Courses</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarCourses">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.courses.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.courses.create') ? 'active' : '' }}">Add
                                    Course</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Enquiries -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.contacts.*') || request()->routeIs('admin.appointments.*') ? 'active' : '' }}"
                        href="#sidebarEnquiries" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarEnquiries">
                        <i class="ri-mail-line"></i> <span data-key="t-enquiries">Enquiries</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarEnquiries">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.contacts.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.contacts.*') ? 'active' : '' }}">Contact
                                    Enquiries</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.appointments.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.appointments.*') ? 'active' : '' }}">Appointment
                                    Enquiries</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Brands -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.brands.*') ? 'active' : '' }}"
                        href="#sidebarBrands" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarBrands">
                        <i class="ri-flag-2-line"></i> <span data-key="t-brands">Brands</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarBrands">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.brands.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.brands.index') ? 'active' : '' }}">All
                                    Brands</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.brands.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.brands.create') ? 'active' : '' }}">Add
                                    Brand</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- Packages -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.packages.*') ? 'active' : '' }}"
                        href="#sidebarPackages" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarPackages">
                        <i class="ri-vip-line"></i> <span data-key="t-packages">Packages</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarPackages">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.packages.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.packages.index') ? 'active' : '' }}">All
                                    Packages</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.packages.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.packages.create') ? 'active' : '' }}">Add
                                    Package</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- YouTube -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.youtube.*') ? 'active' : '' }}"
                        href="#sidebarYoutube" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarYoutube">
                        <i class="ri-youtube-line"></i> <span data-key="t-youtube">YouTube</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarYoutube">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.youtube.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.youtube.index') ? 'active' : '' }}">All
                                    Videos</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.youtube.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.youtube.create') ? 'active' : '' }}">Add
                                    Video</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- Offers -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.offers.*') ? 'active' : '' }}"
                        href="#sidebarOffers" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarOffers">
                        <i class="ri-coupon-2-line"></i> <span data-key="t-offers">Offers</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarOffers">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.offers.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.offers.index') ? 'active' : '' }}">All
                                    Offers</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.offers.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.offers.create') ? 'active' : '' }}">Add
                                    Offer</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Features/Celebrities -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.features.*') ? 'active' : '' }}"
                        href="#sidebarFeatures" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarFeatures">
                        <i class="ri-star-line"></i> <span data-key="t-features">Features</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarFeatures">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.features.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.features.index') ? 'active' : '' }}">All
                                    Features</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.features.create') }}"
                                    class="nav-link {{ request()->routeIs('admin.features.create') ? 'active' : '' }}">Add
                                    Feature</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- Sliders -->
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('admin.sliders.*') ? 'active' : '' }}"
                        href="{{ route('admin.sliders.create') }}">
                        <i class="ri-mac-line"></i> <span data-key="t-sliders">Home Slider</span>
                    </a>
                </li>

                <!-- Settings -->
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.about.*') || request()->routeIs('admin.banners.*') || request()->routeIs('admin.meta-*') ? 'active' : '' }}"
                        href="#sidebarSettings" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarSettings">
                        <i class="ri-settings-3-line"></i> <span data-key="t-settings">Settings</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarSettings">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.about.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.about.*') ? 'active' : '' }}">About
                                    Page</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.banners.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.banners.*') ? 'active' : '' }}">Banners</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.meta-tags.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.meta-tags.*') ? 'active' : '' }}">Meta
                                    Tags</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.meta-scripts.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.meta-scripts.*') ? 'active' : '' }}">Meta
                                    Scripts</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.meta-mobile.index') }}"
                                    class="nav-link {{ request()->routeIs('admin.meta-mobile.*') ? 'active' : '' }}">WhatsApp/Mobile</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- Frontend Link -->
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/') }}" target="_blank">
                        <i class="ri-eye-line"></i> <span data-key="t-frontend">View Website</span>
                    </a>
                </li>
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button"
                       aria-expanded="true" aria-controls="sidebarAuth">
                        <i class="ri-shopping-cart-line"></i> <span data-key="t-authentication">Orders</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarAuth">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{url('/orders/all-orders')}}" class="nav-link"> All Order</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{url('/orders/new-orders')}}" class="nav-link"> New Order</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{url('/orders/process-orders')}}" class="nav-link"> In Process</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{url('/orders/shipment-orders')}}" class="nav-link"> Shipments</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{url('/orders/delivered-orders')}}" class="nav-link"> Delivered</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{url('/orders/cancel-orders')}}" class="nav-link"> Cancelled</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
