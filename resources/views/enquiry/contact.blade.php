@extends('layouts.app')

@section('content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Contact Enquiry</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active">Contact List</li>
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
                            <h4 class="card-title text-white mb-0 flex-grow-1">Recent Contact Enquiry</h4>
                        </div><!-- end card header -->

                        <div class="card-body">
                            <div class="table-responsive table-card">
                                <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead class="text-muted table-primary">
                                    <tr>
                                        <th scope="col">Contact ID</th>
                                        <th scope="col">Action</th>
{{--                                        <th scope="col">Service</th>--}}
                                        <th scope="col">Customer</th>
                                        <th scope="col">Mobile</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($data as $key => $row)
                                        <tr>
                                            <td>
                                                <a href="#!"
                                                   class="fw-medium link-primary">#BA-000{!! $row->id !!} <br> {!! date('d M Y', strtotime($row->created_at)) !!}</a>
                                            </td>
                                            <td>
                                                <a class="confirmDelete btn btn-sm btn-danger" data-id="{{ $row->id }}">Delete</a>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-grow-1">{!! ucwords($row->name) !!}</div>
                                                </div>
                                            </td>
                                           {{-- <td>
                                                <span class="badge badge-soft-success">{!! ucwords($row->service) !!}</span>
                                            </td>--}}
                                            <td>
                                                <span class="text-success">{!! $row->mobile !!}</span> -
                                                <span class="text-muted">{!! $row->email !!}</span>
                                                <p>{!! $row->message !!}</p>
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
                text: "you are sure you want to delete this contact?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    window.location.href = "/delete-contact/" + id;
                }
            });
        });
    </script>
@stop
