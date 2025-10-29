<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Service;

class HandleInertiaRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get active services for navbar (only show front menu items)
        $services = Service::where('is_active', '1')
            ->where('is_front', 'yes')
            ->orderBy('id', 'asc')
            ->get()
            ->map(function ($service) {
                return [
                    'id' => $service->id,
                    'title' => $service->title,
                    'slug_url' => $service->slug_url,
                    'menu_type' => $service->menu_type,
                ];
            });
        
        Inertia::share([
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'error' => fn () => $request->session()->get('error'),
                'success' => fn () => $request->session()->get('success'),
            ],
            'auth' => [
                'user' => fn () => $request->user() ? $request->user()->only('id', 'name', 'email') : null,
            ],
            'services' => $services,
        ]);

        return $next($request);
    }
}
