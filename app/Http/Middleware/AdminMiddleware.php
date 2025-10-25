<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if user is authenticated
        if (!auth()->check()) {
            return redirect()->route('login');
        }

        // Check if user has admin role (you can customize this logic)
        // For now, we'll assume all authenticated users can access admin
        // You can add role-based logic here later
        if (!auth()->user()->is_admin ?? true) {
            abort(403, 'Unauthorized access to admin area.');
        }

        return $next($request);
    }
}
