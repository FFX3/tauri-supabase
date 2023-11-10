<script lang="ts">
    import { enhance } from '$app/forms';

	export let data
    
    async function handleSignOut(){
        return async({ update }) => {
            update()
        }
    }
</script>

<h1>This boiler plate uses skeleton UI, Tailwind, Svelte, Tauri, and supabase</h1>

<p>User email: {data.session?.user.email}</p>
<p>Current path: {data.url}</p>


<form method="post" action="?/signout" use:enhance={handleSignOut}>
    <div>
        <button class="button block" type="submit">Sign Out</button>
    </div>
</form>
