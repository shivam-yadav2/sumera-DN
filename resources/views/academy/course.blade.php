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
                <div class="col-8">
                    <div class="table-responsive table-card mt-3 card m-3">
                        <table class="table align-middle table-nowrap" id="customerTable">
                            <thead class="table-dark bg-primary">
                                <tr class="table-primary">
                                    <th class="sort">#</th>
                                    <th class="sort">Course Details</th>
                                    <th class="sort">Action</th>
                                </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                @foreach ($data as $key => $row)
                                    <tr>
                                        <td>{!! $key + 1 !!}</td>
                                        <td class="email">
                                            <div class="email-container">
                                                <div class="email-content">
                                                    @if($row->title)
                                                        <p class="p-0 m-0"><strong>Title:</strong> {!! $row->title !!}</p>
                                                    @endif
                                                    @if($row->duration)
                                                        <p class="p-0 m-0"><strong>Duration:</strong> {!! $row->duration !!}</p>
                                                    @endif
                                                    @if($row->description)
                                                        <p class="p-0 m-0"><strong>Description:</strong> {!! Str::limit($row->description, 50) !!}</p>
                                                    @endif
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-primary edit-btn"
                                    data-id="{{ base64_encode($row->id) }}" 
                                    data-title="{{ $row->title }}"
                                    data-duration="{{ $row->duration }}"
                                    data-description="{{ $row->description }}"
                                    data-course-detail="{{ $row->course_detail }}">Edit</button>
                                                {{-- <a href="{{ route('admin.course-details.create', base64_encode($row->id)) }}"
                                                    class="btn btn-sm btn-success">Course Details</a> --}}
                                                <a class="confirmDelete btn btn-sm btn-danger"
                                                    data-id="{{ $row->id }}">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <div class="noresult" style="display: none">
                            <div class="text-center">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                    colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find
                                    any orders for you search.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
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
                            <form method="post" action="{{ route('admin.courses.create') }}"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row ">
                                    <div class="col-md-12">
                                        <div class="row gutters">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5 class="card-title mb-0">Add {{ $title }} </h5>
                                                </div>
                                                <div class="card-body row">

                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Course Name <span
                                                                    class="text-danger">*</span></label>
                                                            <input type="text" class="form-control"
                                                                value="{!! old('title') !!}" name="title"
                                                                placeholder="Course Title" required />
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="duration">Duration</label>
                                                            <input type="text" class="form-control"
                                                                value="{!! old('duration') !!}" name="duration"
                                                                placeholder="e.g., 8 Weeks" />
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="description">Short Description</label>
                                                            <textarea rows="3" class="form-control" name="description" placeholder="Short Course Description (Plain text)">{!! old('description') !!}</textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="course_detail">Course Detail (Rich Content)</label>
                                                            <textarea rows="8" class="form-control ckeditor" name="course_detail" id="course_detail_editor" placeholder="Detailed Course Information with formatting">{!! old('course_detail') !!}</textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 text-center mt-3">
                                                        <button type="submit" class="btn btn-md btn-primary">Submit
                                                            Course</button>
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


            </div>



            <!-- Modal -->
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Update Course Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <form id="editForm" action="{{ route('admin.courses.update') }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="modal-body">
                                <input type="hidden" name="id" id="courseId">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Course Name <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="title" id="title" required>
                                </div>
                                <div class="mb-3">
                                    <label for="duration" class="form-label">Duration</label>
                                    <input type="text" class="form-control" name="duration" id="duration">
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">Short Description</label>
                                    <textarea class="form-control" name="description" id="description" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="course_detail_modal" class="form-label">Course Detail (Rich Content)</label>
                                    <textarea class="form-control ckeditor" name="course_detail" id="course_detail_modal" rows="8"></textarea>
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
        <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
        <script>
            $(document).ready(function() {
                // Initialize CKEditor for the create form
                if (document.getElementById('course_detail_editor')) {
                    CKEDITOR.replace('course_detail_editor');
                }

                $('.edit-btn').on('click', function() {
                    const id = $(this).data('id');
                    const title = $(this).data('title');
                    const duration = $(this).data('duration');
                    const description = $(this).data('description');
                    const courseDetail = $(this).data('course-detail');
                    
                    // Populate the form in the modal
                    $('#courseId').val(id);
                    $('#title').val(title);
                    $('#duration').val(duration);
                    $('#description').val(description);
                    
                    // Show the modal
                    $('#editModal').modal('show');

                    // Initialize CKEditor for the modal if not already initialized
                    setTimeout(function() {
                        if (!CKEDITOR.instances['course_detail_modal']) {
                            CKEDITOR.replace('course_detail_modal');
                        }
                        // Set the course detail content
                        if (CKEDITOR.instances['course_detail_modal']) {
                            CKEDITOR.instances['course_detail_modal'].setData(courseDetail || '');
                        }
                    }, 300);
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
                        window.location.href = "/admin/courses/" + id + "/delete";
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
