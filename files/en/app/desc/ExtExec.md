ExtExec allows you to execute Linux shell commands in the powerful Linux environment provided by the free app called Termux.

<premium>

The Termux app runs as a service and there's almost no limit to what you can achieve with a full blown Linux machine running on your Android device!

How about installing git, or nodejs or using ssh or gzip.
Try typing 'busybox' at the terminal prompt to see what built-in commands are already available to you.

### Enable Termux
To **enable termux** support you have to install [Termux](https://play.google.com/store/apps/details?id=com.termux) and the [Tasker](https://play.google.com/store/apps/details?id=com.termux.tasker) Plugin from PlayStore first.

Then give termux **sdcard permissions** in the Android settings under apps/termux.

After that create a symbolic link from the tasker plugin folder to your home directory:
<bash>mkdir -p .termux /sdcard/termux/scripts
ln -s /sdcard/termux/scripts .termux/tasker</bash>Finally you can run a termux shell script from inside DroidScript: