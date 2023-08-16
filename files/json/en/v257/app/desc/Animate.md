Animate calls a function repeatedly like setInterval() but with the current time (Date.getTime()) and the difference to the last call in milliseconds as parameter.
To stop the animation loop you can pass _null_ as first argument.
You can not have multiple animation loops at once.
When using _cfg.NoDom_; you cannot use JavaScripts _setInterval_ but only the _Animate_ function.
<red>Note: The _NoDom_ option is currently not available due to GooglePlays 64bit requirement since August 2019.</red>

<h3>Comparison</h3>

**normal**:
	_setInterval_: about 242 calls per second
	_app.Animate_: about 217 calls per second

**with “NoDom” option**:
	_setInterval_: error
	_app.Animate_: up to 1000 calls per second

<sample Multiple Animation loops>
function OnStart()
{
    lay = app.CreateLayout("Linear");

    txt1 = app.CreateText("0");
    lay.AddChild(txt1);

    txt2 = app.CreateText("0");
    lay.AddChild(txt2);

    app.AddLayout(lay);

    // delay between calls: 1000ms / 10fps = 100 ms
    // for higher precision use higher fps
    app.Animate(loop, 10);
}

var t1 = 0, t2 = 0, n1 = 0, n2 = 0;
function loop(t, dt)
{
    // set txt1 every 500 ms
    if(t - t1 >= 500)
    {
        txt1.SetText(++n1 + "\tdt: " + (t - t1));
        t1 = t;
    }

    // set txt2 every 300 ms
    if(t - t2 >= 300)
    {
        txt2.SetText(++n2 + "\tdt: " + (t - t2));
        t2 = t;
    }
}
</sample>
