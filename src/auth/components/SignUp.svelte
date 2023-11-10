<script lang="ts">
	import type { SupabaseClient, AuthError } from "@supabase/supabase-js";
    import { goto } from "$app/navigation";

    export let supabase: SupabaseClient

    let error: AuthError | null

	const createUser = async (event: SubmitEvent) => {
        const formData = new FormData(event.target as HTMLFormElement)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

		const { error: _error } = await supabase.auth.signUp({
			email,
			password,
		})
        error = _error
        if(!error){
            await goto('/dashboard')
        }
	}
</script>

<div class="flex justify-center items-center h-full">
    <div class="card p-4 variant-glass-secondary max-w-sm">
        <form id="form" class="space-y-4" on:submit={createUser}>
            {#if (error)}
                <span class="text-error-500">{error}</span>
            {/if}
            <input class="input p-2" placeholder="Email" name="email">
            <input class="input p-2" type="password" placeholder="Password" name="password">
            <button form="form" type="submit" class="btn variant-filled-primary">Create instance</button>
        </form>
        <a href="/auth/sign-in" class="underline block mt-6">Use an exsting instance?</a>
    </div>
</div>
