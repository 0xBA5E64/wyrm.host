<script setup lang="ts">
// prettier-ignore
let wyrm_graphic_matrix: number[][] = [
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
];
// prettier-ignore
let drgn_graphic_matrix: number[][] = [
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
];
</script>

<template>
    <section id="greeter">
        <HeroGraphic :graphic="wyrm_graphic_matrix" />
        <SocialLinks />
    </section>

    <section id="information">
        <div class="section-label">
            <p class="title">
                <Icon name="ri:arrow-down-s-line" size="32" />Bio<span
                    >graphy</span
                >
            </p>
            <p class="disclaimer">
                Based off of Midnight Scrivener's
                <a
                    href="https://midnight-scrivener.tumblr.com/post/169992996839/what-if-people-we-consider-collectors-today-were"
                    >flash fiction</a
                >
            </p>
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

section#greeter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

section .section-label {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    max-width: 2000px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

section .section-label .title {
    display: flex;
    align-items: center;
}

section .section-label .title span {
    opacity: 0.5;
}

section .section-label .disclaimer {
    margin-left: 50px;
    text-align: right;
}

@media only screen and (orientation: portrait) {
    section .section-label .disclaimer {
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
