@extends('layouts.app')
@section('style')
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
                        <table class="table align-middle table-nowrap">
                            <thead class="table-dark">
                            <tr class="table-primary">
                                <th>#</th>
                                <th>Action</th>
                                <th>Heading</th>

                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all">
                            @foreach ($data as $key => $row)
                                <tr>
                                    <td>{!! $key+1 !!}</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary edit-btn"
                                                data-id="{{ base64_encode($row->id) }}" data-title="{{ $row->title }}"
                                                data-image="{{ $row->image }}"
                                                data-description="{{ $row->description }}">Edit / Update
                                        </button>
                                        <a class="confirmDelete btn btn-sm btn-danger remove-item-btn mr-2"
                                           data-id="{{ $row->id }}">Delete</a>
                                    </td>
                                    <td>

                                        <img width="80px" src="{!! asset($row->image) !!}" alt="{!! $row->title !!}">
                                    </td>

                                    <td>
                                        @if($row->title != null || $row->title != '')
                                            <h5 class="mb-0">{!! $row->title !!}</h5>
                                        @endif

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
                            <form method="post" action="{{ url('/add-sub-service/'.$id) }}" enctype="multipart/form-data">
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
                                                            <label for="fullName">Course Heading <span
                                                                    class="text-danger">*</span></label>
                                                            <input type="text" class="form-control"
                                                                   value="{!! old('title') !!}" name="title"
                                                                   placeholder="Sub Service title" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">Description</label>
                                                            <textarea rows="3" class="form-control ckeditor"
                                                                      name="description"
                                                                      placeholder="Course Description">
                                                                {!! old('description') !!}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">500*500 <span
                                                                    class="text-danger">*</span></label>
                                                            <input type="file" accept="image/*,video/*"
                                                                   class="form-control"
                                                                   onchange="previewImage(event, 'image_preview')"
                                                                   name="image" placeholder="Upload Image" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                                        <div class="form-group mb-2">
                                                            <label for="fullName">500*500 <span
                                                                    class="text-danger">*</span></label>
                                                            <img id="image_preview"
                                                                 src="{{ old('image', asset($about->image ?? '')) }}"
                                                                 alt=" Image Preview"
                                                                 style="max-width: 100%; margin-top: 10px;"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 text-center mt-3">
                                                        <button type="submit" class="btn btn-md btn-primary">Submit
                                                            Service
                                                        </button>
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
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Update Course Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="editForm" action="{{ url('/update-sub-service') }}" method="POST"  enctype="multipart/form-data">
                            @csrf
                            <div class="modal-body">
                                <div class="row">
                                    <input type="hidden" name="id" id="serviceId">
                                    <div class="mb-3 col-lg-12">
                                        <label for="title" class="form-label">Title <span
                                                class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="title" id="title" required>
                                    </div>
                                    <div class="mb-3 col-lg-12">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control ckeditor" name="description" id="description"
                                                  rows="4" required></textarea>
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                        <div class="form-group mb-2">
                                            <label for="fullName">500*500 <span class="text-danger">*</span></label>
                                            <input type="file" accept="image/*,video/*" class="form-control"
                                                   onchange="previewImage(event, 'image_preview')" name="image"
                                                   placeholder="Upload Image"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                        <div class="form-group mb-2">
                                            <label for="fullName">500*500 <span class="text-danger">*</span></label>
                                            <img id="image_preview" src="{{ old('image', asset($about->image ?? '')) }}"
                                                 alt=" Image Preview" style="max-width: 100%; margin-top: 10px;"/>
                                        </div>
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
            <script src="https://code.jquery.com/jquery-3.7.1.js"
                    integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

            <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
            {{--            <script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.25.0/ckeditor.min.js" integrity="sha512-Z85Fu7UNiaY9VJHpFZhXVWfw9dg8NIer0rqoaR52+iyLwQ2qg8qwwL0uUicd4vYJ6q4eOq8loyFG3jGHPLUiow==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>--}}
            <script>

                // Replace all textareas with CKEditor
                CKEDITOR.replace('ckeditor');

                // Auto-fill data into the editor on popup modal display
                $(document).ready(function () {
                    $('.edit-btn').on('click', function () {
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
                $(document).ready(function () {
                    $('.edit-btn').on('click', function () {
                        const id = $(this).data('id');
                        const title = $(this).data('title');
                        const image = $(this).data('image');
                        const description = $(this).data('description');
                        // Populate the form in the modal
                        $('#serviceId').val(id);
                        $('#title').val(title);
                        $('#image_preview').val(image);
                        $('#description').val(description);
                        // Show the modal
                        $('#editModal').modal('show');
                    });
                });
            </script>
            <script>
                $(document).on('click', ".confirmDelete", function () {
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

            <script>
                function previewImage(event, previewId) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        var output = document.getElementById(previewId);
                        output.src = reader.result;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                }
            </script>

@stop
