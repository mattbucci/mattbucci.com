@extends('layout.master')

@section('landing')
    <div class="splash">
        <div class="typed-container">
            <div class="console-text">
                #
                <span class="name">buccim2</span>
                at
                <span class="host">mattbucci.com</span>
                in
                <span class="location">~/Development/Projects/mattbucci.com</span>
                on
                <span class="repo">git:master</span>
                x
                <span class="time">
                    [<script>document.write((new Date()).getMonth()+1 + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear())</script>]
                </span>
            </div>
            $  <span class="typed-text"> ^2000 ~/bin/greetUser.sh </span>
            <div class="response-text">
                Hey There!
            </div>
        </div>
        <div class="typed-container">
            <div class="console-text">
                #
                <span class="name">buccim2</span>
                at
                <span class="host">mattbucci.com</span>
                in
                <span class="location">~/Development/Projects/mattbucci.com</span>
                on
                <span class="repo">git:master</span>
                x
                <span class="time">
                    [<script>document.write((new Date()).getMonth()+1 + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear())</script>]
                </span>
            </div>
            $  <span class="typed-text">^5000  ls -la ~/Projects </span>
            <div class="response-text">
                drwxr-xr-x   5 buccim2  staff    170 Sep  6 00:55 After9 <br>
                drwxr-xr-x  41 buccim2  staff   1394 Oct 29 00:35 Arduino-IRremote <br>
                drwxr-xr-x  31 buccim2  staff   1054 Sep 21 15:41 CherryGalaxy <br>
                drwxr-xr-x  19 buccim2  staff    646 Dec 10 11:48 LunchClub <br>
                drwxr-xr-x  11 buccim2  staff    374 Oct 29 22:09 NexusHome <br>
                drwxr-xr-x  25 buccim2  staff    850 Dec  6 23:50 gridapp <br>
                drwxr-xr-x  28 buccim2  staff    952 Jan 19 21:42 mattbucci.com <br>
                drwxr-xr-x  25 buccim2  staff    850 Dec  6 23:50 motivateweb <br>
            </div>
        </div>
    </div>
@endsection

@section('content')
    <div class="section">
        <div class="content">
            <h1> Blog </h1>
            <div class="blog-tile">

            </div>
        </div>
    </div>
    <div class="section">
        <div class="content">
            <h1> Projects </h1>
            <div class="project-tile">

            </div>
        </div>
    </div>
    <div class="section">
        <div class="content inset">
            <div class="pure-u-1-3">
                <h1> About Me </h1>
                <p>
                    I'm a Developer who builds cool and innovative new things from existing technologies.
                    My passion lies in designing products that users want to embrace, products that solve real problems and are fun to use.
                </p>
            </div>
            <div class="pure-u-1-2">
                <h1> My Interests </h1>
            </div>
        </div>
    </div>
@endsection