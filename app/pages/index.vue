<template>
    <div id="main">
        <div class="section" id="sectionGreeter">
            <div id="centerBox">
                <div id="logoBox"></div>
                <div id="link-box">
                    <a href="https://twitter.com/0xBA5E64"
                        ><i class="fab fa-twitter fa-2x"></i
                    ></a>
                    <a rel="me" href="https://chaos.social/@TheHoardingWyrmling"
                        ><i class="fab fa-mastodon fa-2x"></i
                    ></a>
                    <!-- TODO: Implement multple mastodon instances properly; -->
                    <!-- <a rel="me" href="https://dragon.style/@wyrm">Mastodon</a> -->
                    <a href="https://dragon.singles/"
                        ><i class="fas fa-dragon fa-2x"></i
                    ></a>
                    <a href="https://file.wyrm.host/"
                        ><i class="fas fa-folder fa-2x"></i
                    ></a>
                </div>
            </div>

            <!-- Crypto was here -->

            <!--
    <div id="crypto">
      <h1>Crypto</h1>
      <p class="BTC">bc1quf7vtr4sqzjfghny3lqzlmm4cn8aq9zzk3vg3t</p>
      <p class="BCH">qp9y97glf4frj8nsr4xzcrgfm9cq3vg6zc796xar4s</p>
      <p class="ETH">0xb081f5474005Cc375A61d89f74f99DC764D5FFE6</p>
      <p class="ETC">0xFba7aa0175450e8b18aAd3937e8f829d06769dE2</p>
      <p class="LTC">LgYjygRvNhmqu8CtcUnhF11fezkPFKZ6xu</p>
    </div>
    -->
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

            <div class="biography">
                <p class="wyrm">
                    I am the dragon that calls themselves <b>Dovah</b>, and
                    <a href="https://file.wyrm.host/">this</a>, is my hoard.
                </p>
                <p class="othr">You... don't look really look like a dragon?</p>
                <p class="wyrm">
                    Well, hardly anyone does these days. As times have changed
                    so have we. The scales and wings worked along the dinosaurs.
                    But we quickly learned that wasn't going to fly with you
                    people. Though I do admittedly miss our kin's tails.
                </p>
                <p class="othr">
                    You were around all the way back to the dinosaurs?
                </p>
                <p class="wyrm">
                    Well, not <i>me</i>, personally. How old do you think I am?
                </p>
                <p class="othr">
                    ...There is no safe answer to that, is there?
                </p>
                <p class="wyrm">No.</p>
                <p class="othr">So... when you say this is your hoard...?</p>
                <p class="wyrm">
                    All dragons have one. Some stick to the old gold and jewels
                    thing, but that is somewhat cliché these days. Most of us
                    nowadays like our hoards to be a little bit more
                    sophisticated than 'shiny.'
                </p>
                <p class="othr">Like what?</p>
                <p class="wyrm">
                    I have known dragons whom collect snowflakes from the first
                    fall of the year over dozens of centuries. Dragons that
                    collect the petals of flowers left on the graves of loved
                    ones. Dragons that keep and care for soft toys and comfort
                    items, left behind by children as they've grown up. Dragons
                    that guard happy memories and shards of sunlight, kept safe
                    for rainy days.
                </p>
                <p class="wyrm">
                    I myself have found my calling in by nature of the digital
                    age; 1s & 0s. These two primitives let me freely build my
                    hoard out of most anything, at unprecidented density. Music,
                    art, film and writings, and not just the famed works of
                    noted names, but just so those of lesser praise. I catch all
                    that which catches my eye in the digital stream, and I do my
                    best to uphold my sanctuary of information.
                </p>
                <p class="othr">
                    Forgive me but, that seems unsafe to slumber on
                </p>
                <p class="wyrm">
                    Military-grade casing is a small price to pay for a safe
                    <i>and</i> self-heating hoard in winter.
                </p>
                <p class="othr">
                    Wow. So all these things... really mean a lot to you, huh?
                </p>
                <p class="wyrm">
                    They are my memories. All the things that have helped shape
                    me into the being who stands here talking to you now. Every
                    last one of them, in some way, is a fragment of my very
                    self.
                </p>
            </div>
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

#linkBox {
    display: flex;
    padding: 16px;

    justify-content: space-around;
    align-items: center;
}

#linkBox > * {
    color: #ffffff;
    padding: 16px;
    opacity: 0.25;
    transition: all 200ms;
}

#linkBox > *:hover {
    color: #ffffff;
    opacity: 0.9;
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

.biography {
    width: 800px;
    padding: 20px;
    font-size: 14px;
}

.biography p {
    display: block;
}

.biography p.wyrm {
    opacity: 0.8;
}

.biography p.othr {
    font-style: italic;
    opacity: 0.4;
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

#crypto {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

#crypto h1 {
    color: #aaa;
    font-family: "Blex", "IBM Plex Mono", "Courier New", Courier, monospace;
}

#crypto h1::before {
    content: "#";
    opacity: 0.25;
    margin-right: 4px;
}

#crypto p {
    margin: 8px 0;
    font-size: 12px;
    padding: 2px 8px;
    color: #aaa;
    font-family: "Blex", "IBM Plex Mono", "Courier New", Courier, monospace;
    border-radius: 4px;
    border: solid 1px #444;
}

#crypto p:before {
    font-weight: bold;
    border-right: solid 1px #aaa;
    padding-right: 8px;
    margin-right: 8px;
}

#crypto p.BTC:before {
    content: "BTC";
}
#crypto p.BCH:before {
    content: "BCH";
}
#crypto p.ETH:before {
    content: "ETH";
}
#crypto p.ETC:before {
    content: "ETC";
}
#crypto p.LTC:before {
    content: "LTC";
}
#crypto p.LTC:after {
    content: "########";
    color: #444;
    filter: blur(1px);
}
</style>
