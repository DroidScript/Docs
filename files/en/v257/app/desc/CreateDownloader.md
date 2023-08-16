The Downloader component can be used to download a file straight from the internet to your phone or tablet's local storage. You can download a file with the **Download** method which accepts a _source url_ and a _target directory_: <js>dwn.Download( srcFileUrl, targetDir );</js>

Once the Download method has been called, it show a progress bar with the current download progress. But you can disable this behavior with the “NoDialog” **option**.

If you want to know when the download process has finished (or failed) you can define a callback functioni with the **SetOnComplete** method: <js>dload.SetOnComplete( callback );</js>
