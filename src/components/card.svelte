<script>
    let flipped = $state(false);
</script>

<button class='card w-40 h-64 border border-zinc-500 relative' style:--bg-color='green' onclick={()=>flipped = !flipped}>
    <div class='absolute bg-red-500 w-full h-full back flex justify-center items-center text-white top-0' class:flipped = {!flipped}>
        <p>UMA Maths</p>
    </div>
    <div class='absolute  w-full h-full front flex justify-center items-center text-white top-0' class:flipped={flipped}>

        <p>大成数学</p>
    </div>
</button>
<style>
    .card{
        perspective: 1000px;
    }
    .front, .back{
        backface-visibility: hidden;
        transform-style:preserve-3d;
        @apply duration-300;
    }
    .flipped{
        transform: rotateY(180deg);
    }
    .front{
        background-color: var(--bg-color);
    }
</style>