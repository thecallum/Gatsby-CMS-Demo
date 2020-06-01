<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::all();

        return $pages;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // name, slug, content
        $page = new Page;

        $data = [
            "name" => $request->input('name'),
            "slug" => $request->input('slug'),
            "content" => $request->input('content'),
        ];

        $rules = [
            'name' => 'required|min:3|max:255',
            'slug' => 'required|min:3|max:255',
            'content' => 'required|min:3|max:255',
        ];

        $validator = \Validator::make($data, $rules);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()]);

        $page->name = $request->input('name');
        $page->slug = $request->input('slug');
        $page->content = $request->input('content');

        $page->save();

        return $page;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $page = Page::find($id);

        if ($page == null) return abort(404);

        return $page;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // name, slug, content
        $page = Page::find($id);
        if ($page == null) return abort(404);

        $data = [
            "name" => $request->input('name'),
            "slug" => $request->input('slug'),
            "jsonContent" => $request->input('jsonContent'),
        ];

        $rules = [
            'name' => 'required|min:3|max:255',
            'slug' => 'required|min:3|max:255',
            // 'content' => 'required|min:3|max:255',
            'jsonContent' => 'required|json'
        ];

        $validator = \Validator::make($data, $rules);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()]);

        $page->name = $request->input('name');
        $page->slug = $request->input('slug');
        $page->jsonContent = $request->input('jsonContent');

        $page->save();

        return $page;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $page = Page::find($id);
        if ($page == null) return abort(404);

        $page->delete();
    }
}
