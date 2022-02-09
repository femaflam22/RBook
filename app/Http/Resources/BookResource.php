<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
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
            'category_id' => $this->category_id,
            'category_name' => $this->categories['name'],
            'user_id' => $this->user_id,
            'user_name' => $this->users['name'],
            'title' => $this->title,
            'description' => $this->description,
            'status' => $this->status,
            'readers' => $this->readers['total_reader'],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'image' => $this->image,
            'url_image' => asset("/assets/img/books") . "/" . $this->image,
        ];
    }
}
