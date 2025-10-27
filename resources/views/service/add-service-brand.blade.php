@extends('layouts.app')
@section('style')
    <style>
        .form-check-input {
            width: 2.1em!important;
            height: 2.1em!important;
            margin-top: .2em;
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
                        <h4 class="mb-sm-0">{{$title}}</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                <li class="breadcrumb-item"><a href="{!! url('/all-service') !!}">Service</a></li>
                                <li class="breadcrumb-item active">{{$title}}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Page header end -->
            <div class="row gutters" style="background-color: white;padding:10px;">
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
                            <form method="post" action="{{ url('/add-service-brand') }}"  enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" name="service_id" value="{{ $id }}">
                                <div class="row">
                                    @foreach($brand as $row)
                                        <div class="col-md-2">
                                            <div class="card text-center">
                                                <label for="image_{{ $row->id }}" class="form-check-label">
                                                    <img loading="lazy" src="{{ asset($row->image) }}" width="100%" alt="Image"/>
                                                    <input type="checkbox" name="brand_id[]" value="{{ $row->id }}" id="image_{{ $row->id }}" class="form-check-input"
                                                           @if(in_array($row->id, $service_brand->pluck('brand_id')->toArray())) checked @endif>
                                                </label>
                                            </div>
                                        </div>
                                    @endforeach
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="btn btn-md btn-primary">Submit </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <div class="row gutters mt-3" style="background-color: white;padding:10px;">
                <div class="col-md-12">
                    <h3 class="mb-3">All Service Brand</h3>
                </div>
                @foreach($service_brand as $row)
                    <div class="col-md-2">
                        <div class="card text-center">
                            <img loading="lazy" src="{{ asset($row->brand->image) }}" width="100%" alt="Image"/>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function() {
            const categoryNameInput = document.getElementById("category_name");
            const categoryUrlInput = document.getElementById("category_url");
            categoryNameInput.addEventListener("input", function() {
                var title = this.value.toLowerCase();
                var res = title.replace(/ /g, "-");
                categoryUrlInput.value = res;
            });
        });
    </script>
    <script>
        function previewImage(event, previewId) {
            var reader = new FileReader();
            reader.onload = function(){
                var output = document.getElementById(previewId);
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>
@stop
