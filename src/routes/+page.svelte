<script lang="ts">
    import { enhance } from '$app/forms';

	export let data
    
    async function handleSignOut(){
        return async({ update }: any) => {
            update()
        }
    }
</script>

<p>User email: {data.session?.user.email}</p>

<div class="w-full flex flex-col items-center p-10 space-y-3">
    <h1>This boiler plate uses:</h1> 

    <ol class='list bg-secondary-900 w-60 p-4 rounded'>
        <li>
            <a href="/elements/lists">
                <span class="badge bg-primary-500">1.</span>
                <span class="flex-auto">Skeleton UI</span>
            </a>
        </li>
        <li>
            <a href="/elements/lists">
                <span class="badge bg-primary-500">2.</span>
                <span class="flex-auto">SvelteKit</span>
            </a>
        </li>
        <li>
            <a href="/elements/lists">
                <span class="badge bg-primary-500">3.</span>
                <span class="flex-auto">Tauri</span>
            </a>
        </li>
        <li>
            <a href="/elements/lists">
                <span class="badge bg-primary-500">4.</span>
                <span class="flex-auto">Supabase</span>
            </a>
        </li>
    </ol>

    <form method="post" action="?/signout" use:enhance={handleSignOut}>
        <div>
            <button class="btn variant-filled-primary" type="submit">Sign Out</button>
        </div>
    </form>
</div>


