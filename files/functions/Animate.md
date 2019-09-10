Animate calls a function repeatedly like setInterval() but with the current time (Date.getTime()) and the difference to the last call in milliseconds as parameter.
when using cfg.NoDom; to cause a high performance you cannot use SetInterval but Animate.

comparison:

normal:
	setInterval&colon; about 242 calls per second
	app.animate&colon; about 217 calls per second

with “NoDom” option:
	setInterval&colon; error
	app.Animate&colon; up to 1000 calls per second