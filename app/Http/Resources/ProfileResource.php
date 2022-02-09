<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
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
            'image' => $this->image,
            'header' => $this->header,
            'url_image' => asset("/assets/img/profiles") . "/" . $this->image,
            'url_header' => asset("/assets/img/headers") . "/" . $this->header,
        ];
    }
}
