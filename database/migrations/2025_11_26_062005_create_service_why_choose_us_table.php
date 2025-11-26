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
        Schema::create('service_why_choose_us', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id');
            $table->string('icon')->default('Award')->comment('Lucide icon name: Award, Sparkles, Heart, Shield, Clock, Users, Star, Trophy, CheckCircle');
            $table->string('title');
            $table->text('description');
            $table->integer('order')->default(0);
            $table->enum('is_active', ['1', '2'])->default('1')->comment('1 = Active, 2 = Inactive');
            $table->timestamps();
            
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_why_choose_us');
    }
};
