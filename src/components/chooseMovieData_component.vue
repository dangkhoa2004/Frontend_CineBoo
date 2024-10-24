<template>
    <div class="booking-background">
        <div id="stars"></div>
        <div class="booking-content">
            <infoMovieData_component />
            <div class="booking-movie-description">
                <!-- Component schedule -->
                <chooseScheduleData_component />

                <!-- Component choose seat -->
                <chooseSeatData_component />

                <!-- Component infomation -->
                <checkoutSeatData_component />

                <!-- Component porncorn & water -->
                <chooseServiceData_component />
            </div>
        </div>
    </div>
</template>
<script>
import chooseServiceData_component from '../components/chooseServiceData_component.vue'
import infoMovieData_component from '../components/infoMovieData_component.vue'
import chooseScheduleData_component from '../components/chooseScheduleData_component.vue'
import chooseSeatData_component from '../components/chooseSeatData_component.vue'
import checkoutSeatData_component from './choosePaymentData_component/choosePaymentData_component.vue';
export default {
    components: { chooseSeatData_component, checkoutSeatData_component, chooseScheduleData_component, infoMovieData_component, chooseServiceData_component }
}
</script>