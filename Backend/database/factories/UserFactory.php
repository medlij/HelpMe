<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'is_provider' => 1,
            'category' => 'cleaning',
            'password' => 'liklik123',
            'avatar' => "https://picsum.photos/200/300?random=2",
            'remember_token' => Str::random(4),
        ];
    }

}
