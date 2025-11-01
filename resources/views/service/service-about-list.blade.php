@extends('layouts.app')
@section('style')
    <style>
        .form-check-input {
            width: 2.1em!important;
            height: 2.1em!important;
            margin-top: .2em;
        }
        .delete-icon {
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        .delete-icon:hover {
            background-color: rgba(255, 255, 255, 1);
        }
    </style>
@stop
@section('content')
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Service About Management</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin.services.index') }}">Services</a></li>
                                <li class="breadcrumb-item active">Service About</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title mb-0">All Service About Entries</h4>
                        </div>
                        <div class="card-body">
                            <div id="message-container">
                                @if ($errors->any())
                                    <div class="alert alert-danger">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                @if (Session::has('success'))
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>{{ Session('success') }}</strong>
                                    </div>
                                @endif
                                @if (Session::has('error'))
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>{{ Session('error') }}</strong>
                                    </div>
                                @endif
                            </div>

                            <div class="table-responsive table-card mt-3 mb-1">
                                <table class="table align-middle table-nowrap" id="customerTable">
                                    <thead class="table-dark bg-primary">
                                        <tr class="table-primary">
                                            <th class="sort">#</th>
                                            <th class="sort">Service</th>
                                            <th class="sort">Title</th>
                                            <th class="sort">Image</th>
                                            <th class="sort">Position</th>
                                            <th class="sort">Status</th>
                                            <th class="sort">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list form-check-all">
                                        @forelse ($about as $key => $row)
                                            <tr>
                                                <td>{{ $key + 1 }}</td>
                                                <td>
                                                    {{ $row->service->title ?? 'N/A' }}
                                                </td>
                                                <td>
                                                    <strong>{{ $row->title ?? 'N/A' }}</strong>
                                                </td>
                                                <td>
                                                    @if($row->image)
                                                        <img src="{{ asset($row->image) }}" alt="{{ $row->title }}" style="max-width: 100px; max-height: 100px; object-fit: cover;">
                                                    @else
                                                        <span class="text-muted">No Image</span>
                                                    @endif
                                                </td>
                                                <td>{{ $row->position ?? 'N/A' }}</td>
                                                <td class="status">
                                                    @if($row->is_active == 1)
                                                        <span class="badge badge-soft-success text-uppercase">Active</span>
                                                    @else
                                                        <span class="badge badge-soft-danger text-uppercase">Inactive</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <div class="edit">
                                                            <a href="{{ route('admin.service-about.update', $row->id) }}"
                                                               class="btn btn-sm btn-primary edit-item-btn">
                                                                Edit
                                                            </a>
                                                        </div>
                                                        <div class="remove">
                                                            <a class="confirmDelete btn btn-sm btn-danger remove-item-btn" 
                                                               data-id="{{ $row->id }}">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="7" class="text-center py-4">
                                                    <p class="text-muted">No Service About entries found.</p>
                                                    <a href="{{ route('admin.services.index') }}" class="btn btn-primary">Go to Services</a>
                                                </td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        $(document).on('click', ".confirmDelete", function() {
            var id = $(this).attr('data-id');
            var deleteUrl = "{{ url('/admin/service-about') }}/" + id + "/delete";
            
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = deleteUrl;
                }
            });
        });
    </script>
@stop

