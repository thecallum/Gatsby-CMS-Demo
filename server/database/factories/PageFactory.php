<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Page;
use Faker\Generator as Faker;

$factory->define(Page::class, function (Faker $faker) {

    $name = $faker->words($faker->numberBetween(1,4), true);
    $slug = Str::slug($name, '-');

    $content = $faker->realText($faker->numberBetween(50,2550));

    $jsonContent = [
        [
            "name" => "TextInput",
            "state" => [
                "content" => $content
            ],
            "props" => [
                "rows" => [
                    "label" => "Rows",
                    "value" => 8
                ]
            ]
        ]
    ];

    $jsonContent = json_encode($jsonContent);



    return [
        "name" => ucwords($name),
        "slug" => $slug, 
        "jsonContent" => $jsonContent
    ];
});
