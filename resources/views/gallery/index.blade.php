@extends('layouts.app')
@section('style')
    <style>
        .delete-icon {
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .delete-icon:hover {
            background-color: rgba(255, 255, 255, 1);
        }
        div:where(.swal2-icon) .swal2-icon-content {
            display: flex;
            align-items: center;
            font-size: 1.2em !important;
        }

        .swal2-popup .swal2-styled {
            margin: 0px 5px 0 !important;
            padding: 10px 32px;
        }
    </style>
@stop
@section('content')
    <div class="page-content">
        <div class="container-fluid">
            <!-- Page header start -->
            <div class="row gutters">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Gallery</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item active">Gallery</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Page header end -->
            
            <div class="row">
                <div class="col-sm-auto">
                    <div>
                        <a href="{{ route('admin.gallery.create') }}" class="btn btn-success add-btn">
                            <i class="ri-add-line align-bottom me-1"></i> Add Gallery Images
                        </a>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-xxl-12">
                    <h5 class="mb-3">All Gallery Images By Services</h5>
                    <div class="card">
                        <div class="card-body">
                            @if ($gallery->isEmpty())
                                <div class="text-center py-5">
                                    <p class="text-muted">No gallery images found. Please add some images.</p>
                                </div>
                            @else
                                <div class="row">
                                    @foreach ($gallery as $row)
                                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                                            <div class="card border">
                                                <p class="text-center mt-2 mb-1"><strong>{{ ucwords($row->title ?? 'Untitled') }}</strong></p>
                                                @if($row->service)
                                                    <p class="text-center text-muted mb-1" style="font-size: 12px;">{{ $row->service->title }}</p>
                                                @endif
                                                <img loading="lazy" class="card-img-top img-fluid" src="{{ asset($row->image) }}" alt="{{ $row->title }}">
                                                <div class="p-2">
                                                    <div class="form-check form-switch form-switch-md mb-2">
                                                        <label for="front{{ $row->id }}" class="form-label text-muted">Front View</label>
                                                        <input class="form-check-input UpdateStatus" type="checkbox" id="front{{ $row->id }}"
                                                               data-id="{{ $row->id }}"
                                                                {{ $row->is_front == 'yes' ? 'checked' : '' }}>
                                                    </div>
                                                    <a class="confirmDelete w-100 btn btn-sm btn-danger remove-item-btn"
                                                       data-id="{{ $row->id }}">Remove</a>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            @endif
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
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    window.location.href = "/admin/gallery/" + id + "/delete";
                }
            });
        });
    </script>
    <script>
        $(document).on('click', ".UpdateStatus", function() {
            var id = $(this).attr('data-id');
            Swal.fire({
                title: "Are you sure?",
                text: "You want to update the front view status!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Update it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Gallery Front View has been Updated.",
                        icon: "success"
                    });
                    window.location.href = "/admin/gallery/" + id + "/update";
                }
            });
        });
    </script>
@stop
