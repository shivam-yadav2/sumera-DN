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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->string('slug_url');
            $table->string('image');
            $table->string('banner')->nullable();
            $table->string('mobile_banner')->nullable();
            $table->text('description');
            $table->enum('is_front', ['no', 'yes'])->default('yes');
            $table->enum('menu_type', ['service', 'makeup'])->default('service');
            $table->enum('is_active', ['1', '2'])->default('1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
