<template>
    <section class="b-most-read">
        <div class="b-most-read__background"></div>
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <h2 class='b-most-read__title'><span class='cursive'>PLUS</span> <span class='bolder'>LUS</span></h2>
                <div class="b-most-read__mobile">
                    <app-article-preview v-for="(preview, index) in mostReadSlider.slice(0,4)"
                        :key = 'index'
                        :prev = "preview"
                        :thumbor = "{ imgDesk : {width: 200, height: 160}, imgMob: {width: 160, height: 136} }"
                        :tag = "tag"
                        :trim = "{ description: 100, title:45 }"
                    ></app-article-preview>
                </div>
                <div class="b-most-read__desk">
                    <slick
                        ref="slick"
                        :options="slickOptions"
                        class="b-most-read__slider">
                        <app-article-preview v-for="(preview, index) in mostReadSlider"
                            :key = 'index'
                            :prev = "preview"
                            :thumbor = "{ imgDesk : {width: 200, height: 160}, imgMob: {width: 160, height: 136} }"
                            :tag = "tag"
                            :trim = "{ description: 100, title:45 }"
                        ></app-article-preview>
                    </slick>
                    <div @click="prev()" class="b-most-read__arrow b-most-read__arrow--left">
                        <svg viewBox="0 0 51 51">
                            <g id="arrow" transform="translate(-168 -6093)">
                                <g id="arrow-2" data-name="arrow" transform="rotate(180 253 6443)">
                                    <g id="circle" class="cls-1" transform="rotate(180 169 3396.5)">
                                        <circle cx="25.5" cy="25.5" r="25.5" class="cls-3"/>
                                        <circle cx="25.5" cy="25.5" r="25" class="cls-4"/>
                                    </g>
                                    <g id="left-arrow" transform="rotate(180 158.971 3402.019)">
                                        <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15" d="M10.848 34.807H5.08v-2.538a.231.231 0 0 0-.394-.163L.067 36.72a.232.232 0 0 0 0 .327l4.618 4.616a.231.231 0 0 0 .163.067.228.228 0 0 0 .088-.018.231.231 0 0 0 .144-.212v-2.54h5.768a.231.231 0 0 0 .231-.231v-3.692a.231.231 0 0 0-.231-.23z" class="cls-2" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div @click="next()" class="b-most-read__arrow b-most-read__arrow--right">
                        <svg viewBox="0 0 51 51">
                            <g id="arrow" transform="translate(-1217 -6093)">
                                <g id="circle" class="cls-1" transform="rotate(180 634 3072)">
                                    <circle cx="25.5" cy="25.5" r="25.5" class="cls-3"/>
                                    <circle cx="25.5" cy="25.5" r="25" class="cls-4"/>
                                </g>
                                <g id="right-arrow" transform="rotate(180 623.971 3077.519)">
                                    <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                        <path id="Path_15" d="M10.848 34.807H5.08v-2.538a.231.231 0 0 0-.394-.163L.067 36.72a.232.232 0 0 0 0 .327l4.618 4.616a.231.231 0 0 0 .163.067.228.228 0 0 0 .088-.018.231.231 0 0 0 .144-.212v-2.54h5.768a.231.231 0 0 0 .231-.231v-3.692a.231.231 0 0 0-.231-.23z" class="cls-2" data-name="Path 15" transform="translate(0 -32.038)"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['mostReadSlider'],
        data() {
            return {
                slickOptions: {
                    slidesToShow: 4,
                    arrows: false
                },
                tag: {
                    visible: false,
                    text: 'My business'
                },
            }
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },
            prev() {
                this.$refs.slick.prev();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .b-most-read {
        margin-top: 5.2rem;
        margin-bottom: 4.7rem;
        padding: 2.4rem 0 1.8rem;
        background: $white-two;

        @include breakpoint(desktop) {
            position: relative;
            background: transparent;
            margin-top: 6.1rem;
            margin-bottom: 9.6rem;
            padding: 0;
        }

        &__background {
            display: none;

            @include breakpoint(desktop) {
                display: block;
                background: $white-two;
                height: 26.9rem;
                position: absolute;
                width: 100%;
                top: 14.7rem;
                left: 0;
            }

        }

        &__title {
            color: $black;
            margin-bottom: 3.4rem;
            @include fontSizeRem(22, 32);

            @include breakpoint(desktop) {
                margin-bottom: 3.6rem;
            }

            & .bolder{
                font-family: 'Lato-Black';
            }

            & .cursive{
                font-family: 'Airways';
                @include fontSizeRem(25, 32);
                display: block;
            }
        }

        &__mobile {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @include breakpoint(desktop) {
                display: none;
            }

            & .c-article-preview {
                margin-bottom: 2.6rem;
                width: 47.3%;
                &__title{
                    display: none;
                }
            }
        }

        &__desk {
            @include breakpoint(mobile) {
                display: none;
            }
            position: relative;
        }

        &__slider {
            width: 84.6%;
            margin: 0 auto;

            /deep/ .slick-slide {
                width: 20rem;
                margin: 0 1.65rem;
            }
        }

        &__arrow {
            position: absolute;
            top: 15.8rem;
            width: 5.1rem;
            height: 5.1rem;
            cursor: pointer;

            &--left {
                left: 0;
            }

            &--right {
                right: 0;
            }

            & svg {
                .cls-1,.cls-4{fill:none}
                .cls-1{stroke:#7e7e7e}
                .cls-2{fill:#7e7e7e;stroke:#707070}
                .cls-3{stroke:none}
            }
        }
    }
</style>
