/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { App } from "astro/app";
//TODO: Check if this is dead code
declare global {
  namespace App {
    interface Locals {
      username: string;
    }
  }
}
