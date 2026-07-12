<template>
    <div id="crypto">
        <h1>Crypto</h1>
        <p class="BTC">bc1quf7vtr4sqzjfghny3lqzlmm4cn8aq9zzk3vg3t</p>
        <p class="BCH">qp9y97glf4frj8nsr4xzcrgfm9cq3vg6zc796xar4s</p>
        <p class="ETH">0xb081f5474005Cc375A61d89f74f99DC764D5FFE6</p>
        <p class="ETC">0xFba7aa0175450e8b18aAd3937e8f829d06769dE2</p>
        <p class="LTC">LgYjygRvNhmqu8CtcUnhF11fezkPFKZ6xu</p>
    </div>
</template>


<style scoped>

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
