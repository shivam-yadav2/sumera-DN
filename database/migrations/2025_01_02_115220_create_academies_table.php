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
        Schema::create('academies', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->tinyInteger('position')->nullable();
            $table->enum('page', ['academy','course'])->default('academy')->comment('academy = academy main page, course = Academy course page contant');
            $table->string('image')->nullable();
            $table->text('description');
            $table->enum('is_active', ['1','2'])->default('1')->comment('1 = Active, 2 = Inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academies');
    }
};
