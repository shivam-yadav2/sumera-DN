@extends('layouts.app')

@section('content')

    @php
        $hour = date('H:i:s');
        $greeting = '';
        $colorClass = '';

        if ($hour >= 5 && $hour < 12) {
            $greeting = 'Good Morning';
            $colorClass = 'text-primary'; // Blue for morning
        } elseif ($hour >= 12 && $hour < 17) {
            $greeting = 'Good Afternoon';
            $colorClass = 'text-success'; // Green for afternoon
        } elseif ($hour >= 17 && $hour < 21) {
            $greeting = 'Good Evening';
            $colorClass = 'text-warning'; // Yellow for evening
        } else {
            $greeting = 'Good Night';
            $colorClass = 'text-muted'; // Gray for night
        }
    @endphp

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Dashboard</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a>
                                </li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col">
                    <div class="h-100">
                        <div class="row mb-3 pb-1">
                            <div class="col-12">
                                <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                                    <div class="flex-grow-1">
                                        <h4 class="fs-16 mb-1 {{ $colorClass }}">{{ $greeting }}, Sumeera Salon and Academy!</h4>
                                        <p class="text-muted mb-0">Here's what's happening with your store today.</p>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->

                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                @php
                                    $todayappointments = DB::table('appointments')->whereDate('created_at', date('Y-m-d'))->get();
                                    $todaycontacts = DB::table('contacts')->whereDate('created_at', date('Y-m-d'))->get();
                                    $appointments = DB::table('appointments')->where('is_active', 1)->get();
                                    $contacts = DB::table('contacts')->where('is_active', 1)->get();
                                    $offer = DB::table('offers')->where('is_active', 1)->get();
                                   $service = DB::table('services')->where('is_active', 1)->get();
                                @endphp
                                <div class="card card-animate">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                    Total Appointments Enquiry</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <h5 class="text-success fs-14 mb-0">
                                                    <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                                                    {{ count($todayappointments) }} %
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-4"><span class="counter-value"
                                                        data-target="{{ count($appointments) }}">0</span>
                                                </h4>
                                                <a href="{{ route('admin.appointments.index') }}" class="text-decoration-underline">View all appointments</a>
                                            </div>
                                            <div class="avatar-sm flex-shrink-0">
                                                <span class="avatar-title bg-soft-success rounded fs-3">
                                                    <i class="bx bx-dollar-circle text-success"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->

                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-animate">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                   Total Contact Enquiry</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <h5 class="text-danger fs-14 mb-0">
                                                    <i class="ri-arrow-right-down-line fs-13 align-middle"></i>
                                                    {{ count($todaycontacts) }} %
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-4"><span class="counter-value"
                                                        data-target="{{ count($contacts) }}">0</span>
                                                </h4>
                                                <a href="{{ route('admin.contacts.index') }}" class="text-decoration-underline">View all
                                                    Contact Enquiry</a>
                                            </div>
                                            <div class="avatar-sm flex-shrink-0">
                                                <span class="avatar-title bg-soft-info rounded fs-3">
                                                    <i class="bx bx-shopping-bag text-info"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->

                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-animate">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                    Total Offer</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <h5 class="text-success fs-14 mb-0">
                                                    <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                                                    {!! count($offer) !!}
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-4"><span class="counter-value"
                                                        data-target="{!! count($offer) !!}">0</span>
                                                </h4>
                                                <a href="{{ route('admin.offers.index') }}" class="text-decoration-underline">See
                                                    details</a>
                                            </div>
                                            <div class="avatar-sm flex-shrink-0">
                                                <span class="avatar-title bg-soft-warning rounded fs-3">
                                                    <i class="bx bx-user-circle text-warning"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->

                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-animate">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                   Total Services</p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <h5 class="text-muted fs-14 mb-0">
                                                    +0.00 %
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-4"><span
                                                        class="counter-value" data-target="{!! count($service) !!}">0</span>
                                                </h4>
                                                <a href="{{ route('admin.services.index') }}" class="text-decoration-underline">View  All Services</a>
                                            </div>
                                            <div class="avatar-sm flex-shrink-0">
                                                <span class="avatar-title bg-soft-primary rounded fs-3">
                                                    <i class="bx bx-wallet text-primary"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
                        </div> <!-- end row-->
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-header align-items-center d-flex">
                                        <h4 class="card-title mb-0 flex-grow-1">Today Booking Enquiry</h4>
                                        <div class="flex-shrink-0">
                                            <a href="{{ route('admin.appointments.index') }}" class="btn btn-primary">View All Booking Enquiry</a>
                                           {{-- <div class="dropdown card-header-dropdown">
                                                <a class="text-reset dropdown-btn" href="#"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                                    </span><span class="text-muted">Today<i
                                                            class="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a class="dropdown-item" href="#">Today</a>
                                                    <a class="dropdown-item" href="#">Yesterday</a>
                                                    <a class="dropdown-item" href="#">Last 7 Days</a>
                                                    <a class="dropdown-item" href="#">Last 30 Days</a>
                                                    <a class="dropdown-item" href="#">This Month</a>
                                                    <a class="dropdown-item" href="#">Last Month</a>
                                                </div>
                                            </div>--}}
                                        </div>
                                    </div><!-- end card header -->

                                    <div class="card-body">
                                        <div class="table-responsive table-card">
                                            <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Contact</th>
                                                        <th>Service</th>
                                                    </tr>
                                                </thead>
                                                <tbody > 

                                                @foreach($todayappointments as $key=>$row)
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h5 class="fs-14 my-1"><a href="#!" class="text-reset">{!! $row->name !!}</a></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 class="fs-14 my-1 fw-normal">{!! $row->mobile !!} - {!! $row->email !!}</h5>
                                                        </td>
                                                        <td>
                                                            <h5 class="fs-14 my-1 fw-normal">{!! $row->service !!}</h5>
                                                            <span class="text-muted">{!! $row->city !!}</span>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-header align-items-center d-flex">
                                        <h4 class="card-title mb-0 flex-grow-1">Today Booking Enquiry</h4>
                                        <div class="flex-shrink-0">
                                            <a href="{{ route('admin.contacts.index') }}" class="btn btn-primary">View All Contact Enquiry</a>
                                            {{-- <div class="dropdown card-header-dropdown">
                                                 <a class="text-reset dropdown-btn" href="#"
                                                     data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                     <span class="fw-semibold text-uppercase fs-12">Sort by:
                                                     </span><span class="text-muted">Today<i
                                                             class="mdi mdi-chevron-down ms-1"></i></span>
                                                 </a>
                                                 <div class="dropdown-menu dropdown-menu-end">
                                                     <a class="dropdown-item" href="#">Today</a>
                                                     <a class="dropdown-item" href="#">Yesterday</a>
                                                     <a class="dropdown-item" href="#">Last 7 Days</a>
                                                     <a class="dropdown-item" href="#">Last 30 Days</a>
                                                     <a class="dropdown-item" href="#">This Month</a>
                                                     <a class="dropdown-item" href="#">Last Month</a>
                                                 </div>
                                             </div>--}}
                                        </div>
                                    </div><!-- end card header -->

                                    <div class="card-body">
                                        <div class="table-responsive table-card">
                                            <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                                                <thead class="table-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Contact</th>
                                                    <th>Service</th>
                                                </tr>
                                                </thead>
                                                <tbody >

                                                @foreach($todaycontacts as $key=>$row)
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h5 class="fs-14 my-1"><a href="#!" class="text-reset">{!! $row->name !!}</a></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 class="fs-14 my-1 fw-normal">{!! $row->mobile !!} - {!! $row->email !!}</h5>
                                                        </td>
                                                        <td>
                                                            <span class="text-muted">{!! $row->message !!}</span>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- container-fluid -->
    </div>
@stop
