<<<<<<< HEAD
<<<<<<< HEAD
component('mail::message')
# Hello {{$content['name']}},

{{$content['body']}}

@component('mail::button', ['url' => $content['url']])
Click Here
=======
@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
Button Text
>>>>>>> b1.1_Paula
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
=======
@component('mail::message')
# Hello {{$content['name']}},
 
{{$content['body']}}
 
@component('mail::button', ['url' => $content['url']])
Click Here
@endcomponent
 
Thanks,<br>
{{ config('app.name') }}
@endcomponent
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
