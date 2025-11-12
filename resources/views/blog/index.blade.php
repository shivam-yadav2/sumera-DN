@extends('layouts.app')

@section('content')
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Blogs</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item active">Blogs</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title mb-0">All Blogs</h4>
                            <a href="{{ route('admin.blogs.create') }}" class="btn btn-success">
                                <i class="ri-add-line align-bottom me-1"></i> Add Blog
                            </a>
                        </div>
                        <div class="card-body">
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
                            <div class="table-responsive table-card mt-3 mb-1">
                                <table class="table align-middle table-nowrap" id="blogsTable">
                                    <thead class="table-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Featured Image</th>
                                            <th>Title</th>
                                            <th>Slug</th>
                                            <th>Published At</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($blogs as $key => $blog)
                                            <tr>
                                                <td>{{ $key + 1 }}</td>
                                                <td>
                                                    @if ($blog->featured_image)
                                                        <img loading="lazy" src="{{ asset($blog->featured_image) }}" alt="{{ $blog->title }}" style="height: 50px; width: 50px; object-fit: cover; border-radius: 6px;">
                                                    @else
                                                        <span class="text-muted">—</span>
                                                    @endif
                                                </td>
                                                <td>{{ $blog->title }}</td>
                                                <td>{{ $blog->slug }}</td>
                                                <td>{{ optional($blog->published_at)->format('d M Y') ?? 'Draft' }}</td>
                                                <td>
                                                    @if ($blog->is_active === '1')
                                                        <span class="badge bg-success">Active</span>
                                                    @else
                                                        <span class="badge bg-danger">Inactive</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <div class="d-flex gap-2">
                                                        <a href="{{ route('admin.blogs.create', $blog->id) }}" class="btn btn-sm btn-warning">Edit</a>
                                                        <button class="btn btn-sm btn-secondary toggle-status" data-url="{{ route('admin.blogs.status', $blog->id) }}">
                                                            {{ $blog->is_active === '1' ? 'Deactivate' : 'Activate' }}
                                                        </button>
                                                        <button class="btn btn-sm btn-dark delete-blog" data-url="{{ route('admin.blogs.destroy', $blog->id) }}">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="7" class="text-center text-muted">No blogs found.</td>
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
        $(document).on('click', '.toggle-status', function () {
            const actionUrl = $(this).data('url');
            Swal.fire({
                title: "Are you sure?",
                text: "You can toggle the status again later.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, continue!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = actionUrl;
                }
            });
        });

        $(document).on('click', '.delete-blog', function () {
            const actionUrl = $(this).data('url');
            Swal.fire({
                title: "Delete blog?",
                text: "This action cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = actionUrl;
                }
            });
        });
    </script>
@endsection

