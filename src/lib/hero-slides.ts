import { specialties } from "@/lib/specialties";

// Only confirmed services with user-approved photography enter the home carousel.
export const heroSlides = specialties.flatMap((area) => area.services.flatMap((service) => service.image ? [{
  id: service.id,
  name: service.title,
  image: service.image,
  alt: service.alt,
  slug: area.slug,
}] : []));

export function nextSlide(index: number, direction: number, count: number) {
  return count > 0 ? (index + direction + count) % count : 0;
}