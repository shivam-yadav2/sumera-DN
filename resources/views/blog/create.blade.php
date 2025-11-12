@extends('layouts.app')

@section('content')
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">{{ $title }}</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin.blogs.index') }}">Blogs</a></li>
                                <li class="breadcrumb-item active">{{ $title }}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body">
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            @if (Session::has('error_msg'))
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>{{ Session('error_msg') }}</strong>
                                </div>
                            @endif

                            <form method="POST" action="{{ $blog->id ? route('admin.blogs.create', $blog->id) : route('admin.blogs.create') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="mb-3">
                                    <label class="form-label">Title <span class="text-danger">*</span></label>
                                    <input type="text" name="title" class="form-control" value="{{ old('title', $blog->title) }}" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Slug (optional)</label>
                                    <input type="text" name="slug" class="form-control" value="{{ old('slug', $blog->slug) }}" placeholder="auto-generated from title if left blank">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Excerpt</label>
                                    <textarea name="excerpt" class="form-control" rows="3" maxlength="500">{{ old('excerpt', $blog->excerpt) }}</textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Content <span class="text-danger">*</span></label>
                                    <textarea name="content" class="form-control ckeditor" rows="12">{{ old('content', $blog->content) }}</textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Featured Image (optional)</label>
                                    <input type="file" name="featured_image" class="form-control" accept="image/*">
                                    <small class="text-muted">Recommended size 1200x600px. Max 3MB.</small>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Meta Title</label>
                                    <input type="text" name="meta_title" class="form-control" value="{{ old('meta_title', $blog->meta_title) }}" maxlength="255">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Meta Description</label>
                                    <textarea name="meta_description" class="form-control" rows="3" maxlength="1000">{{ old('meta_description', $blog->meta_description) }}</textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Publish Date</label>
                                        <input type="datetime-local" name="published_at" class="form-control"
                                               value="{{ old('published_at', optional($blog->published_at)->format('Y-m-d\TH:i')) }}">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Status</label>
                                        <select name="is_active" class="form-control">
                                            <option value="1" {{ old('is_active', $blog->is_active ?? '1') === '1' ? 'selected' : '' }}>Active</option>
                                            <option value="2" {{ old('is_active', $blog->is_active ?? '1') === '2' ? 'selected' : '' }}>Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="text-end">
                                    <button type="submit" class="btn btn-primary">{{ $blog->id ? 'Update Blog' : 'Create Blog' }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Featured Image Preview</h5>
                        </div>
                        <div class="card-body text-center">
                            @if ($blog->featured_image)
                                <img loading="lazy" src="{{ asset($blog->featured_image) }}" alt="{{ $blog->title }}" class="img-fluid rounded" id="image_preview">
                            @else
                                <img loading="lazy" src="https://via.placeholder.com/350x200?text=No+Image" alt="No preview" class="img-fluid rounded" id="image_preview">
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
    <script>
        document.querySelector('input[name="featured_image"]').addEventListener('change', function (event) {
            const [file] = event.target.files;
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('image_preview').src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        if (typeof CKEDITOR !== 'undefined') {
            CKEDITOR.replaceAll('ckeditor');
        }
    </script>
@endsection

