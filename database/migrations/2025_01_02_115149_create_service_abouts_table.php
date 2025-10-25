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
        Schema::create('service_abouts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->integer('service_id');
            $table->tinyInteger('position')->nullable();
            $table->enum('page', ['service','sub_service'])->default('service')->comment('service = service main page, sub_service = inner service page contant');
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
        Schema::dropIfExists('service_abouts');
    }
};
