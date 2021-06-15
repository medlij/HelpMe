<?php

namespace Database\Factories;

use App\Models\Tasker;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tasker::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'rating' => 4,
            // 'bio' => $this->faker->words(5, true),
        ];
    }
}
