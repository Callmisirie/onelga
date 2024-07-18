"use server";

import * as auth from "@/auth";

export async function signIn() {
    console.log('hello');
    
    return auth.signIn("google");
}

export async function signOut() {
    return auth.signOut();
}