<script lang="ts">
	import { goto } from "$app/navigation";
	import type { AuthError, SupabaseClient } from "@supabase/supabase-js";

    export let supabase: SupabaseClient
    let error: AuthError | null

	const createUser = async (event: SubmitEvent) => {
        const formData = new FormData(event.target as HTMLFormElement)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { data, error: _error} = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        error = _error
        if(data.session){
            console.log('going to dashboard')
            await goto('/dashboard')
        }
	}
</script>
sign_in
<div class="flex justify-center items-center h-full">
    <div class="card p-4 variant-glass-secondary max-w-sm">
        <form on:enhanced id="form" class="space-y-4" on:submit={createUser}>
            {#if (error)}
                <span class="text-error-500">{error}</span>
            {/if}
            <input class="input p-2" placeholder="Email" name="email">
            <input class="input p-2" type="password" placeholder="Password" name="password">
            <button form="form" type="submit" class="btn variant-filled-primary">Access instance</button>
        </form>
        <a href="/auth/sign-up" class="underline block mt-6">Create an instance</a>
    </div>
</div>
