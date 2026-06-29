export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// Add real testimonials here as they come in. The homepage section only
// renders if this array is non-empty — no placeholder/fake quotes.
export const testimonials: Testimonial[] = [];
