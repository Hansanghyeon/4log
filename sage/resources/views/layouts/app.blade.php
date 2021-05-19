<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp data-barba="wrapper">
  @php do_action('get_header') @endphp
  @include('partials.header')
  <div class="wrap" role="document" data-barba="container" data-barba-namespace="{{$post->ID}}"
    data-postid="{{$post->ID}}">
    <div id="body-classes" @php body_class() @endphp>
      <main class="main">
        @yield('content')
      </main>
    </div>
    <slot id="containerScript">
      @php wp_footer() @endphp
    </slot>
  </div>
  @php do_action('get_footer') @endphp
  @include('partials.footer')
  <slot id="baseFooterScript">
    @php wp_footer() @endphp
  </slot>
</body>

</html>
