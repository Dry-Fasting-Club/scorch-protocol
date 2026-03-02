import Stripe from "stripe";

// Lazy singleton — deferred until first call so build-time lacks no env var
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-01-28.clover",
    });
  }
  return _stripe;
}

// Default export for convenience
export default getStripe;
