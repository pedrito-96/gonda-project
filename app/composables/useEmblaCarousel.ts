import emblaCarouselVue from "embla-carousel-vue";
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";

export default function useEmblaCarousel(
  options: EmblaOptionsType = {},
  plugins: EmblaPluginType[] = [],
) {
  const [emblaRef, emblaApi] = emblaCarouselVue(options, plugins);

  const scrollNext = () => {
    if (emblaApi.value) {
      emblaApi.value.scrollNext();
    }
  };

  const scrollPrev = () => {
    if (emblaApi.value) {
      emblaApi.value.scrollPrev();
    }
  };

  const scrollTo = (index: number, jump: boolean = false) => {
    if (emblaApi.value) {
      emblaApi.value.scrollTo(index, jump);
    }
  };

  return {
    emblaRef,
    emblaApi,
    scrollNext,
    scrollPrev,
    scrollTo,
  };
}
