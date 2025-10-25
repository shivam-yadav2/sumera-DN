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
                        <h4 class="mb-sm-0">{{ $title }}</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active">{{ $title }}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4 mb-3">
                <div class="col-sm-auto">
                    <div>
                        <a href="{{ url('/add-academny') }}" class="btn btn-success add-btn"><i
                                class="ri-add-line align-bottom me-1"></i> Add Academy About Section</a>
                    </div>
                </div>
            </div>
            <!-- Page header end -->
            <div class="row gutters">
                <div class="col-12">
                    <div class="table-responsive table-card mt-3 card m-3">
                        <table class="table align-middle table-nowrap" id="customerTable">
                            <thead class="table-dark bg-primary">
                            <tr class="table-primary">
                                <th class="sort">#</th>
                                <th class="sort">Title Name </th>
                                <th class="sort">Action</th>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all">
                            @foreach ($data as $key => $row)
                                <tr>
                                    <td>{!! $key+1 !!}</td>
                                    <td class="email">
                                        <div class="email-container">

                                            <div class="email-content">
                                                @if($row->title != null || $row->title != '')
                                                     {!! $row->title !!}
                                                @endif
                                               {{-- @if($row->description != null || $row->description != '')
                                                    <p class="p-0 m-0"> {!! $row->description !!}</p>
                                                @endif--}}
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <a href="{!! url('/add-academy/' . base64_encode($row->id)) !!}" class="btn btn-sm btn-primary remove-item-btn mr-2">Details View/ Edit / Update</a>
                                        <a class="confirmDelete btn btn-sm btn-danger remove-item-btn mr-2" data-id="{{ $row->id }}">Delete</a>
                                    </td>

                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="noresult" style="display: none">
                            <div class="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                           colors="primary:#121331,secondary:#08a88a"
                                           style="width:75px;height:75px"></lord-icon>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find
                                    any orders for you search.</p>
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
                $(document).ready(function() {
                    $('.edit-btn').on('click', function() {
                        const id = $(this).data('id');
                        const title = $(this).data('title');
                        const description = $(this).data('description');
                        // Populate the form in the modal
                        $('#courseId').val(id);
                        $('#title').val(title);
                        $('#description').val(description);
                        // Show the modal
                        $('#editModal').modal('show');
                    });
                });
            </script>
            <script>
                $(document).on('click', ".confirmDelete", function() {
                    var id = $(this).attr('data-id');
                    console.log(id);
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        console.log(result);
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            window.location.href = "/delete-academy/" + id;
                        }
                    });
                });
            </script>
            <script>
                function previewImage(event, previewId) {
                    var reader = new FileReader();
                    reader.onload = function() {
                        var output = document.getElementById(previewId);
                        output.src = reader.result;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                }
            </script>
@stop
