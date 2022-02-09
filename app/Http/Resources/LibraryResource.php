<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LibraryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'book_id' => $this->book_id,
            'last_chapter' => $this->last_chapter,
            'book_name' => $this->books['title'],
            'book_image' => $this->books['image'],
            'url_image' => asset("/assets/img/books") . "/" . $this->books['image'],
        ];
    }
}
