@extends("layouts.app")

@section("content")
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
           
          <h1>Create page</h1>

          @if ($errors->any())
              <div class="alert alert-danger">
                  <ul>
                      @foreach ($errors->all() as $error)
                          <li>{{ $error }}</li>
                      @endforeach
                  </ul>
              </div>
          @endif
      
          <form action="/page/" method="post">
      
              @csrf
      
              <div class="form-group">
                <label for="name_input">Page Name</label>
              <input type="text" class="form-control" id="name_input" name="name" value="{{ old("name") ?? "" }}">
              </div>
      
              <div class="form-group">
                  <label for="slug_input">Page Slug</label>
                  <input type="text" class="form-control" id="slug_input" name="slug" value="{{ old("slug") ?? "" }}">
                </div>
                
                <div class="form-group">
                  <label for="content_input">Page Contents</label>
                  <input type="text" class="form-control" id="content_input" name="content" value="{{ old("content") ?? "" }}">
                </div>
        
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
           
      

        </div>
    </div>
</div>


@endsection