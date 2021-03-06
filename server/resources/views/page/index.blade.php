@extends("layouts.app")

@section("content")
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
           
            
            <h1>Pages</h1>

            <p><a href="/page/create" class="btn btn-primary">Create page</a></p>
        
        
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
             
                        <th></th>
                    </tr>
                </thead>
                <tbody>
        
                    @foreach($pages as $page)
                        <tr>
                            <td>{{ $page->name }}</td>
                            <td>{{ $page->slug }}</td>
                
                            <td><a href="/page/{{ $page->id }}/edit">Edit</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

        </div>
    </div>
</div>


@endsection