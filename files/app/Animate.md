Animate calls a function repeatedly like setInterval() but with the current time (Date.getTime()) and the difference to the last call in milliseconds as parameter.
when using _cfg.NoDom_; to cause a high performance you cannot use SetInterval but Animate.
<red>Note: The _NoDom_ option is currently not available due to GooglePlays 64bit requirement since August 2019.</red>

<h3>Comparison</h3>

**normal**:
	_setInterval_: about 242 calls per second
	_app.Animate_: about 217 calls per second

**with “NoDom” option**:
	_setInterval_: error
	_app.Animate_: up to 1000 calls per second
