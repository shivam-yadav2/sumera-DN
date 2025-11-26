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
                        <h4 class="mb-sm-0">{{ $title }} - {{ $service->title }}</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin.services.index') }}">Services</a></li>
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
                                <th>Icon</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Order</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all">
                            @foreach ($data as $key => $row)
                                <tr>
                                    <td>{!! $key+1 !!}</td>
                                    <td>
                                        <i class="lucide-{{ strtolower($row->icon) }}"></i> {{ $row->icon }}
                                    </td>
                                    <td>{{ $row->title }}</td>
                                    <td>{{ Str::limit($row->description, 50) }}</td>
                                    <td>{{ $row->order }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary edit-btn"
                                                data-id="{{ base64_encode($row->id) }}" 
                                                data-icon="{{ $row->icon }}"
                                                data-title="{{ $row->title }}"
                                                data-description="{{ $row->description }}"
                                                data-order="{{ $row->order }}">Edit
                                        </button>
                                        <a class="confirmDelete btn btn-sm btn-danger remove-item-btn mr-2"
                                           data-id="{{ $row->id }}">Delete</a>
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
                                <p class="text-muted mb-0">We did not find any features for this service.</p>
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
                            <form method="post" action="{{ url('/admin/service-why-choose-us/'.$id) }}" enctype="multipart/form-data">
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
                                                            <label for="icon">Icon <span class="text-danger">*</span></label>
                                                            <select class="form-control" name="icon" required>
                                                                <option value="">Select Icon</option>
                                                                <option value="Award">Award</option>
                                                                <option value="Sparkles">Sparkles</option>
                                                                <option value="Heart">Heart</option>
                                                                <option value="Shield">Shield</option>
                                                                <option value="Clock">Clock</option>
                                                                <option value="Users">Users</option>
                                                                <option value="Star">Star</option>
                                                                <option value="Trophy">Trophy</option>
                                                                <option value="CheckCircle">CheckCircle</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="title">Title <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control"
                                                                   value="{!! old('title') !!}" name="title"
                                                                   placeholder="Feature title" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="description">Description <span class="text-danger">*</span></label>
                                                            <textarea rows="3" class="form-control"
                                                                      name="description"
                                                                      placeholder="Feature Description" required>{!! old('description') !!}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group mb-2">
                                                            <label for="order">Order</label>
                                                            <input type="number" class="form-control"
                                                                   value="{!! old('order', 0) !!}" name="order"
                                                                   placeholder="Display order (0 = first)"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 text-center mt-3">
                                                        <button type="submit" class="btn btn-md btn-primary">Submit Feature</button>
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
                            <h5 class="modal-title" id="staticBackdropLabel">Update Feature</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="editForm" action="{{ url('/admin/service-why-choose-us/update') }}" method="POST">
                            @csrf
                            <div class="modal-body">
                                <div class="row">
                                    <input type="hidden" name="id" id="featureId">
                                    <div class="mb-3 col-lg-12">
                                        <label for="edit_icon" class="form-label">Icon <span class="text-danger">*</span></label>
                                        <select class="form-control" name="icon" id="edit_icon" required>
                                            <option value="">Select Icon</option>
                                            <option value="Award">Award</option>
                                            <option value="Sparkles">Sparkles</option>
                                            <option value="Heart">Heart</option>
                                            <option value="Shield">Shield</option>
                                            <option value="Clock">Clock</option>
                                            <option value="Users">Users</option>
                                            <option value="Star">Star</option>
                                            <option value="Trophy">Trophy</option>
                                            <option value="CheckCircle">CheckCircle</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col-lg-12">
                                        <label for="edit_title" class="form-label">Title <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="title" id="edit_title" required>
                                    </div>
                                    <div class="mb-3 col-lg-12">
                                        <label for="edit_description" class="form-label">Description <span class="text-danger">*</span></label>
                                        <textarea class="form-control" name="description" id="edit_description"
                                                  rows="4" required></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-12">
                                        <label for="edit_order" class="form-label">Order</label>
                                        <input type="number" class="form-control" name="order" id="edit_order">
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

            <script>
                $(document).ready(function () {
                    $('.edit-btn').on('click', function () {
                        const id = $(this).data('id');
                        const icon = $(this).data('icon');
                        const title = $(this).data('title');
                        const description = $(this).data('description');
                        const order = $(this).data('order');
                        
                        // Populate the form in the modal
                        $('#featureId').val(id);
                        $('#edit_icon').val(icon);
                        $('#edit_title').val(title);
                        $('#edit_description').val(description);
                        $('#edit_order').val(order);
                        
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
                                text: "The feature has been deleted.",
                                icon: "success"
                            });
                            window.location.href = "/admin/service-why-choose-us/" + id + "/delete";
                        }
                    });
                });
            </script>

@stop

