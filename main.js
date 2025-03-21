setTimeout(() => {
    
    let blobFrame = null;
    let blobFrameContainer = null;
    let isOpening = false;
    let isClosing = false;
    
    document.addEventListener("keydown", function (blob) {
        if (blob.code == "Backquote" && blob.ctrlKey && blob.shiftKey && !blobFrame && !isClosing) {
            isOpening = true;            
            if (blobFrame) {
                closeWithAnimation(blobFrameContainer);
                blobFrame = null;
                return;
            }

            blobFrameContainer = document.createElement("div");
            blobFrameContainer.style.cssText = `
                position: fixed;
                width: 600px;
                height: 400px;
                z-index: 999999999999;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.8); /* Neon cyan glow */
                background-color: #121212; /* Dark background */
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 0px 0px;
                padding: 0px 0px;
            `;

            blobFrame = document.createElement("iframe");
            blobFrame.setAttribute("tabindex", "0");
            blobFrame.style.cssText = `
                width: 100%;
                height: calc(100% - 40px);
                border: none;
                position: absolute;
                top: 40px;
                display: block;
                user-select: none;
                background-color: #1d1d1d; /* Dark grey background for the iframe */
                color: #fff; /* White text for readability */
            `;

            fetch("https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/main.html")
                .then(response => response.text())
                .then(html => {
                    const uBlobeHtml = blobFrame.contentDocument || blobFrame.contentWindow.document;
                    uBlobeHtml.open();
                    uBlobeHtml.write(html);
                    uBlobeHtml.close();
                });

            const bar = document.createElement("div");
            bar.style.cssText = `
                width: 100%;
                height: 40px;
                background-color: #333333; /* Darker bar for the theme */
                position: relative;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                user-select: none;
                cursor: move;
                margin: 0px 0px;
                padding: 0px 0px;
                color: #ff33cc; /* Neon pink title text */
                box-shadow: 0px 4px 20px rgba(255, 51, 204, 0.8); /* Neon glow */
            `;

            const closeButton = document.createElement("button");
            closeButton.innerText = "×";
            closeButton.style.cssText = `
                position: absolute;
                top: 50%;
                right: 15px;
                width: 25px;
                height: 30px;
                margin: 0px 0px;
                padding: 0px 0px;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 20px;
                font-family: 'Varela Round', sans-serif;
                color: #ff00ff; /* Neon purple close button */
                cursor: pointer;
                transition: color 0.3s ease;
            `;
            closeButton.addEventListener("mouseenter", function() {
                closeButton.style.color = "#00ff00"; /* Glowing green on hover */
            });
            closeButton.addEventListener("mouseleave", function() {
                closeButton.style.color = "#ff00ff"; /* Neon purple when not hovering */
            });
            closeButton.addEventListener("click", closeIframe);

            const titleText = document.createElement("div");
            titleText.innerText = "uBlobeBM";
            titleText.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #ff33cc; /* Neon pink title text */
                font-size: 16px;
                font-family: 'Varela Round', sans-serif;
                user-select: none;
                background-color: transparent;
                text-align: center;
            `;

            bar.appendChild(titleText);
            bar.appendChild(closeButton);

            bar.addEventListener("mousedown", startDragging);

            blobFrameContainer.appendChild(blobFrame);
            blobFrameContainer.appendChild(bar);

            document.body.appendChild(blobFrameContainer);

            blobFrameContainer.offsetHeight;

            requestAnimationFrame(() => {
                blobFrameContainer.style.opacity = "1";
                blobFrameContainer.style.transform = "translate(-50%, -47%) translateY(0)";
                blobFrame.focus();
            });
            
            setTimeout(() => {
                isOpening = false;
            }, 300);
            
            window.addEventListener("message", handleMessage);
        }
    });

    let offsetX, offsetY;
    let isDragging = false;
    
    function startDragging(e) {
        const rect = blobFrameContainer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        isDragging = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "none";
        blobFrameContainer.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);

        blobFrameContainer.style.left = newX + "px";
        blobFrameContainer.style.top = newY + "px";
        blobFrameContainer.style.transform = 'none';
    }

    function stopDragging() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "auto";
        blobFrameContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    function closeIframe() {
    	if (isOpening || isClosing) return;
        closeWithAnimation(blobFrameContainer);
        blobFrame = null;
        window.removeEventListener("message", handleMessage);
    }

    function handleMessage(message) {
        if (message.data.toString().startsWith("run:")) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
    
            setTimeout(() => {
                try {
                    eval(decodeURIComponent(message.data.toString().replace("run:", "")));
                } catch (error) {
                let messageData = message.data.toString().replace("run:", "");
                const replacements = {
                    '%20': ' ',
                    '%21': '!',
                    '%22': '"',
                    '%23': '#',
                    '%24': '$',
                    '%25': '%',
                    '%26': '&',
                    '%27': "'",
                    '%28': '(',
                    '%29': ')',
                    '%2C': ',',
                    '%2E': '.',
                    '%2F': '/',
                    '%3A': ':',
                    '%3B': ';',
                    '%3C': '<',
                    '%3D': '=',
                    '%3E': '>',
                    '%3F': '?',
                    '%40': '@',
                    '%5B': '[',
                    '%5D': ']',
                    '%5E': '^',
                    '%60': '`',
                    '%7B': '{',
                    '%7C': '|',
                    '%7D': '}',
                    '%7E': '~',
                };

                for (const [encoded, decoded] of Object.entries(replacements)) {
                    messageData = messageData.replace(new RegExp(encoded, 'g'), decoded);
                }
    
                try {
                    eval(messageData);
                } catch (error) {
                        console.error('Error executing bookmarklet:', error.message);
                        window.alert('An error occured while executing the bookmarklet. Try double checking the code of the bookmarklet. Error: ' + error.message);
                  }
               }
            }, 200);
        }
    }

    function closeWithAnimation(element) {
        isClosing = true;
        element.style.transition = "opacity 0.2s ease";
        element.style.opacity = "0";

        setTimeout(() => {
            element.remove();
            isClosing = false;
        }, 200);
    }
}, 500);
