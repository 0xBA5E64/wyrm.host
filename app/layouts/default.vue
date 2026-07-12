<template>
    <div id="main">
        <slot></slot>
    </div>
</template>

<style>
body {
    background: #001;
    color: white;
    font-family: "IBM Plex Mono", monospace;
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
</style>
