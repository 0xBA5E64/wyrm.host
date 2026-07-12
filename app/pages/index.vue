<script setup lang="ts">

let imageWyrmLogo: number[][] = [
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

let imageDrgnLogo: number[][] = [
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

// document.getElementById("linkBox").children[2].addEventListener("mouseenter", function(){renderImage(imageDrgnLogo)})
</script>

<template>

    <section id="greeter">

        <div class="center-container">
            <HeroGraphic :graphic=imageWyrmLogo />
            <SocialLinks />
        </div>

        <!-- <CryptoAddresses /> -->
    </section>

    <section id="information">

        <div class="aboutBar">
            <p class="title"
                >Bio<span style="opacity: 0.5">graphy</span></p
            >
            <p class="disclaimer"
                >Based off of Midnight Scrivener's
                <a
                    href="https://midnight-scrivener.tumblr.com/post/169992996839/what-if-people-we-consider-collectors-today-were"
                    >flash fiction</a
                ></p
            >
        </div>

        <BiographyDialogue />

    </section>

</template>

<style>
section {
    position: relative;
    top: 0;
    width: 100%;
    padding: 0;
    margin: 0;
}

/* TOP SECTION: "GREETER" */

section#greeter {
    height: 100%;
}

.center-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    display: inline-grid;
}

/* SECTION: "INFORMATION" */

section#nformation {
    position: relative;
    /* Potential section-specific adjustments here ;) */
}

section#information .aboutBar {
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

section#information .aboutBar .title {
    display: flex;
    align-items: center;
}

section#information .aboutBar .title:before {
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

section#information .aboutBar .disclaimer {
    text-align: right;
    width: 65%;
}

@media only screen and (orientation: portrait) {
    section#information .aboutBar .disclaimer {
        font-size: 0.75em;
    }
}

section#information .biography {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
}

section#information a {
    display: inline-block;
    position: relative;
    color: #2df;
    font-style: italic;
    text-decoration: none;
    transition: 200ms;
}

section#information a::before {
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

section#information a:hover::before {
    height: 100%;
    opacity: 0.25;
}
</style>
