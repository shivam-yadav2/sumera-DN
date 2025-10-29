@extends('layouts.app')

@section('content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Booking Requests & Contact Enquiries</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active">Booking Requests</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header text-white bg-primary align-items-center d-flex">
                            <h4 class="card-title text-white mb-0 flex-grow-1">Booking Requests & Contact Enquiries</h4>
                            <div class="flex-shrink-0">
                                <span class="badge bg-light text-dark">Total: {{ $data->total() }}</span>
                            </div>
                        </div><!-- end card header -->

                        <div class="card-body">
                            <div class="table-responsive table-card">
                                <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead class="text-muted table-primary">
                                    <tr>
                                        <th scope="col">Booking ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($data as $key => $row)
                                        <tr>
                                            <td>
                                                <a href="#!" class="fw-medium link-primary">#BK-{!! str_pad($row->id, 4, '0', STR_PAD_LEFT) !!}</a>
                                            </td>
                                            <td>
                                                <span class="text-muted">{!! date('d M Y', strtotime($row->created_at)) !!}</span><br>
                                                <small class="text-muted">{!! date('h:i A', strtotime($row->created_at)) !!}</small>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-grow-1">
                                                        <strong>{!! ucwords($row->name) !!}</strong>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="text-success"><i class="ri-phone-line"></i> {!! $row->mobile !!}</span><br>
                                                @if($row->email)
                                                    <span class="text-muted"><i class="ri-mail-line"></i> {!! $row->email !!}</span>
                                                @else
                                                    <span class="text-muted">No email provided</span>
                                                @endif
                                            </td>
                                            <td>
                                                @if($row->service)
                                                    <span class="badge bg-primary">{!! ucwords($row->service) !!}</span>
                                                @else
                                                    <span class="badge bg-secondary">Not specified</span>
                                                @endif
                                            </td>
                                            <td>
                                                @if($row->message)
                                                    <p class="mb-0 text-truncate" style="max-width: 200px;" title="{!! $row->message !!}">{!! $row->message !!}</p>
                                                @else
                                                    <span class="text-muted">No message</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a class="confirmDelete btn btn-sm btn-danger" data-id="{{ $row->id }}">
                                                    <i class="ri-delete-bin-line"></i> Delete
                                                </a>
                                            </td>
                                        </tr><!-- end tr -->
                                    @endforeach
                                    </tbody><!-- end tbody -->
                                </table><!-- end table -->
                            </div>
                            <!-- Add pagination links -->
                            <div class="mt-4">
                                {{ $data->links('pagination::bootstrap-4') }}
                            </div>
                        </div>
                    </div> <!-- .card-->
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    <script src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        $(document).on('click', ".confirmDelete", function () {
            var id = $(this).attr('data-id');
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to delete this booking request?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/admin/contacts/' + id + '/delete';
                }
            });
        });
    </script>
@stop
