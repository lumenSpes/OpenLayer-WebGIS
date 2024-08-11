<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Map | WebGIS</title>

    {{-- open layers css styles --}}
    <link rel="stylesheet" href="{{ asset('ol-v10.0.0/ol.css') }}">

    {{-- custom css styles --}}
    <link rel="stylesheet" href="{{ asset('styles/index.css') }}">
</head>
<body>
    @yield('content')

    {{-- open layers scripts --}}
    <script src="{{ asset('ol-v10.0.0/dist/ol.js') }}"></script>

    {{-- custom scripts --}}
    <script src="{{ asset('js/index.js') }}"></script>
</body>
</html>
