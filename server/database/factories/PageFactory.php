<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Page;
use Faker\Generator as Faker;

$factory->define(Page::class, function (Faker $faker) {

    $name = $faker->words($faker->numberBetween(1,4), true);
    $slug = Str::slug($name, '-');

    return [
        "name" => ucwords($name),
        "slug" => $slug, 
        "content" => $faker->realText($faker->numberBetween(50,255)),
    ];
});
