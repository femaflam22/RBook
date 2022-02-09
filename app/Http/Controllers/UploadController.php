<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class UploadController extends Controller
{
    /**
     * Upload a file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        $image = $request->file('image');
        $input['imagename'] = time() . rand() . '.' . $image->extension();
        if (!file_exists(public_path('/assets/img/' . $request->form . '/' . $image->getClientOriginalName()))) {
            $destinationPath = public_path('/assets/img/' . $request->form . '/');
            if ($image->move($destinationPath, $input['imagename'])) {
                return response($input['imagename']);
            }
        }
    }

    public function uploadChapter(Request $request)
    {
        $image = $request->file('upload');
        $input['imagename'] = time() . rand() . '.' . $image->extension();
        if (!file_exists(public_path('/assets/img/chapters/'. $image->getClientOriginalName()))) {
            $destinationPath = public_path('/assets/img/chapters/');
            if ($image->move($destinationPath, $input['imagename'])) {
                return response()->json(asset("/assets/img/chapters") . "/" . $input['imagename']);
            }
        }
    }

    public function uploadHeader(Request $request)
    {
        $image = $request->file('header');
        $input['imagename'] = time() . rand() . '.' . $image->extension();
        if (!file_exists(public_path('/assets/img/' . $request->form . '/' . $image->getClientOriginalName()))) {
            $destinationPath = public_path('/assets/img/' . $request->form . '/');
            if ($image->move($destinationPath, $input['imagename'])) {
                return response($input['imagename']);
            }
        }
    }

    public function delete(Request $request)
    {
        $form = $request->header('_form');
        $pathOri = public_path('/assets/img/' . $form . '/' . request()->getContent());
        File::delete($pathOri);
        return response('ok');
    }
}
