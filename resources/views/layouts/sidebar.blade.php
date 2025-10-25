<!-- ========== Left Sidebar Start ========== -->
<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{{ route('admin.dashboard') }}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{ asset('assets') }}/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="{{ asset('assets') }}/images/logo-dark.png" alt="" height="17">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{{ route('admin.dashboard') }}" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{ asset('assets') }}/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="{{ asset('assets') }}/images/logo-light.png" alt="" height="17">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
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
                    <a class="nav-link menu-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}" href="{{ route('admin.dashboard') }}">
                        <i class="mdi mdi-speedometer"></i> <span data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>

                <!-- Services -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.services.*') ? 'active' : '' }}" href="#sidebarServices" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarServices">
                        <i class="mdi mdi-scissors-cutting"></i> <span data-key="t-services">Services</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarServices">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.services.index') }}" class="nav-link {{ request()->routeIs('admin.services.index') ? 'active' : '' }}">All Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.services.create') }}" class="nav-link {{ request()->routeIs('admin.services.create') ? 'active' : '' }}">Add Service</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Gallery -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.gallery.*') ? 'active' : '' }}" href="#sidebarGallery" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarGallery">
                        <i class="mdi mdi-image-multiple"></i> <span data-key="t-gallery">Gallery</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarGallery">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.gallery.create') }}" class="nav-link {{ request()->routeIs('admin.gallery.create') ? 'active' : '' }}">Add Gallery</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Academy -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.academy.*') ? 'active' : '' }}" href="#sidebarAcademy" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAcademy">
                        <i class="mdi mdi-school"></i> <span data-key="t-academy">Academy</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarAcademy">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.academy.index') }}" class="nav-link {{ request()->routeIs('admin.academy.index') ? 'active' : '' }}">All Academy</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.academy.create') }}" class="nav-link {{ request()->routeIs('admin.academy.create') ? 'active' : '' }}">Add Academy</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Courses -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.courses.*') ? 'active' : '' }}" href="#sidebarCourses" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCourses">
                        <i class="mdi mdi-book-open"></i> <span data-key="t-courses">Courses</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarCourses">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.courses.create') }}" class="nav-link {{ request()->routeIs('admin.courses.create') ? 'active' : '' }}">Add Course</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Enquiries -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.contacts.*') || request()->routeIs('admin.appointments.*') ? 'active' : '' }}" href="#sidebarEnquiries" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEnquiries">
                        <i class="mdi mdi-email"></i> <span data-key="t-enquiries">Enquiries</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarEnquiries">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.contacts.index') }}" class="nav-link {{ request()->routeIs('admin.contacts.*') ? 'active' : '' }}">Contact Enquiries</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.appointments.index') }}" class="nav-link {{ request()->routeIs('admin.appointments.*') ? 'active' : '' }}">Appointment Enquiries</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Settings -->
                <li class="nav-item">
                    <a class="nav-link menu-link {{ request()->routeIs('admin.about.*') || request()->routeIs('admin.banners.*') ? 'active' : '' }}" href="#sidebarSettings" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSettings">
                        <i class="mdi mdi-cog"></i> <span data-key="t-settings">Settings</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarSettings">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('admin.about.index') }}" class="nav-link {{ request()->routeIs('admin.about.*') ? 'active' : '' }}">About Page</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.banners.create') }}" class="nav-link {{ request()->routeIs('admin.banners.*') ? 'active' : '' }}">Banners</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Frontend Link -->
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ url('/') }}" target="_blank">
                        <i class="mdi mdi-eye"></i> <span data-key="t-frontend">View Website</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
    <div class="sidebar-background"></div>
</div>
<!-- Left Sidebar End -->
