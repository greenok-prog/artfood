<template>
    <Slider :breakpoints="categorySliderBreakpoints">
        <template #default="{ item }">
            <BlogCard />
        </template>
    </Slider>
</template>
<script lang="ts" setup>
import { categorySliderBreakpoints } from '~/constants/responsiveBreakpoints'
</script>