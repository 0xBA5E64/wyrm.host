<template>
    <div id="main">

        <div class="section" id="sectionGreeter">

            <div id="centerBox">
                <HeroGraphic />
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
// document.getElementById("linkBox").children[2].addEventListener("mouseenter", function(){renderImage(imageDrgnLogo)})
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

/* SECTION: "INFORMATION" */

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
