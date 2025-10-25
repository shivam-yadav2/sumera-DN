@extends('layouts.app')

@section('css')

    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css" />

    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.9/css/responsive.bootstrap.min.css" />

    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.2.2/css/buttons.dataTables.min.css">

@stop
@section('content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Book Appointment Enquiry</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active">Book Appointment</li>
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
                            <h4 class="card-title text-white mb-0 flex-grow-1">Recent Book Appointment</h4>
                        </div><!-- end card header -->

                        <div class="card-body">
                            <button id="bulk-delete-btn" class="btn btn-danger mb-3 d-none">Delete Selected</button>
                            <div class="table-responsive table-card">
                                <table id="buttons-datatables"  class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead class="text-muted table-primary">
                                    <tr>
                                        <th scope="col">
                                            <input type="checkbox" id="select-all">
                                        </th>
                                        <th scope="col">Appointment ID</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Mobile</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($data as $key => $row)
                                        <tr>
                                            <td>
                                                <input type="checkbox" class="row-checkbox" value="{{ $row->id }}">
                                            </td>
                                            <td>
                                                <a href="#!" class="fw-medium link-primary">#BA-000{!! $row->id !!}<br> {!! date('d M Y', strtotime($row->created_at)) !!}</a>
                                            </td>
                                            <td>
                                                <a class="confirmDelete btn btn-sm btn-danger" data-id="{{ $row->id }}">Delete</a>
                                            </td>
                                            <td>{{ ucwords($row->name) }}</td>
                                            <td>
                                                <span class="badge badge-soft-success">{{ ucwords($row->service) }}</span><br>
                                                <span class="badge badge-soft-success">{{ ucwords($row->city) }}</span>
                                            </td>
                                            <td>
                                                <span class="text-success">{{ $row->mobile }}</span> -
                                                <span class="text-muted">{{ $row->email }}</span>
                                                <p>{{ $row->message }}</p>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
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
    <!--datatable js-->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.html5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <script src="{{asset('assets')}}/js/pages/datatables.init.js"></script>

    <script src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
       $(document).ready(function () {
    // Select All toggle
    $('#select-all').on('change', function () {
        $('.row-checkbox').prop('checked', this.checked);
        toggleBulkDeleteButton();
    });

    // Toggle bulk delete button when any checkbox changes
    $(document).on('change', '.row-checkbox', function () {
        toggleBulkDeleteButton();

        // Uncheck "Select All" if any item is unchecked
        if (!$(this).prop('checked')) {
            $('#select-all').prop('checked', false);
        }

        // If all checkboxes are checked, check "Select All"
        if ($('.row-checkbox:checked').length === $('.row-checkbox').length) {
            $('#select-all').prop('checked', true);
        }
    });

    // Toggle visibility of bulk delete button
    function toggleBulkDeleteButton() {
        let anyChecked = $('.row-checkbox:checked').length > 0;
        $('#bulk-delete-btn').toggleClass('d-none', !anyChecked);
    }

    // Bulk Delete button click
    $('#bulk-delete-btn').on('click', function () {
        let selectedIds = $('.row-checkbox:checked').map(function () {
            return $(this).val();
        }).get();

        if (selectedIds.length === 0) {
            Swal.fire('No Selection', 'Please select at least one record to delete.', 'warning');
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'This will delete all selected records permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete all',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '{{ route("bulk-delete.appointments") }}',
                    method: 'POST',
                    data: {
                        _token: '{{ csrf_token() }}',
                        ids: selectedIds
                    },
                    success: function () {
                        Swal.fire('Deleted!', 'Selected records have been deleted.', 'success')
                            .then(() => location.reload());
                    },
                    error: function () {
                        Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
                    }
                });
            }
        });
    });

    // Individual delete
    $(document).on('click', ".confirmDelete", function () {
        let id = $(this).data('id');
        Swal.fire({
            title: "Are you sure?",
            text: "This action is irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/delete-appointment/" + id;
            }
        });
    });
});

    </script>
@stop
