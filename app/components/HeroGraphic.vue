<script setup lang="ts">
const {
    graphic,
    speed = 10,
    width = 40,
    height = 10,
} = defineProps<{
    graphic: number[][];
    speed?: number;
    width?: number;
    height?: number;
}>();

const canvas = useTemplateRef("graphic-container");
const graphic_cursor = { x: 0, y: 0 };

const graphicRender = () => {
    // If we're on the line after the last we're done and return early
    if (graphic_cursor.y == graphic.length) return;

    // If speed is 0 we skip the animation and just iterate through the whole ordeal in one swoop
    if (!speed) {
        // Row Iterator
        for (let y = 0; y < graphic.length; y++) {
            // Pixel Iterator
            for (let x = 0; x < graphic[y]!.length; x++) {
                const pixel = canvas.value!.children[y]!.children[x]!;
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
    let pixel =
        canvas.value!.children[graphic_cursor.y]!.children[graphic_cursor.x]!;
    if (graphic[graphic_cursor.y]![graphic_cursor.x]!) {
        pixel.classList.add("active");
    }

    graphic_cursor.x++;

    if (graphic_cursor.x >= graphic[0]!.length) {
        graphic_cursor.x = 0;
        graphic_cursor.y++;
    }

    setTimeout(() => {
        graphicRender();
    }, speed);
};

onMounted(() => {
    graphicRender();
});
</script>

<template>
    <div class="graphic-container" ref="graphic-container">
        <div class="row" v-for="_y in height">
            <div class="pixel" v-for="_x in width"><span>+</span></div>
        </div>
    </div>
</template>

<style>
.graphic-container {
    display: flex;
    flex-direction: column;
}

.graphic-container .row {
    display: flex;
    flex-direction: row;
}

.graphic-container .pixel {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;
    font-size: 16px;
    cursor: default;
}

.graphic-container .pixel span,
.graphic-container .pixel.active:hover span {
    /* <- this line inverts active pixels when hovered */
    transform: rotate(0deg);
    font-weight: normal;
    opacity: 0.25;
    transition: all 200ms;
}

.graphic-container .pixel.active span,
.graphic-container .pixel:hover span {
    font-weight: bold;
    transform: rotate(45deg);
    opacity: 1;
}

@media only screen and (orientation: portrait) {
    .graphic-container .pixel {
        width: 2vw;
        height: 2vw;
        font-size: 2vw;
    }
}
</style>
