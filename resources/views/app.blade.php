<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Sumeera Salon And Academy - Premium Beauty Salon in Lucknow') }}</title>
        
        <!-- Default Meta Tags (will be overridden by Inertia Head component) -->
        <meta name="description" content="Experience luxury beauty services at Sumeera Salon And Academy in Lucknow. Expert hair styling, makeup, skincare, and professional beauty training. Book your appointment today!">
        <meta name="keywords" content="beauty salon lucknow, makeup artist lucknow, hair salon, beauty academy, bridal makeup, professional training">
        <meta name="author" content="Sumeera Salon And Academy">
        
        <!-- Open Graph Meta Tags -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="Sumeera Salon And Academy - Premium Beauty Salon in Lucknow">
        <meta property="og:description" content="Experience luxury beauty services at Sumeera Salon And Academy in Lucknow. Expert hair styling, makeup, skincare, and professional beauty training.">
        <meta property="og:image" content="{{ asset('/assets/images/og-image.jpg') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        
        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Sumeera Salon And Academy - Premium Beauty Salon in Lucknow">
        <meta name="twitter:description" content="Experience luxury beauty services at Sumeera Salon And Academy in Lucknow. Expert hair styling, makeup, skincare, and professional beauty training.">
        <meta name="twitter:image" content="{{ asset('/assets/images/og-image.jpg') }}">

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="{{ asset('/assets/logo/favicon.png') }}">
        <link rel="apple-touch-icon" href="{{ asset('/assets/logo/favicon.png') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
