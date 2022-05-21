<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

</script>



<button  on:click={() => dispatch("click")} class="button">
    <slot></slot>
</button>

<style>
    .button {
        border-radius: 1em;
        color: white;
        background-color:cornflowerblue;
        border: none;
        box-shadow: 10px 10px 50px grey;
        cursor: pointer;
    }
</style>