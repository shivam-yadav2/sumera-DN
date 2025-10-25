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
        Schema::create('feature_celebrities', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->enum('page', ['feature','celebrity'])->default('celebrity')->comment('celebrity = About Home Page, feature = feature Inner page');
            $table->enum('is_front', ['no', 'yes'])->default('no');
            $table->string('image')->nullable();
            $table->enum('is_active', ['1','2'])->default('1')->comment('1 = Active, 2 = Inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feature_celebrities');
    }
};
