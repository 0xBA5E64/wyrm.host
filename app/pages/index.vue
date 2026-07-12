<template>
    <div id="main">

        <div class="section" id="sectionGreeter">

            <div id="centerBox">
                <div id="logoBox"></div>
                <SocialLinks />
            </div>

            <!-- <CryptoAddresses /> -->
        </div>

        <div class="section" id="sectionInformation">
            <div class="aboutBar">
                <span class="title"
                    >Bio<span style="opacity: 0.5">graphy</span></span
                >
                <span class="disclaimer"
                    >Based off of Midnight Scrivener's
                    <a
                        href="https://midnight-scrivener.tumblr.com/post/169992996839/what-if-people-we-consider-collectors-today-were"
                        >flash fiction</a
                    ></span
                >
            </div>

            <BiographyDialogue />
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        let canvas = document.getElementById("logoBox");
        let canvasSize = { x: 40, y: 10 };

        let imageWyrmLogo = [
          [0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
          [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
          [0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
          [0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0],
          [0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
          [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0]
        ]

        let imageDrgnLogo = [
          [0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0]
        ]

        function init() {
            for (let i = 0; i < canvasSize.y; i++) {
                let pixelRowElement = document.createElement("div");
                pixelRowElement.classList.add("row");
                canvas.appendChild(pixelRowElement);

                for (let i2 = 0; i2 < canvasSize.x; i2++) {
                    let pixelElement = document.createElement("div");
                    pixelElement.classList.add("pixel");
                    pixelElement.appendChild(document.createElement("span"));
                    pixelElement.children[0].innerText = "+";
                    pixelRowElement.appendChild(pixelElement);
                }
            }
        }

        init();

        function renderImage(image) {
            for (let i = 0; i < image.length; i++) {
                for (let i2 = 0; i2 < image[i].length; i2++) {
                    if (image[i][i2]) {
                        canvas
                            .getElementsByClassName("row")
                            [i].children[i2].classList.add("active");
                    } else {
                        canvas
                            .getElementsByClassName("row")
                            [i].children[i2].classList.remove("active");
                    }
                }
            }
        }

        let renderImageMem = { x: 0, y: 0 };

        function renderImageSlow(image) {
            //console.log("Now serving pixel X: " + renderImageMem.x + " Y: " + renderImageMem.y)

            if (renderImageMem.y == image.length) {
                return true;
            }

            if (image[renderImageMem.y][renderImageMem.x]) {
                canvas
                    .getElementsByClassName("row")
                    [renderImageMem.y].children[renderImageMem.x].classList.add(
                        "active",
                    );
            }

            renderImageMem.x++;

            if (renderImageMem.x >= image[0].length) {
                renderImageMem.x = 0;
                renderImageMem.y++;
            }

            setTimeout(function () {
                renderImageSlow(image);
            }, 10);
        }

        renderImageSlow(imageWyrmLogo);

        // document.getElementById("linkBox").children[2].addEventListener("mouseenter", function(){renderImage(imageDrgnLogo)})
    },
};
</script>

<style>
body {
    background: #001;
    color: white;
    font-family: "Blex", "Courier New", Courier, monospace;
    margin: 0;
}

#main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

.section {
    position: relative;
    top: 0;
    width: 100%;
    padding: 0;
    margin: 0;
}

/*
 // TOP SECTION:
 // "GREETER"
 */

.section#sectionGreeter {
    height: 100%;
}

#centerBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    display: inline-grid;
}

#logoBox {
    position: relative;
    display: inline-flex;
    flex-direction: column;
}

#centerBox .row {
    position: relative;
    display: inline-flex;
    flex-direction: row;
}

#logoBox .pixel {
    position: relative;
    display: inline-block;
    height: 16px;
    width: 16px;
    cursor: default;
    overflow: hidden;
}

#logoBox .pixel span,
#logoBox .pixel.active:hover span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 16px;
    font-weight: normal;
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0.25;
    transition: all 200ms;
}

#logoBox .pixel.active span,
#logoBox .pixel:hover span {
    font-weight: bold;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 1;
}

@media only screen and (orientation: portrait) {
    #logoBox .pixel {
        width: 2vw;
        height: 2vw;
    }

    #logoBox .pixel span {
        font-size: 2vw;
    }
}

/*
  // SECTION:
  // "INFORMATION"
  */

#sectionInformation {
    position: relative;
    /* Potential section-specific adjustments here ;) */
}

#sectionInformation .aboutBar {
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    max-width: 2000px;
    height: 90px;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#sectionInformation .aboutBar .title {
    display: flex;
    align-items: center;
}

#sectionInformation .aboutBar .title:before {
    position: relative;
    display: inline-block;
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-right: solid white 0.15em;
    border-bottom: solid white 0.15em;
    margin: 0em 0.8em;
    /*background: linear-gradient(
    45deg,
    transparent   0%,
    transparent  45%,
    white      45%,
    white      55%,
    transparent  55%,
    transparent 100%
  );*/
    transform: translateY(-25%) rotate(45deg);
}

#sectionInformation .aboutBar .disclaimer {
    text-align: right;
    width: 65%;
}

@media only screen and (orientation: portrait) {
    #sectionInformation .aboutBar .disclaimer {
        font-size: 0.75em;
    }
}

#sectionInformation .biography {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
}

#sectionInformation a {
    display: inline-block;
    position: relative;
    color: #2df;
    font-style: italic;
    text-decoration: none;
    transition: 200ms;
}

#sectionInformation a::before {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background: #2df;
    z-index: -1;
    border-radius: 2px;
    opacity: 1;
    transition: 200ms;
}

#sectionInformation a:hover::before {
    height: 100%;
    opacity: 0.25;
}

</style>
