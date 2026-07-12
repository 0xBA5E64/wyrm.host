<script setup lang="ts">
const {
    graphic,
    speed = 10,
    width = 40,
    height = 10,
} = defineProps({
    graphic: [[Number]],
    speed: Number,
    width: Number,
    height: Number,
});

const canvas = useTemplateRef("canvas");
let graphic_cursor = { x: 0, y: 0 };

const graphicRender = () => {
    // If we're on the line after the last we're done and return early
    if (graphic_cursor.y == graphic.length) return;

    // If speed is 0 we skip the animation and just iterate through the whole ordeal in one swoop
    if (speed == 0) {
        // Row Iterator
        for (let y = 0; y < graphic.length; y++) {
            // Pixel Iterator
            for (let x = 0; x < graphic[y]!.length; x++) {
                const pixel =
                    canvas.value!.querySelectorAll(".row")![y]!.children[x]!;
                if (graphic[y]![x]!) {
                    pixel.classList.add("active");
                } else {
                    pixel.classList.remove("active");
                }
            }
        }
        return;
    }

    // Check if the pixel is meant to be active and set it as such if so
    if (graphic[graphic_cursor.y]![graphic_cursor.x]!) {
        canvas
            .value!.querySelectorAll(".row")!
            [graphic_cursor.y]!.children[graphic_cursor.x]!.classList.add(
                "active",
            );
    }

    graphic_cursor.x++;

    if (graphic_cursor.x >= graphic[0]!.length) {
        graphic_cursor.x = 0;
        graphic_cursor.y++;
    }

    setTimeout(function () {
        graphicRender();
    }, speed);
};

onMounted(() => {
    graphicRender();
});
</script>

<template>
    <div class="logo-box" ref="canvas">
        <div class="row" v-for="_y in height">
            <div class="pixel" v-for="_x in width"><span>+</span></div>
        </div>
    </div>
</template>

<style scoped>
.logo-box {
    position: relative;
    display: flex;
    flex-direction: column;
}

.logo-box .row {
    display: flex;
    flex-direction: row;
}

.logo-box .pixel {
    position: relative;
    display: inline-block;
    height: 16px;
    width: 16px;
    font-size: 16px;
    cursor: default;
}

.logo-box .pixel span,
.logo-box .pixel.active:hover span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 16px;
    font-weight: normal;
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0.25;
    transition: all 200ms;
}

.logo-box .pixel.active span,
.logo-box .pixel:hover span {
    font-weight: bold;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 1;
}

@media only screen and (orientation: portrait) {
    .logo-box .pixel {
        width: 2vw;
        height: 2vw;
    }

    .logo-box .pixel span {
        font-size: 2vw;
    }
}
</style>
