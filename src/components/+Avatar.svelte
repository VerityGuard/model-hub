<script>
	import generateNameColor from "../utils/generateNameColor";
	import getPlaceholderInitials from "../utils/getPlaceholderInitials";

    export let name;
    export let className = "rounded w-5 h-5 text-[11px]";

    const placeholderInitials = getPlaceholderInitials(name);

    const color = generateNameColor(name, 45, 65);
    
</script>

<div style="background-color: {color};" class="relative flex justify-center items-center uppercase text-white {className}">
    <span class="pr-[1px]">{placeholderInitials}</span>
</div>