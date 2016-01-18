<!doctype html>
<html class="no-js" lang="">
<head>
@include('partials.meta')
@include('partials.styles')
</head>
<body>
@yield('landing')
@include('layout.header')
@yield('content')
@include('layout.footer')
@include('partials.scripts')
</body>
</html>


