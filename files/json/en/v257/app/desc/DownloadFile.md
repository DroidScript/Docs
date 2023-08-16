Downloads a file using the Android's built-in download manager which creates a notification with the current download status and a custom title and description.

In some cases there seems to appear a dialog - you can prevent that using the _NoDialog_ option.

With this methof you won't be able to get a OnComplete callback - if you need that check out @CreateDownloader.