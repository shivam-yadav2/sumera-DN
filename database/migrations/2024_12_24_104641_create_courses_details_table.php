<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses_details', function (Blueprint $table) {
            $table->id();
            $table->string('course_id');
            $table->string('heading');
            $table->string('course_price');
            $table->string('offer_price');
            $table->string('duration');
            $table->text('description')->nullable();
            $table->enum('is_active', ['1', '2'])->default('1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses_details');
    }
};
