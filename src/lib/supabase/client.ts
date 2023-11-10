//import { createClient } from '@supabase/supabase-js'
//import type { Database } from '@/types/database.types'
//import { store } from '@store'
//
//import { PUBLIC_SUPABASE_URL, PUBLIC_ANON_KEY } from '$env/static/public'
//
//const storeAdapter = {
//    setItem: (key: any, value: any)=>{
//        store.set(key as string, value)
//    },
//    getItem: async (key: string)=>{
//        return await store.get(key) as string | null
//    },
//    removeItem: (key: string) => { store.delete(key) }
//}
//
//export const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_ANON_KEY, {
//    auth: {
//        storage: storeAdapter,
//    },
//})
