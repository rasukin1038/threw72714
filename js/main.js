


function openGame() {
    var win = window.open()
    var url = "https://spew45.github.io"
    var iframe = win.document.createElement("iframe")
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.position = 'absolute';
    iframe.style.left = "0";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.top = "0px";
    iframe.style.overflow = "hidden";
    iframe.src = url
    win.document.body.appendChild(iframe)
    }