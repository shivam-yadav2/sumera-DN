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
            <!-- Page header end -->
            <div class="row gutters">
                <div class="col-12">
                    <!-- Wizard start -->
                    <div id="example-form">
                        <section>
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
                                @if (Session::has('success_msg'))
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>{{ Session('success_msg') }}</strong>
                                    </div>
                                @endif
                                @if (Session::has('error_msg'))
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>{{ Session('error_msg') }}</strong>
                                    </div>
                                @endif
                            </div>
                            <form method="post" action="{{ url('/add-course-details/'.$id) }}" enctype="multipart/form-data">
                                @csrf
                                <div class="row ">
                                    <div class="col-md-12">
                                        <div class="row gutters">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5 class="card-title mb-0">Add {{ $title }} </h5>
                                                </div>
                                                <div class="card-body row">
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Course Heading <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" value="{!! old('heading') !!}" name="heading" placeholder="Course heading" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Course Price <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" value="{!! old('course_price') !!}" name="course_price" placeholder="Course Price" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Course Price <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" value="{!! old('offer_price') !!}" name="offer_price" placeholder="Course Offer Price" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Course Duration <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" value="{!! old('duration') !!}" name="duration" placeholder="Course Duration" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Description</label>
                                                            <textarea  rows="3" class="form-control ckeditor" name="description"  placeholder="Course Description">
                                                                {!! old('description') !!}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 text-center mt-3">
                                                        <button type="submit" class="btn btn-md btn-primary">Submit Brand</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </section>
                    </div>
                </div>
                <div class="col-12">
                    <div class="table-responsive table-card mt-3 card m-3">
                        <table class="table align-middle table-nowrap">
                            <thead class="table-dark">
                            <tr class="table-primary">
                                <th>#</th>
                                <th>Action</th>
                                <th>Heading</th>
                                <th>Course Price</th>
                                <th>Offer Price</th>
                                <th>Duration</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all">
                            @foreach ($data as $key => $row)
                                <tr>
                                    <td>{!! $key+1 !!}</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary edit-btn" data-id="{{ base64_encode($row->id) }}" data-heading="{{ $row->heading }}"  data-price="{{ $row->course_price }}"  data-offer="{{ $row->offer_price }}" data-duration="{{ $row->duration }}" data-description="{{ $row->description }}">Edit / Update</button>
                                        <a class="confirmDelete btn btn-sm btn-danger remove-item-btn mr-2" data-id="{{ $row->id }}">Delete</a>
                                    </td>
                                    <td>
                                        @if($row->title != null || $row->heading != '')
                                            {!! $row->heading !!}
                                        @endif
                                    </td>
                                    <td>
                                        @if($row->course_price != null || $row->course_price != '')
                                            ₹{!! $row->course_price !!}
                                        @endif
                                    </td>
                                    <td>
                                        @if($row->offer_price != null || $row->offer_price != '')
                                            ₹{!! $row->offer_price !!}
                                        @endif
                                    </td>
                                    <td>
                                        @if($row->duration != null || $row->duration != '')
                                             {!! $row->duration !!}
                                        @endif
                                    </td>
                                    <td>
                                        @if($row->description != null || $row->description != '')
                                             {!! $row->description !!}
                                       @endif
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="noresult" style="display: none">
                            <div class="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Update Course Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="editForm" action="{{ url('/update-course-details') }}" method="POST">
                            @csrf
                            <div class="modal-body">
                                <div class="row">
                                    <input type="hidden" name="id" id="courseId">
                                    <div class="mb-3 col-lg-12">
                                        <label for="heading" class="form-label">Title <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="heading" id="heading" required>
                                    </div>
                                    <div class="mb-3 col-lg-4">
                                        <label for="course_price" class="form-label">Course Price <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="course_price" id="course_price" required>
                                    </div>
                                    <div class="mb-3 col-lg-4">
                                        <label for="offer_price" class="form-label">Offer Price <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="offer_price" id="offer_price" required>
                                    </div>
                                    <div class="mb-3 col-lg-4">
                                        <label for="duration" class="form-label">Duration <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="duration" id="duration" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control ckeditor" name="description" id="description" rows="4" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success">Save Changes</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        @endsection
        @section('scripts')
            <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

            <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
{{--            <script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.25.0/ckeditor.min.js" integrity="sha512-Z85Fu7UNiaY9VJHpFZhXVWfw9dg8NIer0rqoaR52+iyLwQ2qg8qwwL0uUicd4vYJ6q4eOq8loyFG3jGHPLUiow==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>--}}
            <script>

                // Replace all textareas with CKEditor
                CKEDITOR.replace('ckeditor');

                // Auto-fill data into the editor on popup modal display
                $(document).ready(function() {
                    $('.edit-btn').on('click', function() {
                        const description = $(this).data('description');
                        const editor = CKEDITOR.instances['description'];
                        if (editor) {
                            editor.setData(description);
                        }
                        $('#editModal').modal('show');
                    });
                });
            </script>
            <script>
                $(document).ready(function() {
                    $('.edit-btn').on('click', function() {
                        const id = $(this).data('id');
                        const heading = $(this).data('heading');
                        const price = $(this).data('price');
                        const offer = $(this).data('offer');
                        const duration = $(this).data('duration');
                        const description = $(this).data('description');
                        // Populate the form in the modal
                        $('#courseId').val(id);
                        $('#heading').val(heading);
                        $('#course_price').val(price);
                        $('#offer_price').val(offer);
                        $('#duration').val(duration);
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
                            window.location.href = "/delete-course/" + id;
                        }
                    });
                });
            </script>

@stop
