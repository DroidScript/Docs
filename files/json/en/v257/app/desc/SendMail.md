Send an EMail to someone using the default mail application. The passed argumets will be auto-filled.
%c

GMail will not work due to privacy restrictions. Read more about this in [this post by DaveSmart](https://groups.google.com/d/msg/androidscript/o0863h9A-pE/9RfbaZ9uBQAJ):

### Using Gmail

_”Even though Gmail is the fastest way to get started with sending emails, it is by no means a preferable solution unless you are using OAuth2 authentication. Gmail expects the user to be an actual user not a robot so it runs a lot of heuristics for every login attempt and blocks anything that looks suspicious to defend the user from account hijacking attempts. For example you might run into trouble if your server is in another geographical location – everything works in your dev machine but messages are blocked in production.

Additionally Gmail has came up with the concept of 'less secure' apps which is basically anyone who uses plain password to login to Gmail, so you might end up in a situation where one username can send (support for 'less secure' apps is enabled) but other is blocked (support for '[less secure](https://support.google.com/accounts/answer/6010255?hl=en)' apps is disabled). When using this method make sure to enable the required functionality by completing the “[captcha enable](https://accounts.google.com/b/0/displayunlockcaptcha)”. Without this, less secure connections won't work.
<red>**Note: These changes are not recommended to make to your main email account!**</red>

To prevent having login issues you should either use XOAUTH2 (see details [here](https://nodemailer.com/smtp/#authentication)) or use another provider and preferably a dedicated one like [Mailgun](https://www.mailgun.com/) or [SendGrid](https://sendgrid.com) or any other. Usually these providers have free plans available that are comparable to the daily sending limits of Gmail. Gmail has a limit of 500 recipients a day (a message with one To and one Cc address counts as two messages since it has two recipients) for @gmail.com addresses and 2000 for Google Apps customers, larger SMTP providers usually offer about 200-300 recipients a day for free.“_

See Also: @SendSMS, @SendFile
