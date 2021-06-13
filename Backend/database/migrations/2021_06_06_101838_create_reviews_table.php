<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->text('review');
            $table->unsignedBigInteger('client_id')->default();;
            $table->foreign('client_id')->references('id')->on('users');
            $table->unsignedBigInteger('tasker_id')->default();
            $table->foreign('tasker_id')->references('id')->on('taskers');
            $table->set('star_rating', [1,2,3,4,5])->default(5);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
