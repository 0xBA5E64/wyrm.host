<template>
    <div id="link-box">
        <a href="https://twitter.com/0xBA5E64">
            <Icon name="fa:twitter" size="24" />
        </a>
        <a rel="me" href="https://chaos.social/@TheHoardingWyrmling">
            <Icon name="mdi:mastodon" size="24" />
        </a>
        <!-- TODO: Implement multple mastodon instances properly; -->
        <!-- <a rel="me" href="https://dragon.style/@wyrm">Mastodon</a> -->
        <a href="https://dragon.singles/">
            <Icon name="fa7-solid:dragon" size="24" />
        </a>
        <a href="https://file.wyrm.host/">
            <Icon name="material-symbols:folder" size="24" />
        </a>
    </div>
</template>

<style scoped>

#link-box {
    display: flex;
    padding: 16px;

    justify-content: space-around;
    align-items: center;
}

#link-box > * {
    color: #ffffff;
    padding: 16px;
    opacity: 0.25;
    transition: all 200ms;
}

#link-box > *:hover {
    color: #ffffff;
    opacity: 0.9;
}

</style>
