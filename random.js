document.addEventListener("keydown", function(blob) {
    if (blob.key == "~" && blob.ctrlKey) {
        alert("hi");
        if (blobFrame) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
            return;
        }

        blobFrameContainer = document.createElement("div");
        blobFrameContainer.style.cssText = "position: fixed; top: 50px; left: 50px; width: 600px; height: 400px; z-index: 9999; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); background-color: #ffffff;";

        blobFrame = document.createElement("iframe");
        blobFrame.src = "https://blobby-boi.github.io/uBlobeBM/main.html";
        blobFrame.style.cssText = "width: 100%; height: calc(100% - 30px); border: none; position: absolute; top: 30px; display: block;";
        
        const bar = document.createElement("div");
        bar.style.cssText = "width: 100%; height: 30px; background-color: #4CAF50; position: relative; border-top-left-radius: 8px; border-top-right-radius: 8px; user-select: none;";
        
        const minimizeButton = document.createElement("button");
        minimizeButton.innerText = "-";
        minimizeButton.style.cssText = "position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: none; border: none; font-size: 16px; color: #fff; cursor: pointer;";
        minimizeButton.addEventListener("click", toggleMinimize);
        minimizeButton.addEventListener("mouseenter", function() {
            minimizeButton.style.backgroundColor = "#357a38";
        });
        minimizeButton.addEventListener("mouseleave", function() {
            minimizeButton.style.backgroundColor = "transparent";
        });
        
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.style.cssText = "position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: none; border: none; font-size: 16px; color: #fff; cursor: pointer;";
        closeButton.addEventListener("click", closeIframe);
        closeButton.addEventListener("mouseenter", function() {
            closeButton.style.backgroundColor = "#357a38";
        });
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.backgroundColor = "transparent";
        });

        const titleText = document.createElement("div");
        titleText.innerText = "uBlobeBM";
        titleText.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fff; font-size: 16px; font-family: 'Varela Round', sans-serif; user-select: none;";

        bar.appendChild(minimizeButton);
        bar.appendChild(titleText);
        bar.appendChild(closeButton);
        bar.addEventListener("mousedown", startDragging);
        
        blobFrameContainer.appendChild(blobFrame);
        blobFrameContainer.appendChild(bar);
        
        document.body.appendChild(blobFrameContainer);
        
        var faviconLink = document.createElement("link");
        faviconLink.rel = "shortcut icon";
        faviconLink.href = "https://blobby-boi.github.io/uBlobeBM/favicon.png";
        document.head.appendChild(faviconLink);
        
        window.addEventListener("message", function(message) {
            if (message.data.toString().startsWith("run:")) {
                closeWithAnimation(blobFrameContainer);
                blobFrame = null;

                setTimeout(() => {
                    eval(message.data.toString().replace("run:", ""));
                }, 100);
            }
        });
    }
});
